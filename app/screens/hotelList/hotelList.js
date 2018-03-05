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

  hotels = [];

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      hotels: [],
    }
  }

  componentWillMount() {
    const { getHotelList } = this.props;
    getHotelList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successGetHotelList) {
      this.hotels = nextProps.hotels;
    }
  }

  onGetHotelDetails = (id) => {
    this
      .props
      .navigation
      .navigate('Hotel', {
        id
      });
  };

  render() {
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.container} resizeMode="stretch">
                <SearchBar></SearchBar>
              <ScrollView>
              { this.hotels.map((hotel, index) => {
                return (
                 <ItemHotel item={hotel} key={index} action={this.onGetHotelDetails}></ItemHotel>
                );
                })}
              </ScrollView>
            </ImageBackground>
        </View>
    );
  }
}

export default HotelList;
