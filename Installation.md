## Installation

First, install NodeJS. In my case, I'm use Windows OS, but in GNU/Linux is not complicated too.

### Node JS

**Install Chocolatey**

In this article, I will show you how to install and use this tool: [Qué es Chocolatey y cómo usarlo](https://www.crashell.com/estudio/que_es_chocolatey_y_como_usarlo).

Easy installation: 

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

**Install NodeJS using Choco**

```powershell
PS C:\Windows\system32> choco install nodejs

Chocolatey v0.11.3
Installing the following packages:
nodejs
By installing, you accept licenses for the packages.
Progress: Downloading nodejs.install 18.8.0... 100%
Progress: Downloading nodejs 18.8.0... 100%

nodejs.install v18.8.0 [Approved]
nodejs.install package files install completed. Performing other installation steps.
The package nodejs.install wants to run 'chocolateyInstall.ps1'.
Note: If you don't run this script, the installation will fail.
Note: To confirm automatically next time, use '-y' or consider:
choco feature enable -n allowGlobalConfirmation
Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): A

Installing 64 bit version
Installing nodejs.install...
nodejs.install has been installed.
  nodejs.install may be able to be automatically uninstalled.
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The install of nodejs.install was successful.
  Software installed as 'msi', install location is likely default.

nodejs v18.8.0 [Approved]
nodejs package files install completed. Performing other installation steps.
 The install of nodejs was successful.
  Software install location not explicitly set, it could be in package or
  default install location of installer.

Chocolatey installed 2/2 packages.
 See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).
```

## Install create-react-app

Install [create-react-app](https://create-react-app.dev/) command.

```bash
npm install -g create-react-app
```

Install the lastest stable version.

```bash
npx create-react-app@latest

Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) y
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
Please specify the project directory:
  create-react-app <project-directory>

For example:
  create-react-app my-react-app

Run create-react-app --help to see all options.
```

Clean and verify cache. In addition force that action

```bash
npm cache clean --force
npm cache verify
```

## Start Project

Exec `create-react-app` and create the next project `my-react-app`.

```bash
create-react-app my-react-app

Creating a new React app in C:\Users\Root\OneDrive\Documentos\Projects\Repositories\React\my-react-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1392 packages in 2m

209 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 56 packages in 2m

209 packages are looking for funding
  run `npm fund` for details
Removing template package using npm...


removed 1 package, and audited 1448 packages in 2s

209 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created my-react-app at C:\Users\Root\OneDrive\Documentos\Projects\Repositories\React\my-react-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-react-app
  npm start

Happy hacking!
```

You need to access this (`my-react-app`) directory and run server.

```bash
$ cd my-react-app
$ npm start

> my-react-app@0.1.0 start
> react-scripts start

Starting the development server...
Compiled successfully!

You can now view my-react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.23.80.1:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```