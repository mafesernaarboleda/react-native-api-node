/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements'
import StarRating from 'react-native-star-rating';

import styles from './style';

class ItemHotel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      item,
      action
    } = this.props;
    return (
      <TouchableOpacity onPress={() => action(item._id)}>
        <Card containerStyle={styles.listItem}
                  imageStyle={{ height : 170 }}
                  image={{ uri: item.pictures[0].url}}>
                  <View style={styles.infoItem}>
                    <View>
                      <Text style={styles.titleItem}>
                        {item.name}
                      </Text>
                        <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={item.stars}
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
      </TouchableOpacity>
    )
  }
}

export default ItemHotel;
