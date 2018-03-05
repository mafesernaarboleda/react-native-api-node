/**
 * @author Maria Fernanda Serna
 */

import baseUrl from '../config/baseurl';

const getHotelList = () => {
  return fetch(`${baseUrl.API_URL}/hotels`, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
};

const getHotelById = (id) => {
  return fetch(`${baseUrl.API_URL}/hotels/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
};

export default {
  getHotelList,
  getHotelById,
};
