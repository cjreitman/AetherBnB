
import { connect } from 'react-redux';
import FormPriceRange from './form_price_range';
import { receivePriceRange } from './../../actions/search_actions';
import { fetchSpots } from './../../actions/spots_actions';


const mapStateToProps = state => ({
  activeSearch: state.ui.activeSearch
});

const mapDispatchToProps = dispatch => ({
  receivePriceRange: (priceRange) => dispatch(receivePriceRange(priceRange)),
  fetchSpots: (options) => dispatch(fetchSpots(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPriceRange);