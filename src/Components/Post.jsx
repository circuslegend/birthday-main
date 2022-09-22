import React, { useState } from "react";
import MyBtn from "./UI/button/MyBtn";

const Post = (props) => {
    return (
        <div className="post">
            <div className="postContent">
                <strong>{props.number+1}. {props.post.title}</strong><br/>
                {props.post.text}
            </div>  
            <div className="postFooter">
                <MyBtn onClick={() => {props.remove(props.post)}}>Удалить</MyBtn>
            </div>
        </div>
    );
}

export default Post;