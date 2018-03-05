/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './style';

class HeaderNav extends Component {

  render() {
    const {
      title,
      action
    } = this.props;

    return (
      <View style={styles.header}>
      <TouchableOpacity style={{ marginRight: 30 }}
        onPress={action}>
        <Icon name='arrow-left' type='font-awesome' size={25} color='#EA5F4A'/>
      </TouchableOpacity>
      <Text style={styles.titleHeader}>
        {title}
       </Text>
      </View>
    )
  }
}

export default HeaderNav;
