import { PostProps } from "../interfaces/PostProps"

const SmallPostStyle = {
    display:"flex", 
    // flexDirection:"row",
    justifyContent:"space-between",
    padding:"16px",
    hight: "80px",
};

function SmallPostSection(props:PostProps) {
    const {isEnd,time,title,message,Id,ownerId,numberOfEdits} = props;
    return (
        <h1>this is PostSection</h1>
    )
}
export default SmallPostSection