import { PostProps } from "../interfaces/PostProps"
import { useEffect, useState } from "react";

function CommentForm() {
    function handleSubmit(){
        return "nice"
    }
    return (
        <form className="CommentForm" onSubmit={handleSubmit}>
        <label>
          <input className = 'form' type="text" value={"..What do you think"}/>
        </label>
        <div>
        <input className = 'submitButton' type="submit" value="Submit" />
        </div>
      </form>
    )
}

function MainPost(props:PostProps) {
    const title = props.title;
    const message = props.message;
    return (
        <div className="MainPost">
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
}

function PostSection(props:PostProps) {
    return (
        <div className="PostSection">
            <MainPost {...props} />
            <CommentForm />
        </div>
    );
}
export default PostSection