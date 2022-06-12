import React, { FC } from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  text: string;
  textStyle?: TextStyle;
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export const LinearGradientText: FC<Props> = (props) => {
  const {
    text,
    textStyle = {},
    colors,
    start = { x: 0.5, y: 0.0 },
    end = { x: 0.5, y: 1.0 },
  } = props;

  return (
    <MaskedView
      maskElement={<Text style={[styles.maskText, textStyle]}>{text}</Text>}
    >
      <LinearGradient colors={colors} start={start} end={end}>
        <Text style={[styles.text, textStyle]} />
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskText: {
    backgroundColor: 'transparent',
  },
  text: {
    opacity: 0,
  },
});
