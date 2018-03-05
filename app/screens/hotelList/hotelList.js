/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  ImageBackground,
  ScrollView
} from 'react-native';
import ItemHotel from '../../components/ItemHotel';
import SearchBar from '../../components/SearchBar';

import styles from './style';

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
                <SearchBar></SearchBar>
              <ScrollView>
                 <ItemHotel></ItemHotel>
              </ScrollView>
            </ImageBackground>
        </View>
    );
  }
}

export default HotelList;
