/**
 * @author Maria Fernanda Serna
 */

import {
    StackNavigator,
  } from 'react-navigation';

import HotelList from './screens/HotelList/HotelList';
import Hotel from './screens/Hotel/Hotel';

  const App = StackNavigator({
    Hotel: {
      screen: Hotel,
      headerMode: 'none',
      header: null,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
      },
    },
    HotelList: {
      screen: HotelList,
      headerMode: 'none',
      header: null,
      navigationOptions: {
        gesturesEnabled: false,
        header: null,
      },
    },
  });

  export default App;
