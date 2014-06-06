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
