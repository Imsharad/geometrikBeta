# Growthrocket

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Tech Stack

-   [x] Next.js
-   [x] TypeScript
-   [x] MongoDB
-   [x] Sass
-   [x] ESLint
-   [x] Prettier
-   [x] Husky
-   [x] Commitlint
-   [x] Jest

## Usage

1.  Clone the repository.

```sh
git clone https://github.com/opengig/growthrocket.git
```

2.  Go to the project directory.

```sh
cd growthrocket
```

3.  Configure environment variables.

```sh
cat >.env
```

4.  Install dependencies.

```sh
yarn
```

5.  Start development server.

```sh
yarn dev
```

## Scripts

```sh
# Run the app in the development mode.
yarn dev

# Builds the app for production to the build folder.
yarn build

# Run the test watcher in an interactive mode.
yarn test:watch

# Runs the built app in production mode.
yarn start

# Lints and fixes files.
yarn lint

# Formats files.
yarn format

```

## Docker Setup

1.  Download and install [Docker](https://www.docker.com/products/docker-desktop).
2.  Go to the project directory.

    ```sh
    cd growthrocket
    ```

3.  Run the following command to start the server.

    ```sh
    yarn docker-compose:up
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## License

[MIT](LICENSE)

## Author

[AthenaSquare](https://athenasquare.org)

## Acknowledgements

-   [Next.js](https://nextjs.org)
-   [TypeScript](https://www.typescriptlang.org)
-   [MongoDB](https://www.mongodb.com)
-   [Sass](https://sass-lang.com)
-   [ESLint](https://eslint.org)
-   [Prettier](https://prettier.io)
-   [Husky](https://typicode.github.io/husky)
-   [Commitlint](https://commitlint.js.org)
-   [Jest](https://jestjs.io)
