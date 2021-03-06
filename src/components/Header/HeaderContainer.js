import React from 'react';

import Header from "./Header";
import {getInfoAuf, logout} from "../../redux/auf-reducer";
import {connect} from "react-redux";
class HeaderContainer extends React.Component {


    render() {


        return (
             <Header{ ...this.props }   />
        );
    }
}
const mapStateToProps=(state)=>({
    isAuth: state.auf.isAuth,
    login:state.auf.login

})
export default connect(mapStateToProps, {logout} )(HeaderContainer);
