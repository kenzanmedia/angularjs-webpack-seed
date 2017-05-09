# angularjs-webpack-seed (seed-webapp-1.0)
AngularJS and Webpack Seed Project for The Greenhouse, as a template / starter project for frontend web applications.
This is a simple starter project meant to get you up and running as fast as possible with a full local and production
build with all the tools working together and as minimal friction and configuration as possible.  Simply clone the
repo and edit the files as needed to match your project.

## Tooling
The following tools are used in the application

- [AngularJS][] - as the Front-End framework
- [Webpack][] 2 - Module loader / bundler, primary build tool
- [Node][] 6  - local development and build time JavaScript runtime
- [Yarn][] - package manager for build and application dependencies

[Node]: https://nodejs.org/
[Yarn]: https://yarnpkg.com/en/
[AngularJS]: https://angularjs.io/
[Webpack]: https://webpack.github.io/

## Links
* Repository (Github)- **TODO: your-link-here**
* Issue Tracker (JIRA) - **TODO: your-link-here**
* Documentation (Confluence) - **TODO: your-link-here**
* Continuous Integration (Jenkins) - **TODO: your-link-here**
* Development Environment - **TODO: your-link-here**
* Production Enviornment - **TODO: your-link-here**

## Project Setup
**Note**: It is recommended that a Javascript based IDE is used, like [Webstorm][],
as they have a lot of the code quality and syntax tooling supported as plugins, often times right out of the box.

Recommended plugins to have are:
- Git (can show changed lines in the gutter when viewing a file)
- EditorConfig
- gitignore
- Sass
- NodeJS

[Webstorm]: https://www.jetbrains.com/webstorm/

### Installation

1. If you don't already have it, download and install NodeJS (which comes with NPM)
2. This project favors Yarn, so make sure you have the expected version by installing it after installing Node

```
$ npm install -g yarn@0.21.3
```

3) Now install the build and application dependencies by running `$ yarn install`

## Project Layout
An overview of important files and configurations for the applications

### Root Files
Also know as "dot" files, these are the build and build configuration files for the application

* _bin/_ - shell scripts for continuous and build environments
* _.editorconfig_ - configuration file for EditorConfig IDE plugin
* _.eslintrc_ - configuratin file for [ESLint](http://eslint.org/)
* _package.json_ - dependency configuration file, for project related dependencies and defines all runnable scripts and commands
* _webpack.config.common.js_ - webpack config for managing shared webpack configurations
* _webpack.config.develop.js_ - webpack config for local development
* _webpack.config.prod.js_ - webpack config for production builds

### Application Files
Application code, including unit tests.  Directories are intended to be kept as flat as possible with a B.O.F. (birds of
a feather) organization.
* _src_ - application code
* _src/components/_ - resusable UI features, typically directives.  A `BootstrapComponent` has been designated to manage starting up the application, from _index.js_
* _src/services/_ -  APIs for handling backend REST APIs or browser APIs, non UI related "helpers"
* _src/views/_ -  routable states ("pages"), generally exposed with `class` controllers. Some are configured to [lazy load](https://github.com/kenzanmedia/angularjs-webpack-seed/wiki#lazy-loading).
* _src/index.html_ - main layout of the application
* _src/index.js_ - main entry way into the application and pulls in the application's `BootstrapComponent`
* _src/routes.js_ - routes for the application, maps to different views
* _src/vendor.js_ - vendor files from _node_modules_

## Tasks
This project uses Webpack as the build tool, executed via NPM scripts.  All available tasks are in the `scripts`
section of _package.json_

### Development
This will start up a Node (Express) server which watches for changes and "redeploys" as needed.

```bash
$ yarn run develop
```

See it in a browser by opening up

```
http://localhost:6789/
```

**Note: This task exports** `NODE_ENV=development`

### Production
This is the production build task for the project.  It is used prior to deploying to an environment and builds a
production version of the application.

```bash
$ yarn run build
```

###  Testing
Testing is an important part of software development.  There are three types of automated testing supported:

1. Unit - Used for testing discrete pieces of code in an isolated environemnt (i.e. mocked dependencies).  Ideal for testing services and componengs.
2. Integration - Often we want to test how components and services behavior together without mocking.  Integration testing is ideal for testing our view components.
3. E2E - End-to-End testing uses real browsers (often multiple) and aims to simulate real user ineractions with the application.  This is done to validate our critical User Stories.

To run unit and integration tests, run

```bash
$ yarn run test:unit
```

### Continuous Integration / Delivery
For CI / CD, the production task is combined with the testing task with whatever other relevant post task is needed for that specific job's responsibility

```bash
$ export NODE_ENV=production
$ yarn run test:unit
$ yarn run build
```

### Serve / Run
To serve a production build locally, like for a demo run:

```bash
$ yarn run serve
```

**Note: it is recommended you run this command from the master branch or a tag.  By Default this proxies with the
 webpack-dev-server proxy.**


## Dependency Management
Build packages (like Webpack) are installed through Yarn into _package.json_, using

```bash
$ yarn add <package-name>  --dev
```

Dependencies for the application (like Angular) are installed by running

```bash
$ yarn add <package-name>
```


## Continuous Integration
**//TODO Document Your Continuous Integration Environment Here**


## Release Procedure
**//TODO Document Your Release Procedure Here**


## AWS Info
**//TODO Document Your AWS Info here (NO CREDENTIALS!!!!)**
* s3 bucket -
* cloudfront distribution -
