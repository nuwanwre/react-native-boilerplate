# Contributing to the Boiler Plate

The current stack is based on React Native 0.61.5 using Typescript. Incremental versions may utilize newer versions of React Native, please cross-check with `package.json`.

### Development Workflow

The code base adheres to a Test Driven Design (TDD). Developers may start by adding necessary interfaces first, then implementing respective interfaces together with their tests.

### Testing

To run existing Test Suites run ```yarn test```. On occasions where some UI component with existing ```__snapshots__``` directory is being updated, run ```yarn test -u``` to update the snapshots.


### Updating to Latest Version of React Native 

As of present, the React Native version can be upgraded through `react-native upgrade`. However, on some occasions, this process might introduce breaking changes. If so, please follow the changes specified on React Native upgrade [helper](https://react-native-community.github.io/upgrade-helper/).

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
