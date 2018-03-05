/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Card } from 'react-native-elements'
import StarRating from 'react-native-star-rating';

import styles from './style';

class ItemHotel extends Component {

  render() {
    return (
      <Card containerStyle={styles.listItem}
                  imageStyle={{ height : 170 }}
                  image={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'}}>
                  <View style={styles.infoItem}>
                    <View>
                      <Text style={styles.titleItem}>
                        GRAN HOTEL
                      </Text>
                        <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={4}
                        fullStarColor={'#F5D384'}
                        starSize={20}
                        />
                    </View>
                    <View>
                      <Text style={{ color: '#D3D2D2'}}>
                        Precio por Noche
                      </Text>
                      <Text style={styles.textPrice}>
                        ARS 4.731
                      </Text>
                    </View>
                  </View>
         </Card>
    )
  }
}

export default ItemHotel;
