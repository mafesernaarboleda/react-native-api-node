/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  hotels: [],
  apiError: '',
  successGetHotelList: false,
};

const hotelList = (state = initialState, action) => {
  switch (action.type) {
    case types.GETHOTELLIST_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.GETHOTELLIST_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        hotels: [],
        successGetHotelList: false,
      };
    case types.GETHOTELLIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        hotels: action.payload,
        successGetHotelList: true,
      };
    default:
      return state;
  }
};

export default hotelList;
