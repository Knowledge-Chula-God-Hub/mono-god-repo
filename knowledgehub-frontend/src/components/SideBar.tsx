import { useEffect, useState } from "react";
import "../styles/SideBar.css"

function isSelect(i:number,x:number) : object{
    if(i===x) return {
        backgroundColor : "#D9D9D9",
        borderRight: "9px solid #F8C4B4",
        margin : "16px 0px 0px 0px",
        padding : "5px 0px 5px 24px"
    }
    else return {
        background : "none",
        borderRight: "0px solid #F8C4B4",
    }
}

function SideBar() {
    const [selected,setSelected] = useState(0);
    
    return (
        <div style={{display:"flex", 
                    flexDirection:"column",
                    width:"300px",
                    height:"calc(100vh - 80px)",
                    position:"sticky",
                    borderRight:"2px solid black",
                    paddingTop:"16px"
        }}>
            <button className="menu_button" style={isSelect(0,selected)} onClick={()=>{setSelected(0)}}>My feed</button>
            <h1 className="category">Discover</h1>
            <button className="menu_button" style={isSelect(1,selected)} onClick={()=>{setSelected(1)}}>Popular</button>
            <button className="menu_button" style={isSelect(2,selected)} onClick={()=>{setSelected(2)}}>Most upvoted</button>
            <button className="menu_button" style={isSelect(3,selected)} onClick={()=>{setSelected(3)}}>Most discuss</button>
            <button className="menu_button" style={isSelect(4,selected)} onClick={()=>{setSelected(4)}}>Search</button>
            <h1 className="category">Manage</h1>
            <button className="menu_button" style={isSelect(5,selected)} onClick={()=>{setSelected(5)}}>Liked</button>
            <button className="menu_button" style={isSelect(6,selected)} onClick={()=>{setSelected(6)}}>History</button>
            <button className="menu_button" style={isSelect(7,selected)} onClick={()=>{setSelected(7)}}>Setting</button>
        </div>
        
    ) 
}
export default SideBar;