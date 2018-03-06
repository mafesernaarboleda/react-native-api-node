/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  inputSearch: {
    height: 50,
    width: width - 40,
    backgroundColor: '#fff',
    marginTop: 40,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
