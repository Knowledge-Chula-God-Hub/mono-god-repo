import CommentSection from "../components/commentSection"
import PostSection from "../components/PostSection"
import { UserProps } from "../interfaces/UserProps";
import UserPost from "../components/userPost";
import '../styles/PostPage.css'
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../api/Api";
import { useState,useEffect } from 'react';
import { defaultPostProps } from "../api/defaultVarible";
import { UserContext } from "../userContext";
import {useContext} from "react"

const userTest:UserProps ={
    id: 6432100000,
    rank: 1,
    name: "Test",
    profileUrl: "knowledgehub-frontend\public\logo512.png"
}

function PostPage() {
    const userContext= useContext(UserContext);
    const user:UserProps = userContext.data;
    const { Id } = useParams();
    const [testPropos,settestPropos] = useState(defaultPostProps);

    useEffect(() =>{
        getPostDetails(Number(Id)).then((data)=>{
            settestPropos(data)
        })
    }, [])
    
    const bodyStyle = {
        paddingTop : "98px",
        margin : "auto",
        display : "block",
        gap : '16px',
        maxWidth : "1108px",
        fontFamily:"Time new Roman"
    }
    return (
        <div className="postPage">
            <NavBar {...user}/>
            <div className="body" style={bodyStyle}>
                <h1>{Id}</h1>
                <UserPost {...userTest} />
                <hr />
                <PostSection {...testPropos}></PostSection>
                <CommentSection {...testPropos}/>
            </div>
        </div>
    )
}
export default PostPage