import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auf-reducer";
import {Redirect} from "react-router-dom";
const LoginForm=(props)=>{

    return       (
    <form onSubmit={props.handleSubmit}>
<div>
    <Field placeholder={"Email "} name={"email"} component={Input}
           validate={[required]}/>
</div>
            <div>
                <Field placeholder={"Password "} name={"password"} component={Input} type={"password"}
                       validate={[required]}/>

            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>Remember Me

            </div>
            <div>
<button>Login</button>
            </div>

        </form>
    )

}
const LoginReduxForm= reduxForm({
    form:"login"
})(LoginForm)




const Login=(props)=>{
const onSubmit=(formData)=>{
props.login(formData.email,formData.password,formData.rememberMe)
}
if(props.isAuth){
    return <Redirect to={"/profile"}/>
}
    return     <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps=(state)=>({
    isAuth: state.auf.isAuth
})
export default connect(mapStateToProps,{login})(Login)