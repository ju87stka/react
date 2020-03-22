import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


let store={
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: "First post", likesCount: 12},
                {id: 2, message: "Second post", likesCount: 6},
            ],
            newPostText: "igor"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Igor"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],

            messages: [
                {id: 1, message: "Hi1"},
                {id: 2, message: "Hi2"},
                {id: 3, message: "Hi3"},
                {id: 4, message: "Hi4"},
                {id: 5, message: "Hi5"},
                {id: 6, message: "Hi6"}
            ],
            newMessageText: "igor"
        },
        sidebar:[
            {id: 1, name: "Friend1"},
            {id: 2, name: "Friend2"},
            {id: 3, name: "Friend3"},

        ]
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log("state changed");
    },


    subscribe(observer){
        this._callSubscriber=observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
};




window.store=store;






export default store;