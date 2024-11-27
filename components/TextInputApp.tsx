import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { fontSizes, widthSizes } from '@/constants/Sizes';

interface Props extends TextInputProps {
  fontWeight?: 'normal' | 'bold' | '600';
  style?: any;
}

const TextInputApp = ({ fontWeight = 'normal', style = {}, ...props }: Props) => {
  return (
    <TextInput
      style={[styles.input, { fontWeight }, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: fontSizes[16],
    borderWidth: widthSizes[1],
    padding: widthSizes[8],
    margin: widthSizes[10],
    borderRadius: widthSizes[10]
  },
});

export default TextInputApp;
