/**
 * @author Maria Fernanda Serna
 */

import { StackNavigator } from 'react-navigation';

import HotelListContainer from './screens/HotelList';
import HotelContainer from './screens/Hotel';

const App = StackNavigator({
  HotelList: {
    screen: HotelListContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  Hotel: {
    screen: HotelContainer,
    headerMode: 'none',
    header: null,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
});

export default App;
