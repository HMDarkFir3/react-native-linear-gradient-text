import React from 'react';

import { StyleSheet, View } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradientText colors={['#ff0000', '#00ff00']} text="Hello World" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});