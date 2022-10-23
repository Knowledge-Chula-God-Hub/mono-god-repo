export async function getCommentApi(postId:number): Promise<any>{
    return [
        {    commentId : 1,
            ownerId: 643210000,
            score: 2,
            time: new Date(1,1,2020),
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
            time: new Date(1,1,2020),
            message: `Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
            ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
            Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem 
            Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
            ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
            Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem`,
        },
    ];
}