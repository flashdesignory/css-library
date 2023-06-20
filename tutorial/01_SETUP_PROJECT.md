# 01 - Setup Project

## Step one - create a folder

Let's start by setting up a working directory named `css-library`.
```bash
mkdir css-library
cd css-library
```

## Step two - create a package.json file

Ensure you are in your working directory before moving on to the next step.
Next let's initialize npm, which will create a `package.json` file with some default values:
```bash
npm init -y
```

The default  `package.json` file should look similar to below:
```json
{
  "name": "css-library",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Feel free to enter some details as you see fit:
```json
{
  "name": "css-library",
  "version": "1.0.0",
  "description": "A shareable and reusable css library.",
  "main": "index.js",
  "scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["css library", "css modules"],
  "author": "Thorsten Kober",
  "license": "ISC"
}
```

## Step three - create a readme file

This step is not crucial, but it will allow us to populate this file with instructions for the end-user, on how to use the library:
```bash
touch README.md
```

Let's add the title of the project to the `README.md` file, along with the same description that is used in the package.json file:
```md
# CSS Library

A shareable and reusable css library.
```

## Step Four - initialize git

To be able to keep track of changes, this project uses git as a version manager.
Before initializing git, it is a good idea to add a `.gitignore` file.
```bash
touch .gitignore
```

Once created, populate the content with the following few lines:
```bash
.DS_Store
/node_modules
```

Now we're ready to initialize git:
```bash
git init
```

Once this command was executed, git should keep track of our changes.
To test, let's ask git for its status:

```bash
git status
```

This should print the following in your terminal:
```bash
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore
	README.md
	package.json
```

Let's add the untracked files and make our first commit:
```bash
git add .
git commit -m 'initial commit'
```

The response in the terminal should look similar to below:
```bash
[main (root-commit) eeb76a8] initial commit
 4 files changed, 126 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 package.json
```

## Step Five - create a branch on Github

Create a new branch called `css-library` in your Github account.
Once done, come back to your terminal in your working directory and add the following:
```bash
git remote add origin https://github.com/[your github username]/css-library.git
git branch -M main
git push -u origin main
```

> **_NEXT:_**  [02 ADD FILES](./02_ADD_FILES.md)
