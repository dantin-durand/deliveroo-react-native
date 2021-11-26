import React from 'react';
import Carousel from '../molecules/Carousel';
import {Categories} from '../../utils/Categories';
import {SquareCard} from '../atoms/Cards/SquareCard';

import {Button, FlatList} from 'react-native';
export function CategoriesCarousel() {
  return (
    <Carousel>
      {/* <FlatList
        data={Categories}
        renderItem={SquareCard}
        keyExtractor={(item, index) => index}
      /> */}

      {Categories.map((category, index) => (
        <SquareCard
          key={index}
          image={category.image}
          isFirst={index === 0}
          path={category.path || '/restaurant'}>
          {category.name}
        </SquareCard>
      ))}
    </Carousel>
  );
}
