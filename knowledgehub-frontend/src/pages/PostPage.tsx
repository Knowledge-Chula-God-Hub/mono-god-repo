import PostSection from "../components/PostSection"

const testPropos = 
{
    isEnd: false,
    tag: "test",
    time: "202",
    title:"Topic",
    message:`Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
    ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
    Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem 
    Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
    ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
    Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem `,
    postId: 0,
    ownerId: 6400000000,
    numberOfEdits: 99,
}

function PostPage() {
    return (
        <PostSection {...testPropos}></PostSection>
    )
}
export default PostPage