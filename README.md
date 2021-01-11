# React Native Boilerplate

A boilerplate to bootstrap React Native mobile applications that use Apollo Client 3 for GraphQL, with an aim to provide best developer experience and performance out of the box.

Current implementation of the boilerplate uses `React Native 0.63.2` together with TypeScript.

### Core Packages

-   **Typescript** - A superset of Javascript providing static typing, classes and interfaces.
-   **React Navigation** - Provides built-in support for navigation between screens.
-   **Apollo Client 4** - Core Apollo client components to provide seamless GraphQL integration.
-   **Apollo Cache Persist** - Utilizes async storage to persist and rehydrate the Apollo store.
-   **Styled Components** - Powerful CSS in JS module providing template literals to support dynamic styling.
-   **Babel** - Cross platform Javascript transpiler.
-   **TSLint** - Enforces code styling, and standards. Airbnb's tslint guidelines are followed by default.
-   **CodePush** - Enables updates to be delivered seamlessley to User devices.
-   **React Native SVG** - Adds SVG support for React Native applications.
-   **React Native Bootsplash** - Enables programmatic showing of Splash Screen.
-   **React i18next** - Integrates i18n with React Native
-   **React i18next Parser** - Localize as you code. Extract and generate localization files without breaking a sweat.
-   **Jest and Enzyme** - Testing support for React based Projects

### Running the Boilerplate

1. Run `yarn` to install dependencies
2. `cd ios && pod install && cd ..` to install iOS Pods
3. `yarn start` to invoke the metro bundler
4. `yarn ios` or `yarn android` package on respective emulators/devices.

### Renaming the App

Use `yarn rename <Appname>` to rename the app throughout.

### Running Storybook Server

In addition to above packages, Storybook is also integrated as a development dependency. StoryBook enables developers to test UI components in isolation. To run Storybook server set `IS_STORYBOOK` option in `.env` to `true`. And then, start the application via `react-native run-ios` or `react-native run-android`.

### Testing

Until proper mocks are being added, current testing scenarios make use of a simple Hasura instance. You can find it [here](https://github.com/emperorhan/hasura-boilerplate) and hoist it together with Docker. You may update relevant variables in `.env` before running the tests.

To run existing Test Suites run `yarn test`. On occasions where some UI component with existing `__snapshots__` directory is being updated, run `yarn test -u` to update the snapshots.

### Validating Commits and Tests

This template also includes a sample workflow to verify merges to master via github actions. You may enable/disable it depending on your use cases.

### Updating to Latest Version of React Native

As of present, the React Native version can be upgraded through `react-native upgrade`. However, on some occasions, this process might introduce breaking changes. If so, please follow the changes specified on React Native upgrade [helper](https://react-native-community.github.io/upgrade-helper/).

### Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for instructions on how to contribute to the boilerplate.

### Folder Structure

This folder structure follows the boilerplate code for the sake of brewity.

```
    .
    ├── android
    ├── ios
    ├── src
    │   ├── App.tsx
    │   ├── Components - Atomic Design inspired folder structure
    │   │   ├── Atoms
    │   │   │   ├── __snapshots__ - Jest generated snapshots of the component
    │   │   │   │   └── TestAtom.spec.ts.snap
    │   │   │   ├── TestAtom
    │   │   │   │   ├── TestAtom.impl.tsx
    │   │   │   │   ├── TestAtom.interface.tsx
    │   │   │   │   ├── TestAtom.spec.tsx
    │   │   │   │   └── index.ts
    │   │   │   └── index.ts
    │   │   ├── Molecules
    │   │   │   ├── TestMolecule
    │   │   │   │   ├── index.tsx
    │   │   │   │   └── styles.ts
    │   │   │   └── index.ts
    │   │   ├── Organisms
    │   │   │   ├── TestOrganism
    │   │   │   │   ├── index.tsx
    │   │   │   │   └── styles.ts
    │   │   │   └── index.ts
    │   │   ├── Templates
    │   │   │   ├── TestTemplate
    │   │   │   │   ├── index.tsx
    │   │   │   │   └── styles.ts
    │   │   │   └── index.ts
    │   ├── Definitions
    │   │   ├── Styled
    │   │   │   ├── index.ts
    │   │   │   └── theme.ts
    │   │   └── index.ts
    │   ├── Graphql
    │   │   ├── TestQuery
    │   │   │   │   ├── TestQuery.spec.ts
    │   │   │   │   └── TestQuery.ts
    │   │   ├── apollo.ts
    │   │   └── index.ts
    │   ├── I18n
    │   │   ├── index.ts
    │   │   └── locales
    │   │       ├── en
    │   │       │   ├── common.json
    │   │       │   ├── home.json
    │   │       │   └── index.ts
    │   │       ├── kr
    │   │       │   ├── common.json
    │   │       │   ├── home.json
    │   │       │   └── index.ts
    │   │       ├── index.ts
    │   │       └── tr
    │   │           ├── common.json
    │   │           ├── home.json
    │   │           └── index.ts
    │   ├── Interfaces
    │   │   ├── Scenes
    │   │   │   └── Home.d.ts
    │   │   ├── index.ts
    │   │   ├── env.d.ts
    │   │   └── styled.d.ts
    │   ├── Router
    │   │   └── index.tsx
    │   ├── Screens
    │   │   ├── Home
    │   │   │   ├── index.spec.ts
    │   │   │   ├── index.ts
    │   │   │   └── styled.ts
    │   ├── Services
    │   │   ├── API
    │   │   │   └── HTTP
    │   │   │       ├── Http.d.ts
    │   │   │       ├── index.spec.ts
    │   │   │       └── index.ts
    │   │   ├── DeeplinkService.tsx
    │   │   └── index.ts
    │   └── Styled
    │       └── index.tsx
    ├── static
    │   └── images
    │       └── testImage.png
    ├── storybook
    │   ├── stories
    │   │   └── TestAtom.story.tsx
    │   ├── addons.ts
    │   ├── index.ts
    │   ├── rn-addons.ts
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── test
    │   ├── Helpers
    │   │   └── render.tsx
    │   ├── jest.setup.ts
    │   ├── mocks.ts
    │   └── tsconfig.jest.json
    ├── tsconfig.json
    ├── app.json
    ├── babel.config.js
    ├── global.d.ts
    ├── index.js
    ├── jest.config.js
    ├── metro.config.js
    └── package.json
```

### Credits and Inspiration

-   [pankod](https://github.com/pankod/react-native-boilerplate)
-   [ozanmanav](https://github.com/ozanmanav/react-native-boilerplate-ts)
-   [Coding Machine](https://github.com/thecodingmachine/react-native-boilerplate)
-   [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate-typescript)
