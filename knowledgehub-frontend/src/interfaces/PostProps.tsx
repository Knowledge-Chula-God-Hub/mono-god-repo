export interface PostProps{
    isEnd: boolean;
    tag:string;
    time: string;
    title: string;
    message: string;
    postId: number;
    ownerId: number;
    numberOfEdits: number;
}