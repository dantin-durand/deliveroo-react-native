import React, {useEffect, useState} from 'react';

import {StyleSheet, TextInput, View} from 'react-native';

export function SearchBar({offset, ...props}) {
  useEffect(() => {
    console.log();
    if (offset >= 150) {
      console.log('offset -> ', offset);
    }
  }, [offset]);

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.background,
          {opacity: 1 - Math.round(offset) / 100},
        ]}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 1,
        }}>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 1,
  },
  background: {
    backgroundColor: '#20cfbe',
    width: '100%',
    height: 150,
  },
  input: {
    backgroundColor: 'red',
    width: '80%',
    height: 40,
    borderRadius: 20,
    transform: [{translateY: -20}],
    paddingHorizontal: 20,
    position: 'absolute',
  },
});
