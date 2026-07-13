# Matrix Build Demo

A Node.js project used to validate a GitHub Actions **matrix build** that runs tests across multiple operating systems and Node.js versions.

## Overview
The workflow at `.github/workflows/matrix-ci.yaml` runs the test suite across every combination of:

- **OS**: `ubuntu-latest`, `windows-latest`, `macos-latest`
- **Node.js**: `18`, `20`, `22`


## Project Structure
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

## How It Works
The workflow performs the following steps for each matrix combination:

1. Checks out the repository
2. Sets up the selected Node.js version.
3. Installs project dependencies.
4. Runs the project tests.
5. Installs Docker.
6. Verifies the Docker Installation using:
```bash
docker --version
```

## Matrix Validation
Here are the steps to take to validate matrix:

1. Push this repo to GitHub.
2. Open the **Actions** tab and watch the `Matrix-ci` workflow run.
3. 9 jobs (3 OS x 3 Node Versions) should be seen running in parallel, each logging its own Node.


