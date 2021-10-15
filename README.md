# Guide To Reproduce This Template

Feel free to remove this file from your project

## Build a vite template from React and Typescript
```
// cmd | terminal

npm init vite@latest

/* Follow the steps to use React and Typescript */
```

## Install sass preprocessor
```
// cmd | terminal

npm i -D sass
```


## Install jest & testing-library:
```
// cmd | terminal

npm i -D ts-jest @testing-library/jest-dom @testing-library/react
```

## Also its types:
```
// cmd | terminal

npm i -D @types/testing-library__jest-dom @types/testing-library__react
```

## Also user-event:
```
// cmd | terminal

npm i -D @testing-library/user-event @testing-library/dom   
```


## Setup jest & testing-library

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

## Install msw (mock service worker)
```
// cmd | terminal

npm i -D msw
```

### Build handlers.js file
```
// src/mocks/handlers.js

import { graphql } from 'msw'

const handlers = [
  // first query
  graphql.query('query', null)
]

export default handlers
```

### Build the server.js file
```
// src/mocks/server.js

import { setupServer } from 'msw/node'
import handlers from './handlers'

export const server = setupServer(...handlers)
```

### Add msw server to setup.js file
```
// .jest/setup.js

...
import { server } from '../src/mocks/server.js'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

## Usage

### Be sure you have degit installed
```
// cmd | terminal

npm i -g degit
```

### Use degit to scaffold your next project
```
// cmd | terminal

degit https://github.com/david2am/react-ts-sass-jest-template my-project-name
```

### Enjoy!!