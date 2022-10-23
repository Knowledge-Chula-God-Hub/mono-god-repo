import { useState,useEffect } from 'react';
import { getCommentApi } from '../api/Api';
import {CommentProps} from '../interfaces/CommentProps'
import { PostProps } from '../interfaces/PostProps';

function CommentComponent(props: CommentProps){
    const commentId = props.commentId;
    const ownerId = props.ownerId;
    const score = props.score;
    const time = props.time;
    const message = props.message;
    return (
        <div className='CommentComponent'>
            <p>{message}</p>
            <h4>{ownerId}</h4>
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
            <div className='CommentSection'>
                {commentList.map((props:CommentProps) =>(
                    <CommentComponent key = {props.commentId} {...props}></CommentComponent>
                ))}
            </div>
        </>
    );
}

export default CommentSection;