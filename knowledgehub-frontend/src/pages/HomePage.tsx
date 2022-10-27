import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import { PostProps } from "../interfaces/PostProps"
import { ChangeEvent, useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { getPostList } from "../api/Api"
import { SearchBar } from "../components/searchBar"
import {Box, Modal, Typography, Checkbox,FormGroup,FormControlLabel, Slider, TextField, Button} from "@material-ui/core"
import "../styles/HomePage.css"
import FilterModal from "../components/FilterModal"
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function sortCondition(condition:number,postList:PostProps[]):PostProps[]{
    const newPostList = postList
    if (condition ===1) newPostList.sort((a, b) => a.time.getTime() < b.time.getTime() ? -1 : a.time.getTime() > b.time.getTime() ? 1 : 0);
    else if (condition ===2) newPostList.sort((a, b) => a.likes < b.likes ? -1 : a.likes > b.likes ? 1 : 0);
    return newPostList
}

function HomePage() {
    const [condiiton,setCondition] = useState<number>(4);
    const [postList,setPostList] = useState<PostProps[]>([]);
    const [open,setOpen] = useState<boolean>(false);
    const [year,setYear] =  useState<number | number[]>(10);

    const handleSliderChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        setYear(newValue);
    };
    const handleSubmit = ()=>{
        handleClose();
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    useEffect(()=>{
        getPostList().then((data)=>{(
            setPostList(data)
        )})
    },[postList,condiiton])
    
    let SearchBarRender = (condiiton === 3) ? (<SearchBar openFilter = {setOpen} />):(null) ;
    
    const NewPostRender = (condiiton === 4) ?(
        <div className="newPostContainer">
            <h1>Title</h1> 
            <TextField id="filled-basic" label="Title" variant="filled" style={{width:"80%"}} />
            <h1>Details</h1> 
            <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper"
            
            />
            <div className="Bcontainner">
                <div style={{width:"50%"}}>
                    <h1>Type</h1> 
                    <TextField id="filled-basic" label="type" variant="filled" style={{width:"100%"}} /> 
                </div>
                <div style={{width:"50%"}}>
                    <h1>Subject</h1> 
                    <TextField id="filled-basic" label="subject" variant="filled" style={{width:"100%"}} /> 
                </div>
            </div>
            <div style={{width:"80%"}}>
                    <h1>Additional link</h1> 
                    <TextField id="filled-basic" label="link" variant="filled" style={{width:"100%"}} /> 
            </div>
            
            <button className="submitButton">Submit</button> 
        </div>
    ):null;

    return (
        <>
            <NavBar></NavBar>
            <div style={{display:"flex", flexDirection:"row"}}>
                <SideBar setCondition = {setCondition}/>
                <div style={{
                    paddingLeft:"302px",
                    paddingTop:"80px",
                    display:"flex",
                    flexDirection:"column",
                    width : "calc(100vw - 302px)",
                }}>
                    {SearchBarRender}
                    {([0,1,2,4,5].includes(condiiton))?
                        sortCondition(condiiton,postList).map(post=>PostCard(post)):null
                    }
                    {NewPostRender}
                </div>
            </div>
            <FilterModal {...{open,year,handleClose,handleSliderChange,handleSubmit}}/>
        </>
    )
}
export default HomePage