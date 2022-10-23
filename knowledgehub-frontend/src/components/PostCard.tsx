import avatar from '../assets/avatar.svg'
import '../styles/PostCard.css'
import { PostProps } from '../interfaces/PostProps';
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import comment from '../assets/comment.svg'
import share from '../assets/share.svg' 
import styled from 'styled-components'
import "../styles/HomePage.css"

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
                <img src={avatar} width="30px"/>
                <h1>{props.ownerId}</h1>
                <h2>{props.time.toLocaleString()}</h2>
            </div>
            {/* <StyledDiv> */}
                <a href={link} style = {{textDecoration:"none",gap:"inherit"}}>
                    <h1>{props.title}</h1>
                </a>
            {/* </StyledDiv> */}
            {/* <StyledDiv> */}
                <a href={link} style = {linkStyle}>
                    <div style={{maxWidth:"69vw",height:"100px"}}>
                        <p className='msg'>{props.message}</p>
                    </div>
                </a>
            {/* </StyledDiv> */}
                <div className='tagandbutton'>
                    <div className='left'>
                        <h1>{props.tagSubject}</h1>
                        <h2>{props.title}</h2>
                    </div>
                    <div className='right'>
                        <img src={like} alt="" className='buttomlogo' onClick={()=>clicked(0)} />
                        <img src={dislike} alt="" className='buttomlogo' onClick={()=>clicked(1)} />
                        <img src={comment} alt="" className='buttomlogo' onClick={()=>clicked(2)} />
                        <img src={share} alt="" className='buttomlogo' onClick={()=>clicked(3)} />    
                    </div>
                </div>
            <div className='Line'></div>
        </div>
    </>
    )
}

export default PostCard;

function clicked(i : number){
    console.log("clicked "+i)
}