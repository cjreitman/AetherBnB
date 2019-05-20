import { combineReducers } from 'redux';
import activeSearch from './active_search_reducer';

const UIReducer = combineReducers({
  activeSearch: activeSearch,
});

export default UIReducer;