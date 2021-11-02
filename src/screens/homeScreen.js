import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {CategoriesCarousel} from '../components/organisms/CategoriesCarousel';
import {OffersCarousel} from '../components/organisms/OffersCarousel';
import {RestaurantCarousel} from '../components/organisms/RestaurantCarousel';
import {SearchBar} from '../components/organisms/SearchBar';
import {InTheHeadlines} from '../utils/restaurants/InTheHeadlines';
import {InPromotion} from '../utils/restaurants/InPromotion';

const Home = () => {
  const [offset, setOffset] = useState(0);
  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 1,
          display: offset <= 150 ? 'none' : 'flex',
        }}>
        <TextInput style={styles.input} />
      </View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={e => {
          setOffset(e.nativeEvent.contentOffset.y);
        }}>
        <SearchBar offset={offset} />
        <View style={styles.sectionCategories}>
          <CategoriesCarousel />
        </View>
        <View style={styles.sectionOffers}>
          <OffersCarousel />
        </View>
        <Text onClick={() => console.log('tsdfv')}>{offset}</Text>
        <View style={styles.sectionOffers}>
          <RestaurantCarousel
            title="À la une"
            description="Annonces payantes de nos partenaires"
            restaurants={InTheHeadlines}
          />
        </View>
        <View style={styles.sectionOffers}>
          <RestaurantCarousel title="Jusqu'à -50%" restaurants={InPromotion} />
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
  input: {
    backgroundColor: 'red',
    width: '80%',
    height: 40,
    borderRadius: 20,
    transform: [{translateY: -20}],
    paddingHorizontal: 20,
    position: 'absolute',
  },
});

export default Home;
