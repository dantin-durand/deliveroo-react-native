import React from 'react';
import Carousel from '../molecules/Carousel';
import {RestaurantCard} from '../molecules/RestaurantCard';
import {InTheHeadlines} from '../../utils/restaurants/InTheHeadlines';
import {SubTitle} from '../atoms/Texts/SubTitle';
import {Paragraph} from '../atoms/Texts/Paragraph';
import {Text, View} from 'react-native';
export function RestaurantCarousel({
  title = '',
  description = '',
  restaurants = [],
}) {
  return (
    <React.Fragment>
      <View
        style={{
          marginBottom: title.length || description.length ? 5 : 0,
          marginLeft: 10,
        }}>
        {title.length ? <SubTitle>{title}</SubTitle> : null}
        {description.length ? <Paragraph>{description}</Paragraph> : null}
      </View>
      <Carousel>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            isFirst={index === 0}
          />
        ))}
      </Carousel>
    </React.Fragment>
  );
}
