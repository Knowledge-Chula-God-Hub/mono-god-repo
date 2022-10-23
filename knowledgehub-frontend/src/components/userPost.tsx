import { UserProps } from "../interfaces/UserProps";
import testimg from '../assets/logo192.png'
import dislike from "../assets/smallLogo/dislike.svg"
import like from "../assets/smallLogo/like.svg"
import share from "../assets/smallLogo/share.svg"

function UserPost(props:UserProps){
    const createDate = new Date();
    const logoStyle = {
        hight:"30px",
        width:"30px"
    }

    return(
        <div className="UserPost" style = {{display : "flex",justifyContent:"space-between",overflowWrap: "break-word"}}>
            <div className="lhs" style={{display: "flex"}}>
                <img src={testimg} alt="" style={{height: "70px",width:'70px'}}/>
                <div className="nametime" style = {{display : "block",margin:"auto 10px",gap:"100px"}}>
                    <p style = {{margin:"10px 0px",fontSize:"32px"}}>{props.name}</p>
                    <p style = {{margin:"10px 0px"}}>{createDate.getDate().toString()}/{createDate.getMonth().toString()}/{createDate.getFullYear().toString()}</p>
                </div>
            </div>
            <div className="rhs" style = {{display : "flex",justifyContent:"space-between",gap:"20px"}}>
                <img src={like} style={logoStyle} alt="" />
                <img src={dislike} style={logoStyle} alt="" />
                <img src={share} style={logoStyle} alt="" />
            </div>
        </div>
    )
}
export default UserPost