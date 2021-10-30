import React from 'react';

import {StyleSheet, Text} from 'react-native';

export function SubTitle({children, ...props}) {
  return (
    <Text {...props} style={styles.text}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#2e3333',
    fontWeight: 'bold',
  },
});
