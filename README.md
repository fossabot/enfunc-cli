enfunc-cli
==========

High-availability distributed Function as a Service solution for building scalable apps and rest apis

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/enfunc-cli.svg)](https://npmjs.org/package/enfunc-cli)
[![Codecov](https://codecov.io/gh/enteam/enfunc-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/enteam/enfunc-cli)
[![Downloads/week](https://img.shields.io/npm/dw/enfunc-cli.svg)](https://npmjs.org/package/enfunc-cli)
[![License](https://img.shields.io/npm/l/enfunc-cli.svg)](https://github.com/enteam/enfunc-cli/blob/master/package.json)

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
enfunc-cli/0.0.0 win32-x64 node-v11.1.0
$ enfunc --help [COMMAND]
USAGE
  $ enfunc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`enfunc hello [FILE]`](#enfunc-hello-file)
* [`enfunc help [COMMAND]`](#enfunc-help-command)

## `enfunc hello [FILE]`

describe the command here

```
USAGE
  $ enfunc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ enfunc hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/enteam/enfunc-cli/blob/v0.0.0/src\commands\hello.ts)_

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
