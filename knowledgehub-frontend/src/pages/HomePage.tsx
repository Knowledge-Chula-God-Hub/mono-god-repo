import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import LandingPage from "./LandingPage"
import { PostProps } from "../interfaces/PostProps"
import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { getPostList } from "../api/Api"
import { SearchBar } from "../components/searchBar"

function sortCondition(condition:number,postList:PostProps[]):PostProps[]{
    const newPostList = postList
    if (condition ===1) newPostList.sort((a, b) => a.time.getTime() < b.time.getTime() ? -1 : a.time.getTime() > b.time.getTime() ? 1 : 0);
    else if (condition ===2) newPostList.sort((a, b) => a.likes < b.likes ? -1 : a.likes > b.likes ? 1 : 0);
    return newPostList
}

function HomePage() {
    const [condiiton,setCondition] = useState<number>(0);
    const [postList,setPostList] = useState<PostProps[]>([]);
    useEffect(()=>{
        getPostList().then((data)=>{(
            setPostList(data)
        )})
    },[])
    let SearchBarRender = (condiiton === 3) ? (<SearchBar />):(null) ;

    return (
        
        <>
            <NavBar></NavBar>
            <div style={{
                display:"flex",
                flexDirection:"row"
            }}>
                <SideBar setCondition = {setCondition}></SideBar>
                <div style={{
                    paddingLeft:"302px",
                    paddingTop:"80px",
                    display:"flex",
                    flexDirection:"column",
                    width : "calc(100vw - 302px)",
                }}>
                    {SearchBarRender}
                    {
                        sortCondition(condiiton,postList).map(post=>PostCard(post))
                    }
                </div>
            </div>
        </>
    )
}
export default HomePage