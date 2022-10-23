import "../styles/NavBar.css"
import BCulogo from "../assets/logo.svg"
import avatar from "../assets/avatar.svg"
function NavBar() {
    return (
        <div style={{display:"flex", 
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding:"0px 16px",
                    borderBottom: "2px solid black",
                    position:"fixed",
                    width:"99vw",
                    height:"80px"}}>
            <img src={BCulogo} width="83px"></img>
            <h1 style={{
                color:"black",
                fontFamily:"Poppins",
                fontSize:"32px",
                fontWeight:"normal"
            }}>Bun Chu - la</h1>
            <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"8px"
            }}>
                <h1 style={{
                    fontFamily:"Time new Roman",
                    fontWeight:"normal",
                    fontSize:"20px",
                    alignSelf:"center"
                }}>Hi, Jirayuwat</h1>
                <img src={avatar} width="50px" className="avatar"></img>
            </div>
        </div>
    ) 
}
export default NavBar