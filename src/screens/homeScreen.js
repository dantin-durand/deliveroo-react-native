import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';

import {CategoriesCarousel} from '../components/organisms/CategoriesCarousel';
import {OffersCarousel} from '../components/organisms/OffersCarousel';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.sectionCategories}>
        <CategoriesCarousel />
      </View>
      <View style={styles.sectionOffers}>
        <OffersCarousel />
      </View>
    </SafeAreaView>
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

export default Home;
