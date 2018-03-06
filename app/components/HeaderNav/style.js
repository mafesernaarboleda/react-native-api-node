/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: 70,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 20,
  },
  titleHeader: {
    fontSize: 20,
    paddingLeft: 80,
  },
  iconRight: {
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSession: {
    color: '#EA5F4A',
    fontSize: 15,
    marginLeft: 10,
  },
});
