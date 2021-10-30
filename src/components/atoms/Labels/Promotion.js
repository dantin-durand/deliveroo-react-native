import React from 'react';
import {Image, Text, View} from 'react-native';
export function Promotion({promo: {radio}}) {
  return (
    <View
      style={{
        height: 80,
        width: 80,
        backgroundColor: '#fb5058',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#fabe00',
      }}>
      <Text style={{color: '#fff', fontWeight: '800'}}>-{radio}%</Text>
    </View>
  );
}
