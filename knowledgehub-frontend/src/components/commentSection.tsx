import { useState,useEffect } from 'react';
import { getCommentApi } from '../api/Api';
import {CommentProps} from '../interfaces/CommentProps'
import { PostProps } from '../interfaces/PostProps';
import dislike from "../assets/smallLogo/dislike.svg"
import like from "../assets/smallLogo/like.svg"
import reply from "../assets/smallLogo/reply.svg"
import avatar from "../assets/avatar.svg"

function CommentComponent(props: CommentProps){
    const commentId = props.commentId;
    const ownerId = props.ownerId;
    const score = props.score;
    const time = props.time;
    const message = props.message;
    const buttonStyle = {
        hight:"30px",
        width:"30px"
    }
    return (
        <div className='CommentComponent'>
            <p>{message}</p>
            <div style={{display:"flex",justifyContent:"space-between",gap:"16px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
                    <img src={avatar} style = {{height:"70px",width:"70px",borderRadius:"50%"}} alt="" />
                    <h4>{ownerId}</h4>
                    <p>{time.toLocaleString()}</p>
                </div>
                <div style={{display:"flex",gap:"20px",justifyContent:"space-between"}}>
                    <img src={like} alt="" style={buttonStyle}/>
                    <img src={dislike} alt="" style={buttonStyle}/>
                    <img src={reply} alt="" style={buttonStyle} />
                </div>
            </div>
        </div>
    );
}

function CommentSection(props:PostProps) {
    const postId = props.Id;
    const [commentList,setCommentList] = useState([]);
    useEffect(() =>{
        getCommentApi(postId).then((data)=>{
            setCommentList(data)
        })
    }, [])
    return (
        <>
            <div className='CommentSection' style={{maxWidth: "900px", margin: "auto"}}>
                {commentList.map((props:CommentProps) =>(
                    <>
                        <CommentComponent key = {props.commentId} {...props}></CommentComponent>
                        <hr />
                    </>
                ))}
            </div>
        </>
    );
}

export default CommentSection;