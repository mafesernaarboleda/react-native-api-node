/**
 * @author Maria Fernanda Serna
 */

import baseUrl from '../config/baseurl';

const getHotelList = () => fetch(`${baseUrl.API_URL}/hotels`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

const getHotelById = id => fetch(`${baseUrl.API_URL}/hotels/${id}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

const getHotelListBySearch = search => fetch(`${baseUrl.API_URL}/hotels/search/${search}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

export default {
  getHotelList,
  getHotelById,
  getHotelListBySearch,
};
