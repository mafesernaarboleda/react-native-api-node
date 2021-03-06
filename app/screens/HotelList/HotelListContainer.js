/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import HotelList from './HotelList';
import { getHotelList, getHotelListBySearch } from './../../reducers/hotelList/actions';

const mapStateToProps = state => ({
  ...state.hotelList,
});

const mapDispatchToProps = dispatch => ({
  getHotelList: () => {
    dispatch(getHotelList());
  },
  getHotelListBySearch: (search) => {
    dispatch(getHotelListBySearch(search));
  },
});

const HotelListContainer = connect(mapStateToProps, mapDispatchToProps)(HotelList);
export default HotelListContainer;
