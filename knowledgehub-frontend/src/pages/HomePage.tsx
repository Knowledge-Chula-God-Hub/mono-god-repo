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
            const post:PostProps = 
                {
                    isEnd: false,
                    tagSubject: "21102",
                    type:"test",
                    time: new Date(),
                    timeEdited: new Date(),
                    title:"Topic",
                    message:`Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
                    ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
                    Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem 
                    Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis   purus.  eget
                    ac justo egestas maximus. Aenean ornare viverra nunc, et interdum erat  .  a placerat . 
                    Fusce mattis augue orci, sit amet vestibulum odio euismod eget. Pellentesque nec  sem `,
                    Id: 0,
                    ownerId: 6400000000,
                    numberOfEdits: 99,
                };
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