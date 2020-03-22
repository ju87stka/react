import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";

const App=(props)=> {

  return (

      <div className={'head'}>
      <Header />
      <NavContainer/>

          <div className={"app-wrapper-content"}>
          <Route path ="/dialogs" render={ ()=><DialogsContainer


          />} />
          <Route path='/profile' render={ ()=><Profile



          />} />
          <Route path ="/News" component={News}/>
          <Route path ="/music" component={Music}/>
          <Route path ="/settings" component={Settings}/>
      </div>
  </div>


  )
}



export default App;
