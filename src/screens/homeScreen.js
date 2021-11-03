import React from 'react';

import {StyleSheet, View} from 'react-native';

import {CategoriesCarousel} from '../components/organisms/CategoriesCarousel';
import {OffersCarousel} from '../components/organisms/OffersCarousel';
import {RestaurantCarousel} from '../components/organisms/RestaurantCarousel';
import {InTheHeadlines} from '../utils/restaurants/InTheHeadlines';
import {InPromotion} from '../utils/restaurants/InPromotion';
import {DefaultLayout} from '../layouts/default';

const Home = () => {
  return (
    <DefaultLayout>
      <View style={styles.sectionCategories}>
        <CategoriesCarousel />
      </View>
      <View style={styles.sectionOffers}>
        <OffersCarousel />
      </View>
      <View style={styles.sectionOffers}>
        <RestaurantCarousel
          title="À la une"
          description="Annonces payantes de nos partenaires"
          restaurants={InTheHeadlines}
        />
      </View>
      <View style={[styles.sectionOffers, {marginBottom: 20}]}>
        <RestaurantCarousel title="Jusqu'à -50%" restaurants={InPromotion} />
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

export default Home;
