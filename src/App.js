import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App=(props)=> {

  return (

      <div className={'head'}>
      <HeaderContainer />
      <NavContainer/>

          <div className={"app-wrapper-content"}>
          <Route path ="/dialogs" render={ ()=><DialogsContainer


          />} />
          <Route path='/profile/:userId?' render={ ()=><ProfileContainer


          />} />
              <Route path='/users' render={ ()=><UsersContainer/>
              } />
              <Route path='/login' render={ ()=><Login/>
              } />

          <Route path ="/News" component={News}/>
          <Route path ="/music" component={Music}/>
          <Route path ="/settings" component={Settings}/>
      </div>
  </div>


  )
}



export default App;
