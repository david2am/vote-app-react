# Guide To Reproduce This Template With Vite

Feel free to remove this file in your project

## Build your vite template project, run:
```
// cmd or bash

npm init vite@latest
/* Follow the steps to use React and Typescript */
```

## Install sass preprocessor
```
// cmd or bash

npm i -D sass
```


## Install test dependencies:
```
// cmd or bash

npm i -D ts-jest @testing-library/jest-dom @testing-library/react

/* also install the Typescript types */

npm i -D @types/testing-library__jest-dom @types/testing-library__react
```

## Setup of testing tools

### Build a setup.ts file
```
// .jest/setup.ts

import '@testing-library/jest-dom'
```

### Build a jest.config.js file
```
// jest.config.js

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
```

### Add a new script to the package.json
```
// package.json

"scripts": {
    ...
    "test": "jest --watch"
  },
```