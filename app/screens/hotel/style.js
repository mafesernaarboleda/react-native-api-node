/**
 * @author Maria Fernanda Serna
 */

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width,
    flexDirection: 'column',
  },
  item: {
    width: width - 40,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  infoAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textAddress: {
    color: '#D3D2D2',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  gallery: {
    borderTopColor: '#fff',
    borderTopWidth: 1,
    marginTop: 30,
    flexDirection: 'column',
  },
  titleGallery: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 30,
    color: '#fff',
  },
  titleHotel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  startContainer: {
    width: width - 300,
    alignItems: 'flex-start',
  },
});
