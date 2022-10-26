import { CommentProps } from "../interfaces/CommentProps";
import { PostProps } from "../interfaces/PostProps";
const defaultPath = 'http://localhost:8000'

async function getAPI(subPath:string,Type:string,body:object){
    const path = defaultPath.concat(subPath.toString());
    const payload = {
        method:Type,
        body:JSON.stringify(body)
    }
    const response = await fetch(path,payload);
    return response.json();
}


export async function getCommentApi(postId:number): Promise<CommentProps[]>{
    const SubPath = "";
    const type = "GET"
    const body = {postId:postId};
    return getAPI(SubPath,type,body);
}

export async function getPostDetails(Id:number): Promise<PostProps>{
    const SubPath = "";
    const type = "GET"
    const body = {id:Id};
    return getAPI(SubPath,type,body);
}

export async function getPostList(): Promise<PostProps[]>{
    const SubPath = "";
    const type = "GET"
    const body = {};
    return getAPI(SubPath,type,body);
}

export async function getHistorty(): Promise<PostProps[]>{
    const SubPath = defaultPath.concat("");
    const type = "GET"
    const body = {};
    return getAPI(SubPath,type,body);
}
