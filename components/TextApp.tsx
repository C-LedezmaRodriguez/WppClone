import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { fontSizes } from '@/constants/Sizes';

interface Props extends TextProps {
  text: string;
  style?: any;
  fontWeight?: 'normal' | 'bold' | '600';
}

const TextApp = ({ text, fontWeight = 'normal', style = {}, ...props }: Props) => {
  return (
    <Text style={[styles.text, { fontWeight: fontWeight }, style]} {...props}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes[16],
  },
});

export default TextApp;
