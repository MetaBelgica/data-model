# MetaBelgica data model
This repository contains (documentation of) the data model of the MetaBelgica platform.

Online available via http://w3id.org/metabelgica/data-model

## Usage

You can view the content locally

Serve this directory locally and view the Web page.
This can be done by using [http-server](https://github.com/indexzero/http-server).
Execute `http-server` and
browse to `http://localhost:8080`.

**You can update the specification by doing the following:**

1. Edit `dev.html`
2. Make sure all your local assets are int he `resources` folder, and the links in your `dev.html` file are relative (important because the publishing script creates multiple nested paths)
3. save as snapshot to `index.html` [using the respec functionality](https://respec.org/docs/#using-browser)
4. run `node publish.js index.html` to get the `index.html` + archived version in the `dist` folder
5. copy the folder `./resources` into your `dist` folder
