/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements'
import styles from './style';
import { Card, ListItem, Button } from 'react-native-elements'
import StarRating from 'react-native-star-rating';

const background = require('./../../images/background.png');

class HotelList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.container} resizeMode="stretch">
              <View style={styles.inputSearch}>
                  <TextInput
                    onChangeText={search => this.setState({ search })}
                    value={this.state.search}
                    placeholder="Enter message"
                  />
                    <TouchableOpacity onPress={() => this.onPutMessage()}>
                    <Icon name='search' type='font-awesome' size={25} color='#EA5F4A'/>
                  </TouchableOpacity>
              </View>
              <ScrollView>
                  <Card
                  containerStyle={styles.listItem}
                  imageStyle={{ height : 170 }}
                  image={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'}}>
                  <View style={styles.infoItem}>
                    <View>
                      <Text style={{fontWeight:'bold', fontSize: 20}}>
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
                      <Text style={{alignSelf: 'flex-end', color:'#F5D384',fontWeight:'bold'}}>
                        ARS 4.731
                      </Text>
                    </View>
                  </View>
                  </Card>
              </ScrollView>
            </ImageBackground>
        </View>
    );
  }
}

export default HotelList;
