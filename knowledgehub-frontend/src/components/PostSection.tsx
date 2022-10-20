import { PostProps } from "../interfaces/PostProps"
import { CommentProps } from "../interfaces/CommentProps"
import { useEffect, useState } from "react";

const PostStyle = {
    fontFamily: "TimeNewRoman",
    display:"flex", 
    // flexDirection:"row",
    justifyContent:"space-between",
    paddingButton:"16px",
    maxhight: "280",
    width:"1100px"
};

function MainPost(props:PostProps) {
    const title = props.title;
    const message = props.message;
    function CommentBox() {
        function OnClickComment(){
            return <h1>nice</h1>
        }
        return (
            <div >
                <p>...What do you think?</p>
                <button onClick={OnClickComment}>comment</button>
            </div>
        )
    }
    return (
        <div >
            <h1>{title}</h1>
            <p>{message}</p>
            <CommentBox />
        </div>
    )
}

function CommentSection(props: CommentProps) {
    const {ownerId,score,time,message} = props;
    return (
        <h1>this is CommentSection</h1>
    );

const initCommentList = {
    comments : [] as CommentProps[]
};

function PostSection(props:PostProps) {
    const initCommentList = {
        comments : [] as CommentProps[]
    };
    const [commentList,setCommentList] = useState(initCommentList);
    useEffect(() =>{
        setCommentList(callCommentApi(props.postId));
    }, [])
    const PostStyle = {
        display:"flex", 
        // flexDirection:"row",
        justifyContent:"space-between",
        paddingButton:"16px",
        maxhight: "280",
        width:"110px"
    };
    const {isEnd,tag,time,title,message,postId,ownerId,numberOfEdits} = props;
    return (
        <div style = {PostStyle}>
            <MainPost {...props}></MainPost>
            commentList.comments.map((CommentProps) =>
                <CommentSection key = {CommentProps.commentId}  {...{CommentProps}}></CommentSection>
            )
        </div>
    );
}
export default PostSection