/**
 * @author Maria Fernanda Serna
 */

import {
    StyleSheet,
    Dimensions
  } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width,
      flexDirection: 'column'
      },
});
