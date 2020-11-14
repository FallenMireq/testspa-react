import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './App.container';
import reportWebVitals from './reportWebVitals';
import appReducers from './store/reducers';
import { loadUsers } from './store/actions';
import './index.css';

const store = createStore(appReducers, applyMiddleware(thunkMiddleware));

store.dispatch(loadUsers('/users.json'));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
