/**
 * @author Maria Fernanda Serna
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

import styles from './style';

const ItemHotel = ({ item, action }) => (
  <TouchableOpacity onPress={() => action(item._id)}>
    <Card
      containerStyle={styles.listItem}
      imageStyle={styles.imageItem}
      image={{
      uri: item.pictures[0].url,
    }}
    >
      <View style={styles.infoItem}>
        <View>
          <Text style={styles.titleItem}>
            {item.name}
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={item.stars}
            fullStarColor="#F5D384"
            starSize={20}
          />
        </View>
        <View>
          <Text style={styles.titlePrice}>
            Price for night
          </Text>
          <Text style={styles.textPrice}>
            ARS {item.price}
          </Text>
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);

ItemHotel.propTypes = {
  item: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
};

export default ItemHotel;
