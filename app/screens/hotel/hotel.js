/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
  Modal,
} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import StarRating from 'react-native-star-rating';
import HeaderNav from '../../components/HeaderNav';
import Gallery from '../../components/Gallery';
import styles from './style';


const WIDTH = Dimensions.get('window').width;

const background = require('./../../images/background.png');

const images = [{
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
  url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}]

class Hotel extends Component {

  constructor(props) {
    super(props);
  }

  onBack(){
    console.log('puta');
  }

  render() {
    return (
        <View style={styles.container}>
            <HeaderNav title="Gran HOTEL" action={this.onBack}></HeaderNav>
            <ImageBackground source={background} style={styles.container} resizeMode="stretch">
              <Card
              containerStyle={styles.listItem}>
               <Text style={{fontWeight:'bold', fontSize: 20}}>
               GRAN HOTEL
                </Text>
              <StarRating
                containerStyle = {{ width: WIDTH - 300, alignItems: 'flex-start'}}
                disabled={false}
                maxStars={5}
                rating={4}
                fullStarColor={'#F5D384'}
                starSize={20}/>
                <View style={styles.infoAddress}>
                <Icon name='map-marker' type='font-awesome' size={25} color='#D3D2D2'/>
                  <Text style={styles.textAddress}>
                    741 Clarkson Avenue, Ypsilanti, Puerto Rico, 302
                  </Text>
                </View>
                <Image
                  resizeMode="cover"
                  style={{ height : 250 }}
                  source={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'}}/>
            </Card>
            <View style={styles.gallery}>
              <Text style={styles.titleGallery}>Gallery</Text>
              <Gallery images={images}></Gallery>
            </View>
            </ImageBackground>
        </View>
    );
  }
}

export default Hotel;
