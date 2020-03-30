import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import aufReducer from "./auf-reducer";

let reducers=combineReducers({
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auf:aufReducer

});




let store=createStore(reducers);
export default store;
