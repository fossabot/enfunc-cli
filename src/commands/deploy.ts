import Command, { flags } from "@oclif/command";
import * as archiver from "archiver";
import axios from "axios";
import * as FormData from "form-data";
import { createReadStream, createWriteStream } from "fs";
import { arch, tmpdir } from "os";
import { basename, dirname, join, sep } from "path";
import { generate } from "shortid";

import { IRevision } from "../interfaces/revision.interface";

export default class Deploy extends Command {

	public static description = "Deploy code into the enfunc instance or cluster";

	public static flags = {
		app: flags.string({ char: "a" }),
		bump: flags.boolean({ char: "b", default: true }),
	};

	public run() {
		return new Promise((resolve) => {
			// tslint:disable-next-line:no-shadowed-variable
			const { flags } = this.parse(Deploy);
			const filename = join(tmpdir(), generate() + ".zip");
			const zipStream = createWriteStream(filename);
			const archive = archiver("zip", {
				zlib: { level: 9 },
			});
			zipStream.on("close", () => {
				const form = new FormData();
				form.append("file", createReadStream(filename), {
					filename: "file",
				});
				axios.create({
					headers: form.getHeaders(),
				}).post(process.env.ENFUNC_HOST + "/functions/upload", form).then((uploadResponse) => {
					const uploadId = uploadResponse.data.data.id;
					const rev: IRevision = {
						appName: flags.app,
						name: `Deployment #${uploadId}`,
						revision: uploadId,
						url: `database://${uploadId}`,
					};
					axios.post(process.env.ENFUNC_HOST + "/functions/sync", rev).then((syncResponse) => {
						if (!flags.bump) { resolve(); } else {
							axios.get(process.env.ENFUNC_HOST + "/functions").then((funcsResponse) => {
								const bump = async () => {
									for (const func of funcsResponse.data) {
										if (func.appName === flags.app) {
											func.id = func._id;
											func.revision = uploadId;
											await axios.put(process.env.ENFUNC_HOST + `/functions/${func.id}`, func);
										}
									}
								};
								bump().then(() => resolve());
							});
						}
					});
				});
			});
			archive.pipe(zipStream);
			archive.directory(join(process.cwd(), "src"), "src");
			archive.file(join(process.cwd(), "package.json"), {
				name: "package.json",
			});
			archive.finalize();
		});
	}
}
