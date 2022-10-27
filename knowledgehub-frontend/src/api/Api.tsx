import { CommentProps } from "../interfaces/CommentProps";
import { PostProps } from "../interfaces/PostProps";
import axios from 'axios';
import { ChulaSSoRespone } from "../interfaces/ChulaSSoRespone";



const defaultPath = 'http://localhost:8000'

async function getAPI(subPath:string,Type:string,body:object,header:object,Path:string = defaultPath):Promise<any>{
    const path = Path.concat(subPath.toString());
    let response;
    if (Type === "GET") response = await axios.get(path,body);
    else if (Type === "POST") response = await axios.post(path,body,header);
    return response;
}


export async function getCommentApi(postId:number): Promise<CommentProps[]>{
    const SubPath = "";
    const type = "GET"
    const body = {postId:postId};
    const header = {};
    return getAPI(SubPath,type,body,header);
}

export async function getPostDetails(Id:number): Promise<PostProps>{
    const SubPath = "";
    const type = "GET"
    const body = {id:Id};
    const header = {};
    return getAPI(SubPath,type,body,header);
}

export async function getPostList(): Promise<PostProps[]>{
    const SubPath = "";
    const type = "GET"
    const body = {};
    const header = {};
    return getAPI(SubPath,type,body,header);
}

export async function getUserFromChulaSSO(ticket:string): Promise<ChulaSSoRespone>{
    const Path = 'http://localhost:8080'
    const SubPath = "/serviceValidation";
    const type = "POST "
    const body = {};
    const header = {
        withCredentials: false,
        headers:{
            DeeAppId : "APPID",
            DeeAppSecret : "APPSECRET",
            DeeTicket : ticket,
            'Access-Control-Allow-Origin': "*" ,
        }
    };
    console.log("edit")
    return axios.post('http://localhost:8080/serviceValidation',body,header)
}

