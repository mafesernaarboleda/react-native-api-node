/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import hotelsApi from '../../api/hotel';

export function getHotelByIdRequest() {
  return { type: types.GETHOTELBYID_REQUEST };
}

export function getHotelByIdRequestFail(error) {
  return { type: types.GETHOTELBYID_REQUEST_FAIL, error };
}

export function getHotelByIdRequestSuccess(payload) {
  return { type: types.GETHOTELBYID_REQUEST_SUCCESS, payload };
}

export function getHotelById(id) {
  return (dispatch) => {
    dispatch(getHotelByIdRequest());
    return hotelsApi
      .getHotelById(id)
      .then((response) => response.json())
      .then((response) => {
        return dispatch(getHotelByIdRequestSuccess(response));
      }).catch((err) => {
        return dispatch(getHotelByIdRequestFail(err));
    });
  };
}
