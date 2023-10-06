<h1 align="center" >
  react-native-linear-gradient-text
</h1>

<p align="center" >
  <img alt="NPM package version" src="https://img.shields.io/npm/v/react-native-linear-gradient-text?style=for-the-badge">

  <img alt="NPM package downloads" src="https://img.shields.io/npm/dt/react-native-linear-gradient-text?style=for-the-badge">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hmdarkfir3/react-native-linear-gradient-text?style=for-the-badge">

  <img alt="Repository issues size" src="https://img.shields.io/github/issues/hmdarkfir3/react-native-linear-gradient-text?style=for-the-badge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## About

Component to display text with linear gradient.

---

## Installation

### Step 1: Install @react-native-masked-view/masked-view library

Make sure that you have installed the `@react-native-masked-view/masked-view` library:

- https://github.com/react-native-masked-view/masked-view#getting-started

### Step 2: Install react-native-linear-gradient library

Make sure that you have installed the `react-native-linear-gradient` library:

- https://github.com/react-native-linear-gradient/react-native-linear-gradient#installation

---

## Getting Started

```sh
yarn add react-native-linear-gradient-text
# or
npm install react-native-linear-gradient-text
```

---

## Usage

```js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';

export const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={['#E76F00', '#EA374E']}
        text="Hello World"
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 1 }}
        textStyle={{ fontSize: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

## Props

| Prop      | Type                                                       | Default          | Description                                                                                                   |
| --------- | ---------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| text      | string                                                     | **Required**     | An string that display text. Example: `text="Hello World"`                                                    |
| colors    | string[]                                                   | **Required**     | An array of at least two color values that represent gradient colors. Example: `colors={["black", "white"]}`. |
| start     | { x: number, y: number }                                   | { x: 0.5, y: 0 } | An optional prop. He declare the position that the gradient starts. Example `start={{ x: 0.5, y: 0 }}`.       |
| end       | { x: number, y: number }                                   | { x: 1, y: 1 }   | Same as start, but for the of the gradient.                                                                   |
| textStyle | [TextStyle](https://reactnative.dev/docs/text-style-props) | Default Value    | A property to change all styles that a text has.                                                              |

---

## Author

<img style="border-radius: 50%;" src="https://github.com/HMDarkFir3.png" width="150px;" alt=""/>
 <h4>Henrique Luís Oliveira Marques</h4>

<p align="left">
  <a href="https://www.linkedin.com/in/hlom" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<p>

---

## License

This project is under the MIT license. See the [LICENSE](./LICENSE) to learn more.
<br>
[Contact!](https://www.linkedin.com/in/hlom)
