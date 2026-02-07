import React from "react";

const Post = React.memo(({ post }) => {
    console.log("Post render");
    return (
        <>
            <h2>your name{post.name}</h2>
            <p>your age{post.age} </p>
        </>
    );
});