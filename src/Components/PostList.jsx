import React, { useState } from "react";
import Post from "./Post";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
          <h2 style={{textAlign: "center"}}>{title}</h2>
            {posts.map( (posts,index) => 
              <Post remove ={remove} number={index} post={posts} key={posts.id}/>
            )}
        </div>
    );
}

export default PostList;