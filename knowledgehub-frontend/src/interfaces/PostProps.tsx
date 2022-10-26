export interface PostProps{
    isEnd: boolean;
    tagSubject:string;
    likes:number;
    type:string;
    title: string;
    message: string;
    Id: number;
    ownerId: number;
    time: Date;
    timeEdited: Date;
    numberOfEdits: number;
}