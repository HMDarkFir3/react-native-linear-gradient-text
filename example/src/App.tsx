import React, { FC } from 'react';

import { StyleSheet, View } from 'react-native';
import { LinearGradientText } from 'react-native-linear-gradient-text';

export const App: FC = () => {
  return (
    <View style={styles.container}>
      <LinearGradientText
        colors={['#000', '#00ff']}
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
