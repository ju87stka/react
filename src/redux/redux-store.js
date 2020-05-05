import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import aufReducer from "./auf-reducer";
import  thunkMiddlware  from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";
let reducers=combineReducers({
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auf:aufReducer,
    form:formReducer,
    app:appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlware)
));



export default store;
