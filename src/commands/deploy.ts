import Command from "@oclif/command";
import * as archiver from "archiver";
import axios from "axios";
import * as FormData from "form-data";
import { createReadStream, createWriteStream } from "fs";
import { tmpdir } from "os";
import { dirname, join, sep, basename } from "path";
import { generate } from "shortid";

import { IRevision } from "../interfaces/revision.interface";

export default class Deploy extends Command {

	public static description = "Deploy code into the enfunc instance or cluster";

	public run() {
		return new Promise(resolve => {
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
						appName: basename(dirname(process.cwd())),
						name: `Deployment #${uploadId}`,
						revision: uploadId,
						url: `database://${uploadId}`,
					};
					axios.post(process.env.ENFUNC_HOST + "/functions/sync", rev).then((syncResponse) => resolve());
				});
			});
			archive.pipe(zipStream);
			archive.directory(join(process.cwd()), false);
			archive.finalize();
		});
	}
}
