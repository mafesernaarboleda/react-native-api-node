/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  loading: false,
  hotel: { loc: [], pictures: []},
  apiError: '',
  successGetHotelById: false,
};

const hotel = (state = initialState, action) => {
  switch (action.type) {
    case types.GETHOTELBYID_REQUEST:
      return {
        ...state,
        loading: true,
        apiError: '',
      };
    case types.GETHOTELBYID_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        apiError: action.error,
        hotel: {},
        successGetHotelById: false,
      };
    case types.GETHOTELBYID_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        apiError: '',
        hotel: action.payload,
        successGetHotelById: true,
      };
    default:
      return state;
  }
};

export default hotel;
