import { title } from "process";
import { getImpliedNodeFormatForFile } from "typescript";
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

function getInt(a:number,b:number) : number{
    return a + Math.floor(Math.random() * (b-a+1))
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
    // const SubPath = "";
    // const type = "GET"
    // const body = {};
    // return getAPI(SubPath,type,body);
    const ret = []
    const subjectList = ["subjectA","subjectB"]

    
    for(var i = 0;i<100;i++){

        ret.push({
            isEnd: Math.random() < 0.5,
            tagSubject : subjectList[getInt(0,1)],
            likes : getInt(1,100),
            type : ["note","discuss","pass exam"].at(getInt(0,2)),
            title : ["titleA","titleB"].at(getInt(0,1)) + " number " + i.toString(),
            message : "mock msg, ".repeat(getInt(1,70)),
            Id : 1000000000 + getInt(0,8999999999),
            ownerId : 1000000000 + getInt(0,8999999999),
            time : new Date(Date.now()+getInt(1000,1000000)),
            timeEdited : new Date(Date.now() + getInt(1000000,10000000)),
            numberOfEdits : getInt(0,10)
        } as PostProps)
    }
    return ret
}

export async function getHistorty(): Promise<PostProps[]>{
    const SubPath = defaultPath.concat("");
    const type = "GET"
    const body = {};
    return getAPI(SubPath,type,body);
}
