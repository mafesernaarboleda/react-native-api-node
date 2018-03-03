/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

class SearchBar extends Component {

  render() {
    const {
    onLink
    } = this.props;

    return (
      <View style={[{flexDirection: "row", height }, row ? { flex: 1} : undefined ]}>
        <View style={{ flex: 1}}>
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]}
          />
        </View>
      </View>
    )
  }
}

export default SearchBar;
