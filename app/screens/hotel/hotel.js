/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import StarRating from 'react-native-star-rating';
import HeaderNav from '../../components/HeaderNav';
import Gallery from '../../components/Gallery';
import GoogleStaticMap from 'react-native-google-static-map';

import styles from './style';
import baseUrl from '../../config/baseurl';

const WIDTH = Dimensions.get('window').width;

const background = require('./../../images/background.png');

class Hotel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotel: {
        loc: [],
        pictures: []
      }
    }
  }

  componentWillMount() {
    const { getHotelById } = this.props;
    const { state } = this.props.navigation;
    const params = state.params ? state.params : '';
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
            <HeaderNav title={'HOTEL ' + hotel.name} {...this.props}></HeaderNav>
            <ImageBackground source={background} style={styles.container} resizeMode="stretch">
              <Card
              containerStyle={styles.listItem}>
               <Text style={{fontWeight:'bold', fontSize: 20}}>
                {hotel.name}
                </Text>
              <StarRating
                containerStyle = {{ width: WIDTH - 300, alignItems: 'flex-start'}}
                disabled={false}
                maxStars={5}
                rating={hotel.stars}
                fullStarColor={'#F5D384'}
                starSize={20}/>
                <View style={styles.infoAddress}>
                <Icon name='map-marker' type='font-awesome' size={25} color='#D3D2D2'/>
                  <Text style={styles.textAddress}>
                    {hotel.address}
                  </Text>
                </View>
                <GoogleStaticMap
                  latitude={hotel.loc[0]}
                  longitude={hotel.loc[1]}
                  zoom={13}
                  size={{ width: 340, height: 250 }}
                  apiKey={baseUrl.API_KEY}
              />
          </Card>
            <View style={styles.gallery}>
              <Text style={styles.titleGallery}>Gallery</Text>
              <Gallery images={hotel.pictures}></Gallery>
            </View>
            </ImageBackground>
        </View>
    );
  }
}

export default Hotel;
