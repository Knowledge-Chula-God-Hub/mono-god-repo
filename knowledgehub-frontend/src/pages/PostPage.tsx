import CommentSection from "../components/commentSection"
import PostSection from "../components/PostSection"
import { UserProps } from "../interfaces/UserProps";
import { PostProps } from "../interfaces/PostProps";
import UserPost from "../components/userPost";
import '../styles/PostPage.css'

const testPropos:PostProps = 
{
    isEnd: false,
    tag: "test",
    time: new Date(),
    timeEdited: new Date(),
    title:"Topic",
    message:`Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
    ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
    Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem 
    Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
    ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
    Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem `,
    Id: 0,
    ownerId: 6400000000,
    numberOfEdits: 99,
};

const userTest:UserProps ={
    id: 6432100000,
    rank: 1,
    name: "Test",
    profileUrl: "knowledgehub-frontend\public\logo512.png"
}

function PostPage() {
    return (
        <div className="body">
            <UserPost {...userTest} />
            <PostSection {...testPropos}></PostSection>
            <CommentSection {...testPropos}/>
        </div>
    )
}
export default PostPage