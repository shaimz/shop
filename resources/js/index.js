import React from 'react';
import ReactDOM from 'react-dom';
import AppLaravel from './AppLaravel';
import * as serviceWorker from './serviceWorker';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer)
ReactDOM.render(
    <React.StrictMode>
        <Provider store = { store }>
        <AppLaravel />
        </Provider>
    </React.StrictMode>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
