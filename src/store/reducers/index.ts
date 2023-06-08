import { combineReducers } from 'redux'
import { legacy_createStore as createStore } from "redux"
import tabBar from './tabBar'

const reducer = combineReducers({
  tabBar,
})

const store = createStore(reducer)

export default store;
