import React from 'react';

import { StyleSheet, View } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={['#000000', '#ff0000', '#000000']}
        text="Hello World"
        textStyle={{ fontSize: 40 }}
        textProps={{ ellipsizeMode: 'head', numberOfLines: 1 }}
      />
      <LinearGradientText
        colors={['#000000', '#ff9543', '#000000']}
        text="Allow Font Scaling: False "
        textStyle={{ fontSize: 40 }}
        textProps={{ allowFontScaling: true }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    rowGap: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
