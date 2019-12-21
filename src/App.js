import React from 'react';
import './App.css';
import logo from './logo.svg';
import Navigation from './components/Navigation.jsx';
import {BrowserRouter, Route} from "react-router-dom"
import Profile from './components/Profile/Profile.jsx';
import Infoblock from './components/Infoblock.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <style>
                @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
            </style>
            <div className="app-wrapper">
                <Navigation/>
                <div className="content">

                    <Route path="/dialogs" render={ ()=><DialogsContainer />}/>
                    <Route path="/profile" render={ ()=><Profile/>}/>
                    <Route path="/Infoblock" component={Infoblock}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;