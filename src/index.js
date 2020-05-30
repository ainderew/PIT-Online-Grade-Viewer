import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import allReducers from "./reducers/index"
import {Provider} from "react-redux"

const saveToSessionStorage = (state) =>{
  try{
    const transformState = JSON.stringify(state)
    sessionStorage.setItem("state", transformState)
  }catch(e){
    console.log(e)
  }
}

const loadFromSessionStorage = () =>{
  try{
    const transformState = sessionStorage.getItem("state")
    if (transformState === null) return undefined;
    return JSON.parse(transformState)
  }catch(e){
    console.log(e)
  }
}

const persistedState = loadFromSessionStorage()

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

store.subscribe(() => saveToSessionStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

