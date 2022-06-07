import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
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
