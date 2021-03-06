import { combineReducers } from 'redux'
import footerReducer from './footer-reducer'
import headerReducer from './header-reducer'

export default combineReducers({
  footer: footerReducer,
  header: headerReducer
});