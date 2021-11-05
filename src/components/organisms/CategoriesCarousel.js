import React from 'react';
import Carousel from '../molecules/Carousel';
import {Categories} from '../../utils/Categories';
import {SquareCard} from '../atoms/Cards/SquareCard';
import {FlatList} from 'react-native';
export function CategoriesCarousel() {
  return (
    <Carousel>
      {Categories.map((category, index) => (
        <SquareCard key={index} image={category.image} isFirst={index === 0}>
          {category.name}
        </SquareCard>
      ))}
    </Carousel>
  );
}
