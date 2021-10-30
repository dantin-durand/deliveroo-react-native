import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';
import Card from '../atoms/Cards/Card';
import {Opinions} from '../atoms/Opinions';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {TimeLimit} from '../atoms/TimeLimit';
import {Rewarded} from '../atoms/Labels/Rewarded';
import {Promotion} from '../atoms/Labels/Promotion';

export function RestaurantCard({restaurant, isFirst}) {
  return (
    <View style={[styles.globalcard, {marginLeft: isFirst ? 10 : 0}]}>
      <Card image={restaurant.image} height={147} width={262} />

      <View style={styles.description}>
        {restaurant.isRewarded && (
          <View style={styles.rewarded}>
            <Rewarded />
          </View>
        )}
        {restaurant.promotion && (
          <View
            style={[
              styles.promotion,
              {
                transform: [{rotate: '-16deg'}],
              },
            ]}>
            <Promotion promo={restaurant.promotion} />
          </View>
        )}
        <View style={styles.timelimit}>
          <TimeLimit timing={restaurant.timing} />
        </View>
        <SubTitle>{restaurant.name}</SubTitle>
        <Opinions opinions={restaurant.opinions} />
        <View style={{flexDirection: 'row', opacity: 0.5}}>
          {restaurant.tags.map((tag, index) => (
            <Text key={index}>
              {index !== restaurant.tags.length - 1 ? `${tag} • ` : tag}
            </Text>
          ))}
        </View>
        <Text style={{opacity: 0.5, marginTop: 5}}>
          à {restaurant.distance} km
        </Text>
        {restaurant.promotion && (
          <Text style={{color: '#fb5058', marginTop: 10}}>
            <Image
              source={require('../../assets/icons/promotion.png')}
              style={{height: 14, width: 14}}
            />{' '}
            {restaurant.promotion.comment}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timelimit: {
    position: 'absolute',
    top: -35,
    right: 20,
  },
  globalcard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: 10,
    flex: 1,
    width: 262,
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: 'stretch',
  },
  description: {
    padding: 10,
    paddingRight: 0,
    paddingTop: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  rewarded: {
    position: 'absolute',
    top: -138,
    left: 10,
  },
  promotion: {
    position: 'absolute',
    top: -138,
    left: 10,
  },
});
