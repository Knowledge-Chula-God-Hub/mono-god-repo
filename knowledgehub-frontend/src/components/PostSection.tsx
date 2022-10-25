import { PostProps } from "../interfaces/PostProps"
import { useEffect, useState } from "react";

function CommentForm() {
    function handleSubmit(){
        return "nice"
    }
    return (
        <div style={{margin:"auto"}}>
        <form className="CommentForm" style={{left:"50%",transform: "translateX(-50%)",width:"-webkit-fill-available",position:"relative",display:"inline-block",maxWidth:"1048px",justifyContent:"center"}} onSubmit={handleSubmit}>
            <textarea className = 'form' placeholder="..What do you think 555" style={{fontSize:"20px",resize: "none",padding: "10px",maxWidth:"1048px",height:"150px",width:"inherit"}}/>
            <div style={{display:"flex",justifyContent:"end"}}>
                <input className = 'submitButton' type="submit" value="Submit" style={{borderRadius: "16px",backgroundColor:"#BCE29E",border:"none",position:"absolute",bottom:"10px",right:"10px",height:"31px",width:"102px"}}/>
            </div>
        </form>
        </div>
    )
}

function MainPost(props:PostProps) {
    const title = props.title;
    const message = props.message;
    return (
        <div className="MainPost" style={{margin: "auto",maxWidth: "1048px"}}>
            <h1 style={{textAlign: "center",fontSize:"40px"}}>{title}</h1>
            <p style={{fontSize:"24px"}}>{message}</p>
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