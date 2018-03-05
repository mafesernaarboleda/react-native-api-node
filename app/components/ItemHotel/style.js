/**
 * @author Maria Fernanda Serna
 */

import {
  StyleSheet,
  Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  listItem: {
    width: width - 40,
    borderRadius: 6
  },
  infoItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textPrice:{
    alignSelf: 'flex-end',
    color:'#F5D384',
    fontWeight:'bold'
  },
  titleItem:{
    fontWeight:'bold',
    fontSize: 20
  }
});
