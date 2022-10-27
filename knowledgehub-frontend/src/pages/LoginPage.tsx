import { UserContext } from "../userContext"
import { useContext,useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getUserFromChulaSSO } from "../api/Api";
import { UserProps } from "../interfaces/UserProps";

function LoginPage() {
    const [searchParams,setSearchParams] =  useSearchParams();
    const ticket = searchParams.get('ticket')||'';
    const user = useContext(UserContext);
    function processTicket(ticket:any){
        if (ticket === '') window.location.href = "/"
        else {
            window.location.href = '/home'
            getUserFromChulaSSO(ticket).then((data)=>{
                console.log(data);
                console.log(ticket);
                console.log('http://localhost:8080'.concat("/serviceValidation".toString()))
                // const NewUser:UserProps = {
                //     id: Number(data.uid),
                //     rank: 0,
                //     name: data.firstname +" "+ data.lastname,
                //     profileUrl: ""
                // }
                // user.setData?.(NewUser);
            })
        }

    }
    
    return (
        <>
            {processTicket(ticket)}
        </>
    )
}
export default LoginPage