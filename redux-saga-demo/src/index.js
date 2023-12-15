import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';


const sagaMiddleware = createSagaMiddleware();

axios.defaults.baseURL = 'http://localhost:3001';
// axios.get('/users')

// const store = createStore(rootReducer, applyMiddleware(logger, thunk))
const store = createStore(reducers, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
