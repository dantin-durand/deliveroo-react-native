import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

export function TimeLimit({timing: {min, max}}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {min} - {max}
      </Text>
      <Text style={{opacity: 0.8}}>min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '800',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    shadowColor: '#00000063',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
