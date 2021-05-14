import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'
import { createStore,compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import reducers from './reducers'
const store = createStore(reducers,compose(applyMiddleware(thunk)))
ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>
,
  document.getElementById('root')
);

