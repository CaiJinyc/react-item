/*
 * @Author: bozhou 
 * @Date: 2018-07-23 23:44:47 
 * @Last Modified by: bozhou
 * @Last Modified time: 2018-07-23 23:45:29
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store