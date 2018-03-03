/**
 * @author Maria Fernanda Serna
 */

import React, { PropTypes, Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import styles from './style';

const background = require('./../../images/background.png');

class Hotel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
              <TouchableOpacity style={{ marginRight: 30 }}
                onPress={() => this.backPress()}>
              </TouchableOpacity>
              <Text>Gran Hotel</Text>
            </View>
            <ImageBackground source={background} style={styles.container} resizeMode="stretch">
            <View style={styles.listItem}>
            </View>
            </ImageBackground>
        </View>
    );
  }
}

export default Hotel;
