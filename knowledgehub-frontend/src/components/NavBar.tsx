import "../styles/NavBar.css"
import BCulogo from "../assets/logo.svg"
import avatar from "../assets/avatar.svg"
import { UserContext } from "../userContext"
import {useContext} from 'react' 
import { UserProps } from "../interfaces/UserProps"
import { UserContextProps } from "../interfaces/UserContextProps"
function NavBar(user:UserProps) {
    const divstyle = {
        display:"flex",
        justifyContent:"space-between",
        padding:"0px 16px",
        borderBottom: "2px solid black",
        width:"99vw",
        height:"80px",
        backgroundColor:"white",
        zIndex:"999"
    }
    return (
        <div style={{...divstyle,position:"fixed",flexDirection:"row"}}>
            <a href="/home"><img src={BCulogo} width="83px"></img></a>
            <h1 style={{
                color:"black",
                fontFamily:"Poppins",
                fontSize:"32px",
                fontWeight:"normal",
                userSelect:"none"
            }} onClick = {() => window.location.href = '/home'}>Bun Chu - la</h1>
            <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"8px",
                marginRight:"16px"
            }}>
                <h1 style={{
                    fontFamily:"Time new Roman",
                    fontWeight:"normal",
                    fontSize:"20px",
                    alignSelf:"center"
                }}>Hi, {user?.name}</h1>
                <img src={avatar} width="50px" className="avatar"></img>
            </div>
        </div>
    ) 
}
export default NavBar