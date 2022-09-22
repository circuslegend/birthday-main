import React, { useState } from "react";
import MyBtn from "./UI/button/MyBtn";
import MyInput from "./UI/input/MyInput";



const PostForm = ({create}) => {

    let [postObj,setPostObj] = useState({title:'',text:''});
    // let textInputRef = useRef();

    let addNewPost = (e) => {
    e.preventDefault();
    // console.log(textInputRef.current.value);
    let newPost ={
        ...postObj, id:Date.now()
    }
    create(newPost);
    setPostObj({title:'',text:''});
    }

    return (
        <form>
          <MyInput 
            value={postObj.title}
            onChange={e => {setPostObj({...postObj, title: e.target.value})}}
            type="text" 
            placeholder="Название поста"
          />
          <MyInput 
            // ref = {textInputRef}
            value={postObj.text}
            onChange={e => {setPostObj({...postObj, text: e.target.value})}}
            type="text" 
            placeholder="Описание поста"
          />
          <MyBtn onClick={addNewPost}>Создать</MyBtn>
        </form>
    );
}

export default PostForm;