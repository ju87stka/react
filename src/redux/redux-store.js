import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import aufReducer from "./auf-reducer";
import  thunkMiddlware  from "redux-thunk"
import {reducer as formReducer} from "redux-form"
let reducers=combineReducers({
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auf:aufReducer,
    form:formReducer
});




let store=createStore(reducers,applyMiddleware(thunkMiddlware));
export default store;
