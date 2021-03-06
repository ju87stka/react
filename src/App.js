import React, {Component} from 'react';
import './App.css';

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()

    }
    render() {
        if(!this.props.initialized){
return <Preloader/>
        }
        return (


            <div className={'head'}>
                <HeaderContainer/>
                <NavContainer/>

                <div className={"app-wrapper-content"}>
                    <Route path="/dialogs" render={() => <DialogsContainer

                    />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer


                    />}/>
                    <Route path='/users' render={() => <UsersContainer/>
                    }/>
                    <Route path='/login' render={() => <Login/>
                    }/>

                    <Route path="/News" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>



        )
    }
}
const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})
export default compose(
    withRouter,
    (connect(mapStateToProps, {initializeApp} )))(App);

