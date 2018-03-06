/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground, ScrollView } from 'react-native';
import ItemHotel from '../../components/ItemHotel';
import SearchBar from '../../components/SearchBar';

import styles from './style';

const background = require('./../../images/background.png');

class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentWillMount() {
    const { getHotelList } = this.props;
    getHotelList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successGetHotelList) {
      this.setState({ hotels: nextProps.hotels });
    }
  }

  onGetHotelsListBySearch = (search) => {
    const { getHotelListBySearch, getHotelList } = this.props;
    if (search !== '') {
      getHotelListBySearch(search);
    } else {
      getHotelList();
    }
  }

  onGetHotelDetails = (id) => {
    this
      .props
      .navigation
      .navigate('Hotel', { id });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          style={styles.container}
          resizeMode="stretch"
        >
          <SearchBar action={this.onGetHotelsListBySearch} {...this.props} />
          <ScrollView>
            {this.state
              .hotels
              .map((hotel, index) => (
                <ItemHotel item={hotel} key={index} action={this.onGetHotelDetails} />
                ))}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

HotelList.propTypes = {
  successGetHotelList: PropTypes.bool.isRequired,
  getHotelList: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotels: PropTypes.array.isRequired,
  getHotelListBySearch: PropTypes.func.isRequired,
};

export default HotelList;
