import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state= {             posts: [
        {id: 1, message: "First post", likesCount: 12},
        {id: 2, message: "Second post", likesCount: 6},
    ],
    newPostText: "igor",
    profile: null,
    status:""



};

it("length of posts should be increase by 1", ()=> {
    let action=addPostActionCreator("It is my test")



    let newState = profileReducer(state, action)


  expect (newState.posts.length).toBe(3)

})
it("message of ne post should be correct", ()=> {
    let action=addPostActionCreator("It is my test")


    let newState = profileReducer(state, action)


    expect (newState.posts[2].message).toBe("It is my test")

})
it("after deleting lengthof messages shouls decrise", ()=> {
    let action= deletePost("1")


    let newState = profileReducer(state, action)


    expect (newState.posts.length).toBe(1)

})