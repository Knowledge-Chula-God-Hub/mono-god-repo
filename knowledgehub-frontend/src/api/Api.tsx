import { PostProps } from "../interfaces/PostProps";
import { defaultCommentList, defaultPostProps } from "./defaultVarible";

export async function getCommentApi(postId:number): Promise<any>{
    return defaultCommentList;
}

export async function getPostDetails(Id:number): Promise<PostProps>{
    return defaultPostProps;
}

export async function getPostList(condiiton:number): Promise<PostProps[]>{
    let ANS = [] as PostProps[];
    ANS.push(defaultPostProps);
    ANS.push(defaultPostProps);
    return ANS;
}

export async function getHistort(condiiton:number): Promise<PostProps[]>{
    let ANS = [] as PostProps[];
    ANS.push(defaultPostProps);
    ANS.push(defaultPostProps);
    return ANS;
}