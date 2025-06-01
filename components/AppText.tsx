import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export default function AppText(props: TextProps) {
  // Cek fontWeight pada style
  const style = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style || {};
  const fontFamily =
    style && style.fontWeight === 'bold'
      ? 'Poppins-Bold'
      : 'Poppins';

  return <Text {...props} style={[styles.text, { fontFamily }, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
  },
});