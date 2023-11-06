// import { createStore } from 'redux'
import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import LaptopReducer from './laptops/laptopReducer'
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

//const store = configureStore({ reducer: rootReducer })

export default store