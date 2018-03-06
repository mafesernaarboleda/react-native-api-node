/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import GoogleStaticMap from 'react-native-google-static-map';
import HeaderNav from '../../components/HeaderNav';
import Gallery from '../../components/Gallery';

import styles from './style';
import baseUrl from '../../config/baseurl';

const background = require('./../../images/background.png');

class Hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: {
        loc: [],
        pictures: [],
      },
    };
  }

  componentWillMount() {
    const { getHotelById } = this.props;
    const { state } = this.props.navigation;
    const params = state.params
      ? state.params
      : '';
    getHotelById(params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successGetHotelById) {
      this.setState({ hotel: nextProps.hotel });
    }
  }

  render() {
    const { hotel } = this.state;
    return (
      <View style={styles.container}>
        <HeaderNav title="Hotel" {...this.props} />
        <ImageBackground
          source={background}
          style={styles.container}
          resizeMode="stretch"
        >
          <Card containerStyle={styles.item}>
            <Text
              style={styles.titleHotel}
            >
              {hotel.name}
            </Text>
            <View style={styles.startContainer}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={hotel.stars}
                fullStarColor="#F5D384"
                starSize={20}
              />
            </View>
            <View style={styles.infoAddress}>
              <Icon name="map-marker" type="font-awesome" size={25} color="#D3D2D2" />
              <Text style={styles.textAddress}>
                {hotel.address}
              </Text>
            </View>
            <GoogleStaticMap
              latitude={hotel.loc[0]}
              longitude={hotel.loc[1]}
              zoom={13}
              size={{
              width: 340,
              height: 250,
              }}
              apiKey={baseUrl.API_KEY}
            />
          </Card>
          <View style={styles.gallery}>
            <Text style={styles.titleGallery}>Gallery</Text>
            <Gallery images={hotel.pictures} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

Hotel.propTypes = {
  successGetHotelById: PropTypes.bool.isRequired,
  getHotelById: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotel: PropTypes.object.isRequired,
};

export default Hotel;
