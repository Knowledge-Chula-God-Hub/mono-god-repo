export interface PostProps{
    isEnd: boolean;
    tag:string;
    title: string;
    message: string;
    postId: number;
    ownerId: number;
    time: Date;
    timeEdited: Date;
    numberOfEdits: number;
}