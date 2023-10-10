
import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/userReducer'
import { combineReducers ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({
  user:userReducer
})
const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, reducers)
export default () => {
  let store = createStore(persistedReducer,applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}
// export default store