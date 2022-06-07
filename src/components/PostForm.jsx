import React from "react";
import { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({ title: '', body: '' });
    };

    return (
        <form className="form-posts">
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="post name" />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="post name" />
            <MyButton onClick={addNewPost}>Edit post</MyButton>
        </form>
    );
};

export default PostForm;
