import React from 'react';

import {StyleSheet, View} from 'react-native';

import {DefaultLayout} from '../layouts/default';
import {SubTitle} from '../components/atoms/Texts/SubTitle';
import {Link} from 'react-router-native';

const Restaurant = () => {
  return (
    <DefaultLayout>
      <View style={styles.sectionCategories}>
        <Link to="/">
          <SubTitle>- retour</SubTitle>
        </Link>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  sectionCategories: {
    marginVertical: 10,
  },
  sectionOffers: {
    marginVertical: 10,
  },
});

export default Restaurant;
