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
  header: {
    height: 80,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    width: width - 40,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
});
