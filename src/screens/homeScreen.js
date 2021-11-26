import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {CategoriesCarousel} from '../components/organisms/CategoriesCarousel';
import {OffersCarousel} from '../components/organisms/OffersCarousel';
import {RestaurantCarousel} from '../components/organisms/RestaurantCarousel';
import {InTheHeadlines} from '../utils/restaurants/InTheHeadlines';
import {InPromotion} from '../utils/restaurants/InPromotion';
import {HomeLayout} from '../layouts/home';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
const Home = ({navigation}) => {
  return (
    <HomeLayout>
      <View style={styles.sectionCategories}>
        <CategoriesCarousel />
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Restaurant')}
      /> */}
      <TouchableOpacity
        onPress={() =>
          navigation.push('Restaurant', {item: {id: 2, name: 'dantin'}})
        }>
        <SharedElement id={'2'}>
          <Text>test</Text>
        </SharedElement>
      </TouchableOpacity>
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
    </HomeLayout>
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
