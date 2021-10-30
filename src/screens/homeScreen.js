import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {CategoriesCarousel} from '../components/organisms/CategoriesCarousel';
import {OffersCarousel} from '../components/organisms/OffersCarousel';
import {RestaurantCarousel} from '../components/organisms/RestaurantCarousel';

const Home = () => {
  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}>
      <ScrollView>
        <View style={styles.sectionCategories}>
          <CategoriesCarousel />
        </View>
        <View style={styles.sectionOffers}>
          <OffersCarousel />
        </View>
        <View style={styles.sectionOffers}>
          <RestaurantCarousel />
        </View>
        <View style={styles.sectionOffers}>
          <RestaurantCarousel />
        </View>
        <View style={styles.sectionOffers}>
          <RestaurantCarousel />
        </View>
        <View style={styles.sectionOffers}>
          <RestaurantCarousel />
        </View>
      </ScrollView>
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
