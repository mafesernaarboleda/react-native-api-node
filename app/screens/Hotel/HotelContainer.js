/**
 * @author Maria Fernanda Serna
 */

import { connect } from 'react-redux';
import Hotel from './Hotel';
import { getHotelById } from './../../reducers/hotel/actions';

const mapStateToProps = (state) => ({
  ...state.hotel,
});

const mapDispatchToProps = (dispatch) => ({
  getHotelById: (id) => {
    dispatch(getHotelById(id));
  },
});

const HotelContainer = connect(mapStateToProps, mapDispatchToProps)(Hotel);
export default HotelContainer;
