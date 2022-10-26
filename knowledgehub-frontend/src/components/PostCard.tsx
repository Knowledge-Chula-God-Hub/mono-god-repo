import avatar from '../assets/avatar.svg'
import '../styles/PostCard.css'
import { PostProps } from '../interfaces/PostProps';
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import comment from '../assets/comment.svg'
import share from '../assets/share.svg' 
import styled from 'styled-components'
import "../styles/HomePage.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PostCard(props : PostProps){
    const link = "/Post/:"+props.Id.toString()
    const linkStyle = {textDecoration:"none",gap:"inherit",visited:{color: 'white'}}
    const StyledDiv = styled.div`
    a:visited {
        color: black;
    }
`
    return (
    <> 
        <a href={link}></a>
        <div className='card'>
            <div className='avatar_title'>
                <img src={avatar} width="30px" style={{borderRadius:"30px"}}/>
                <h1>{props.ownerId}</h1>
                <h2>{props.time.toLocaleString()}</h2>
            </div>
                <a href={link} style = {{textDecoration:"none",gap:"inherit"}}>
                    <h1>{props.title}</h1>
                </a>
                <a href={link} style = {linkStyle}>
                    <div style={{maxWidth:"69vw",height:"100px"}}>
                        <p className='msg'>{props.message}</p>
                    </div>
                </a>
                <div className='tagandbutton'>
                    <div className='left'>
                        <h1>{props.tagSubject}</h1>
                        <h2>{props.title}</h2>
                    </div>
                    <div className='right'>
                        <img src={like} alt="" className='buttomlogo' onClick={()=>postLike(props.Id)} />
                        <img src={dislike} alt="" className='buttomlogo' onClick={()=>postDislike(props.Id)} />
                        <img src={comment} alt="" className='buttomlogo' onClick={()=>postComment(props.Id)} />
                        <img src={share} alt="" className='buttomlogo' onClick={()=>postShare(props.Id)} />    
                    </div>
                </div>
            <div className='Line'></div>
        </div>
        <ToastContainer />
    </>
    )
}

export default PostCard;

async function postLike(postId:number) {
    console.log("liked " + postId)
}
async function postDislike(postId:number) {
    console.log("Dislike " + postId)
}
async function postComment(postId:number) {
    console.log("Comment " + postId)
    document.location.href = '/Post/:' + postId
}
async function postShare(postId:number) {
    console.log("Share " + postId)
    toast.success("Link was copied to your clipboard",{
        position: toast.POSITION.BOTTOM_CENTER
    });
    
}
