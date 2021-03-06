enfunc-cli
==========

High-availability distributed Function as a Service solution for building scalable apps and rest apis

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/enfunc-cli.svg)](https://npmjs.org/package/enfunc-cli)
[![Codecov](https://codecov.io/gh/enteam/enfunc-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/enteam/enfunc-cli)
[![Downloads/week](https://img.shields.io/npm/dw/enfunc-cli.svg)](https://npmjs.org/package/enfunc-cli)
[![License](https://img.shields.io/npm/l/enfunc-cli.svg)](https://github.com/enteam/enfunc-cli/blob/master/package.json)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fenteam%2Fenfunc-cli.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fenteam%2Fenfunc-cli?ref=badge_shield)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g enfunc-cli
$ enfunc COMMAND
running command...
$ enfunc (-v|--version|version)
enfunc-cli/0.0.8 win32-x64 node-v11.1.0
$ enfunc --help [COMMAND]
USAGE
  $ enfunc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`enfunc deploy`](#enfunc-deploy)
* [`enfunc help [COMMAND]`](#enfunc-help-command)

## `enfunc deploy`

Deploy code into the enfunc instance or cluster

```
USAGE
  $ enfunc deploy

OPTIONS
  -a, --app=app  [default: hello-world]
  -b, --bump
  -k, --key=key  [default: 1234]
```

_See code: [src\commands\deploy.ts](https://github.com/enteam/enfunc-cli/blob/v0.0.8/src\commands\deploy.ts)_

## `enfunc help [COMMAND]`

display help for enfunc

```
USAGE
  $ enfunc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src\commands\help.ts)_
<!-- commandsstop -->


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fenteam%2Fenfunc-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fenteam%2Fenfunc-cli?ref=badge_large)