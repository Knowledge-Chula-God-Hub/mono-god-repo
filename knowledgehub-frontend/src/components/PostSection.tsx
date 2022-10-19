import { PostProps } from "../interfaces/PostProps"

function PostSection(props:PostProps) {
    const {isEnd,tag,time,title,message,postId,ownerId,numberOfEdits} = props;
    return (
        <h1>this is PostSection</h1>
    )
}
export default PostSection