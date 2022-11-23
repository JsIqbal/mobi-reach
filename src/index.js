import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Store from './modules/redux/store/store';
import { Provider } from 'react-redux';

import App from './modules/core';

import('bootstrap/dist/css/bootstrap.min.css');
import('./style/index.css');
import('./style/dashboard.style.css');

let store = Store();

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
