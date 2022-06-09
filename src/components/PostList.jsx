import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

    if(!posts.length) {
        <h1 style={{ textAlign: 'center' }}>Posts does not!</h1>
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((item, index) => (
                <PostItem remove={remove} number={index + 1} post={item} key={item.id} />
            ))}

        </div>
    );
};

export default PostList;
