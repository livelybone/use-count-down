# use-count-down
[![NPM Version](http://img.shields.io/npm/v/use-count-down.svg?style=flat-square)](https://www.npmjs.com/package/use-count-down)
[![Download Month](http://img.shields.io/npm/dm/use-count-down.svg?style=flat-square)](https://www.npmjs.com/package/use-count-down)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A react hook for seconds count down

## repository
https://github.com/livelybone/use-count-down.git

## Demo
https://github.com/livelybone/use-count-down#readme

## Run Example
Your can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone https://github.com/livelybone/use-count-down.git`
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1/examples/test.html`) in your browser

## Installation
```bash
npm i -S use-count-down
```

## Global name - The variable the module exported in `umd` bundle
`useCountDown`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import * as useCountDown from 'use-count-down'
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/use-count-down/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/use-count-down/lib/umd/<--module-->.js"></script>
```
