/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './style';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const { action } = this.props;
    return (
      <View style={styles.inputSearch}>
        <TextInput
          onChangeText={search => this.setState({ search })}
          value={this.state.search}
          placeholder="Search.."
        />
        <TouchableOpacity onPress={() => action(this.state.search)}>
          <Icon name="search" type="font-awesome" size={25} color="#EA5F4A" />
        </TouchableOpacity>
      </View>
    );
  }
}

SearchBar.propTypes = {
  action: PropTypes.func.isRequired,
};

export default SearchBar;
