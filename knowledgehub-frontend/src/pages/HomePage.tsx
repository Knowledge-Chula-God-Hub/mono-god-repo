import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import { PostProps } from "../interfaces/PostProps"
import { ChangeEvent, useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { getPostList } from "../api/Api"
import { SearchBar } from "../components/searchBar"
import "../styles/HomePage.css"
import FilterModal from "../components/FilterModal"
import { NONAME } from "dns"

function sortCondition(condition:number,postList:PostProps[]):PostProps[]{
    const newPostList = postList
    if (condition ===1) newPostList.sort((a, b) => a.time.getTime() < b.time.getTime() ? -1 : a.time.getTime() > b.time.getTime() ? 1 : 0);
    else if (condition ===2) newPostList.sort((a, b) => a.likes < b.likes ? -1 : a.likes > b.likes ? 1 : 0);
    return newPostList
}

function HomePage() {
    const [condiiton,setCondition] = useState<number>(0);
    const [postList,setPostList] = useState<PostProps[]>([]);
    const [open,setOpen] = useState<boolean>(true);
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

    useEffect(()=>{
        getPostList().then((data)=>{(
            setPostList(data)
        )})
    },[postList,condiiton])
    
    let SearchBarRender = (condiiton === 3) ? (<SearchBar openFilter = {setOpen} />):(null) ;
    
    const NewPostRender = (condiiton === 4) ?(
        <div></div>
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