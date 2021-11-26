import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
export function Rewarded() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/rewarded.png')}
        style={styles.img}
      />
      <Text style={styles.text}>Récompenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  img: {
    width: 12,
    height: 15,
  },
  text: {
    color: '#822774',
    marginLeft: 5,
  },
});
