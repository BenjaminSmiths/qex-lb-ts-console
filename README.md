# QEX-Console CMS
## built with TypeScript/React/Redux/Loopback

This is the initial version of our starter project using React, TypeScript and Webpack to tie it all together.

## npm scripts

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
npm install
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

> Note: To Add a username/password Post a new one to the Users table using the swagger interface [production](http://localhost:8080/explorer/#/) or [dev](http://localhost:3000/explorer/#/)

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
```bash
$ npm run cover
```

## License

Copyright (c) 2016 rangle.io

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"

The project is contains [LoopBack](http://loopback.io).
