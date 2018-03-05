/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './style';

class HeaderNav extends Component {

  constructor(props) {
    super(props);
  }

  onBackAction(){
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const {
      title
    } = this.props;

    return (
      <View style={styles.header}>
      <TouchableOpacity style={{ marginRight: 30 }}
        onPress={() => this.onBackAction()}>
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
