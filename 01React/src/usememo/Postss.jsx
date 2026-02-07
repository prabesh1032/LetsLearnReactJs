import React from "react";

const Postss = React.memo(({ post }) => {
    console.log("Post render");
    return (
        <>
            <h2>Your name: {post.name}</h2>
            <p>Your age: {post.age}</p>
        </>
    );
});

export default Postss;