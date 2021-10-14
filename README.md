# Guide To Reproduce This Template

Feel free to remove this file from your project

## Build a vite template from React and Typescript
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


## Install the test dependencies:
```
// cmd or bash

npm i -D ts-jest @testing-library/jest-dom @testing-library/react

/* also its types for Typescript */

npm i -D @types/testing-library__jest-dom @types/testing-library__react
```


## Testing tools setup

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

## Usage

### Be sure you have degit installed
```
// cmd

npm i -g degit
```

### Use degit to scaffold your next project
```
// cmd

degit https://github.com/david2am/react-ts-sass-jest-template my-project-name
```

### Enjoy!!