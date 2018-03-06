/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './style';

class HeaderNav extends Component {
  onBackAction() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconRight}
          onPress={() => this.onBackAction()}
        >
          <Icon name="chevron-left" type="font-awesome" size={20} color="#EA5F4A" />
          <Text style={styles.titleSession}>
            More
          </Text>
        </TouchableOpacity>
        <Text style={styles.titleHeader}>
          {title}
        </Text>
      </View>
    );
  }
}

HeaderNav.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default HeaderNav;
