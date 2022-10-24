import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import LandingPage from "./LandingPage"
import { PostProps } from "../interfaces/PostProps"
import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { getPostList } from "../api/Api"
import { SearchBar } from "../components/searchBar"
function HomePage() {
    const [condiiton,setCondition] = useState<number>(0);
    const [postList,setPostList] = useState<PostProps[]>([]);
    useEffect(()=>{
        getPostList(condiiton).then((data)=>{(
            setPostList(data)
        )})
    },[postList])
    let SearchBarRender = (condiiton === 4) ? (<SearchBar />):(null) ;
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
                        postList.map(post=>PostCard(post))
                    }
                </div>
            </div>
        </>
    )
}
export default HomePage