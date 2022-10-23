import { UserProps } from "../interfaces/UserProps";
import testimg from './logo192.png'
function UserPost(props:UserProps){
    const createDate = new Date();
    return(
        <div className="UserPost">
            <div className="lhs">
                <img src={testimg} alt="" />
                <div className="nametime">
                    <p>{props.name}</p>
                    <p>{createDate.getDate().toString()}/{createDate.getMonth().toString()}/{createDate.getFullYear().toString()}</p>
                </div>
            </div>
            <div className="rhs">

            </div>
        </div>
    )
}
export default UserPost