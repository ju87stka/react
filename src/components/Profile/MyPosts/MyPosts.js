import React from 'react';
import  classes from './MyPosts.module.css';
import Post from "./Post/Post";
import Profile from "./../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControls";




const MyPosts=(props)=> {

    let  postsElements =props.posts.
    map( (p)=>                <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement=React.createRef();

    let onAddPost=(values) => {

        props.addPost(values.newPostElement);

    }




                return (

                <div className={classes.postsBlock}>
                    <h3>My posts</h3>
                    <AddPostReduxForm    onSubmit={onAddPost}/>

                <div>New post</div>
            <div className={classes.posts}>
                {postsElements}


            </div>
        </div>

    );
}
let maxLenght10=maxLengthCreator(10)
const AddPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostElement" placeholder ="Enter your post"
                   validate={[required,maxLenght10]} />

        </div>
        <div>

        <button >Add Post</button>
</div>
        </form>
    )
}
const AddPostReduxForm= reduxForm({
    form:"addPostForm"
})(AddPostForm)
export default MyPosts;