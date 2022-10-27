import { CommentProps } from "../interfaces/CommentProps"
import { PostProps } from "../interfaces/PostProps";
import { UserProps } from "../interfaces/UserProps";

export const defaultCommentList:CommentProps[] = [
    {    commentId : 1,
        ownerId: 643210000,
        score: 2,
        time: new Date(1,1,2565),
        message: `Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
        ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
        Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem 
        Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
        ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
        Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem`
    },
    {    commentId : 2,
        ownerId: 643210000,
        score: 3,
        time: new Date(1,2,2565),
        message: `this is 2 comment`,
    },
];


export const defaultPostProps:PostProps = {
    isEnd: false,
    tagSubject: "21102",
    type:"test",
    likes:12,
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

export const  defaultUserProps:UserProps = {
    id: -1,
    rank: 0,
    name: "jirayuwat Doe",
    profileUrl: "test",
}