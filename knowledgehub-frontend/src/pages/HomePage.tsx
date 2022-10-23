import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import LandingPage from "./LandingPage"
import { PostProps } from "../interfaces/PostProps"
import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"
function HomePage() {
    const [postList,setPostList] = useState<PostProps[]>([]);
    useEffect(()=>{
        var id = 0;
        const interval = setInterval(()=>{
            const post = {
                isEnd: true,
                tag:"learn",
                title: "test" + id.toString(),
                message: "string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring string stringstring " + id.toString(),
                Id: id,
                ownerId: 64402301,
                time: new Date('2020-06-11'),
                timeEdited: new Date('2021-05-12'),
                numberOfEdits: 4 + id,
            } as PostProps
            id = id +1
            var tempList = [...postList,post]
            setPostList(tempList)
            console.log(postList)
        },2000)
        return () => clearInterval(interval);
    },[postList])
    return (
        
        <>
            <NavBar></NavBar>
            <div style={{
                display:"flex",
                flexDirection:"row"
            }}>
                <SideBar></SideBar>
                <div style={{
                    paddingLeft:"302px",
                    paddingTop:"80px",
                    display:"flex",
                    flexDirection:"column",
                    width : "calc(100vw - 302px)",
                }}>
                    {
                        postList.map(post=>PostCard(post))
                    }
                </div>
            </div>
        </>
    )
}
export default HomePage