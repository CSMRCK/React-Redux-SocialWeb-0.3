//import store from "./Redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./Redux/redux-store";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";


 let rerenderEntireTree=(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
            </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
