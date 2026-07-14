# Node Versions Matrix CI

A matrix ci that helps to run tests simultaneously across multiple operating systems (ubuntu-latest, windows-latest, and macos-latest) using Node.js versions (18, 20, 22).

## Features
- Runs tests across multiple OS
- Installs Docker on macos
- Checks Docker version on each OS using the command:
```bash
docker --version
```

## Tech Stack
- Node.js
- **Continuous Integration**: GitHub Actions (Automated Testing)

## Prerequisites
- Simple Node.js application.
- GitHub Actions workflow (matrix-ci.yml)

## Local Set Up
Here are the steps to follow to locally set up this project:

1. Create a project folder and change directory to the created folder:
```bash
mkdir <folder_name>
cd <folder_name>
```
Note: Edit the `<folder_name>` in the command above to desired name.

2. Create an index.js and index.test.js files which will contain node.js application code for testing github workflow (matrix-ci.yml):
```bash
touch index.js
touch index.test.js
```

3. Install Dependencies
```bash
npm install
```

4. Create Github workflow folder and navigate to the directory
```bash 
mkdir .github
cd .github 
```

5. Create workflows folder inside `.github` directory and create `matrix-ci.yml` inside the worflows folder
```bash
mkdir workflows
cd workflows
touch matrix-ci.yml
```




## Repository Structure
```
Project2
├── .github/
│   └── workflows/
│       └── matrix-ci.yml 
├── README.md
├── index.js
├── index.test.js
├── package-lock.json
└── package.json
```

## Workflow Steps
The workflow performs the following step for each matrix combination:

1. Checks out the repository
2. Sets up the selected Node.js version.
3. Installs project dependencies.
4. Runs the project tests.
5. Installs Docker on MacOS.
6. Verifies the Docker Installation using:
```bash
docker --version
```

## Matrix Validation
Here are the steps to take to validate matrix:

1. Push project folder to GitHub.
2. Open the **Actions** tab and watch the `Matrix-ci` workflow run.
3. 9 jobs (3 OS x 3 Node Versions) is seen running in parallel, each logging its own Node.

## Contribution
This is basically a learning project, but suggestions are welcome. 
You can fork the repo, create a branch, or open a pull request.

