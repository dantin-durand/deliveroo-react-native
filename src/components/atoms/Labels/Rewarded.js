import React from 'react';
import {Image, Text, View} from 'react-native';
export function Rewarded() {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        fontSize: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 5,
      }}>
      <Image
        source={require('../../../assets/icons/rewarded.png')}
        style={{width: 12, height: 15}}
      />
      <Text style={{color: '#822774', marginLeft: 5}}>Récompenses</Text>
    </View>
  );
}
