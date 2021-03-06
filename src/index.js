import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {Provider} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const loggerMiddleware = createLogger();

export const store = createStore(
    reducers, //Todos los reducers
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
