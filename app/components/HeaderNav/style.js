/**
 * @author Maria Fernanda Serna
 */

import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: 80,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingLeft: 20
  },
  titleHeader:{
    fontWeight:'bold',
    fontSize: 20
  }
});
