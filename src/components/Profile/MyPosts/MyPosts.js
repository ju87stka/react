import React from 'react';
import  classes from './MyPosts.module.css';
import Post from "./Post/Post";
import Profile from "./../Profile";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const MyPosts=(props)=> {

    let  postsElements =props.posts.
    map( (p)=>                <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement=React.createRef();

    let onAddPost=() => {
        props.addPost();

    }
        let onPostChange=()=>{
            let text = newPostElement.current.value;
                props.updateNewPostText(text);
        }



                return (

                <div className={classes.postsBlock}>
                    <h3>My posts</h3>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>

                        <button onClick={ onAddPost }>Add Post</button>
                    </div>

                <div>New post</div>
            <div className={classes.posts}>
                {postsElements}


            </div>
        </div>

    );
}
export default MyPosts;