import React from 'react';
import Carousel from '../molecules/Carousel';
import {RestaurantCard} from '../molecules/RestaurantCard';
import {InTheHeadlines} from '../../utils/restaurants/InTheHeadlines';
export function RestaurantCarousel() {
  return (
    <Carousel>
      {InTheHeadlines.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          restaurant={restaurant}
          isFirst={index === 0}
        />
      ))}
    </Carousel>
  );
}
