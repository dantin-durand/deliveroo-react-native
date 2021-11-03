import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Paragraph} from '../atoms/Texts/Paragraph';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {SearchBar} from '../molecules/SearchBar';

export function HeaderAdress({offset}) {
  const [deliveryType, setDeliveryType] = useState('delivery');
  return (
    <React.Fragment>
      <View style={[styles.container, {opacity: 1 - Math.round(offset) / 100}]}>
        <View style={styles.info}>
          <View style={styles.adress}>
            <Paragraph style={{color: '#fff'}}>Maintenant</Paragraph>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 2,
              }}>
              <SubTitle
                style={{color: '#fff'}}
                numberOfLines={1}
                ellipsizeMode="tail">
                18 Rue Legendre, 93600 Aulnay-Sous-Bois
              </SubTitle>
              <Image
                source={require('../../assets/icons/arrow_down.png')}
                style={{height: 8, width: 13, marginLeft: 5}}
              />
            </View>
          </View>
          <View style={styles.profile}>
            <Image
              source={require('../../assets/icons/user.png')}
              style={{height: 18, width: 16}}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 15}}>
          <TouchableOpacity
            onPress={() => setDeliveryType('delivery')}
            style={[
              styles.btn,
              deliveryType === 'delivery' ? styles.btnselected : null,
            ]}>
            <Text style={{color: '#fff'}}>Livraison</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDeliveryType('toTakeAway')}
            style={[
              styles.btn,
              deliveryType === 'toTakeAway' ? styles.btnselected : null,
            ]}>
            <Text style={{color: '#fff'}}>À emporter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          transform: [{translateY: -20}],
          zIndex: 1,
        }}>
        <SearchBar />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: '#00b9af',
    width: '100%',
    height: 180,
    display: 'flex',
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  adress: {
    width: '70%',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    transform: [{translateX: -30}],
  },
  btn: {
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 20,
    marginRight: 8,
  },
  btnselected: {
    backgroundColor: '#008a88',
  },
});
