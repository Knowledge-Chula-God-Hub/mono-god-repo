import { CommentProps } from "../interfaces/CommentProps"

function CommentSection(props: CommentProps) {
    const {ownerId,score,time,message} = props;
    return (
        <h1>this is CommentSection</h1>
    )
}
export default CommentSection