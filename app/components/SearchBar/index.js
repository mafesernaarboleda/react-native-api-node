/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './style';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render() {
    return (
      <View style={styles.inputSearch}>
         <TextInput
            onChangeText={search => this.setState({ search })}
            value={this.state.search}
            placeholder="Search.."/>
          <TouchableOpacity onPress={() => this.onPutMessage()}>
            <Icon name='search' type='font-awesome' size={25} color='#EA5F4A'/>
          </TouchableOpacity>
      </View>
    )
  }
}

export default SearchBar;
