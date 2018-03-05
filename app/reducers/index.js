
/**
 * @author Maria Fernanda Serna
 */

import { combineReducers } from 'redux';
import hotelList from './hotelList/hotelListReducer';
import hotel from './hotel/hotelReducer';

const rootReducer = combineReducers({ hotelList, hotel });

export default rootReducer;
