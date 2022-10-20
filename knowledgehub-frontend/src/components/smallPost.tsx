import { PostProps } from "../interfaces/PostProps"

const navStyle = {
    display:"flex", 
    // flexDirection:"row",
    justifyContent:"space-between",
    padding:"16px",
    hight: "80px",
};

function SmallPostSection(props:PostProps) {
    const {isEnd,tag,time,title,message,postId,ownerId,numberOfEdits} = props;
    return (
        <h1>this is PostSection</h1>
    )
}
export default SmallPostSection