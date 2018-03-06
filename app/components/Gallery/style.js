/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    width,
  },
  buttonImage: {
    borderColor: '#fff',
    borderWidth: 2,
    margin: 10,
  },
  image: {
    height: 150,
    width: 170,
  },
  buttonClose: {
    marginTop: 22,
    backgroundColor: '#000',
    alignItems: 'flex-end',
  },
  iconClose: {
    margin: 10,
  },
});
