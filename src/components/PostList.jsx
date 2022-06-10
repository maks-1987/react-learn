import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

    if (posts.length === 0) {
        return (
            <h1 style={{ textAlign: 'center' }}>Posts does not!</h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((item, index) =>
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            remove={remove}
                            number={index + 1}
                            post={item}
                            key={item.id} />
                     </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
