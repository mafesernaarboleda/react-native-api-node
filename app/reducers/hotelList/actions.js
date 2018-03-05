/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import hotelsApi from '../../api/hotel';

export function getHotelListRequest() {
  return { type: types.GETHOTELLIST_REQUEST };
}

export function getHotelListRequestFail(error) {
  return { type: types.GETHOTELLIST_REQUEST_FAIL, error };
}

export function getHotelListRequestSuccess(payload) {
  return { type: types.GETHOTELLIST_REQUEST_SUCCESS, payload };
}

export function getHotelList() {
  return (dispatch) => {
    dispatch(getHotelListRequest());
    return hotelsApi
      .getHotelList()
      .then((response) => response.json())
      .then((response) => {
        return dispatch(getHotelListRequestSuccess(response));
      }).catch((err) => {
        return dispatch(getHotelListRequestFail(err));
    });
  };
}
