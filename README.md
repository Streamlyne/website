# Streamlyne Website

> Website at [streamlyne.co](http://streamlyne.co)

---

## Installation

After cloning the repository, run the following commands:

```bash
npm install
bower install
```


## Usage

```bash
grunt serve
```

## Deploying to S3

Edit your `deploy.yaml` file in your project's root directory.

```yaml
---
  link: "http://streamlyne.co/"
  s3:
    key: "AWS_KEY"
    secret: "AWS_SECRET"
    bucket: "AWS_BUCKET_NAME"
```

Then run:

```bash
grunt deploy
```

## Saving & Sending Changes with Git

### 1. Add your changes to the `Git staging area`

To see a list of your changes run:

```bash
git status
```

You may see something like the following,
with `Changes not staged for commit:` and other headers:

```
$ git status
On branch jackie
Your branch is up-to-date with 'origin/jackie'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   src/templates/pages/how-it-works.hbs

no changes added to commit (use "git add" and/or "git commit -a")
```

What you want to do, is `stage`
those changes of yours to allow for committing.

This will `stage` all of your changed files:

```bash
git add --all
```

Now running `git status` you
will notice that everything is
`Changes to be committed:`

```
$ git status
On branch jackie
Your branch is up-to-date with 'origin/jackie'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   src/templates/pages/how-it-works.hbs
```

### 2. Commit your staged changes

Once you have staged your changes (see step 1),
you can commit these changes *locally* with Git.

```bash
git commit -m "INSERT YOUR MESSAGE HERE"
```

Between the quotation marks (`""`),
write a *description of your changes*.

For instance:

```bash
git commit -m "Update screenshots in Product page."
```

### 3. Pushing your commits to Git server

Now that you have successfully
committed your changes with the above steps:

```bash
git push
```

And you're done!
