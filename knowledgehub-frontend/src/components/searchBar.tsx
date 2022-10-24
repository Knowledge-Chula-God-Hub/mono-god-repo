import searchLogo from "../assets/smallLogo/Search.svg"
import sortedLogo from "../assets/smallLogo/sort.svg"


export function SearchBar(){
    function enterHandler(){
        console.log("enter")
        return null;
    }
    return(
        <div className="SerchBar" style={{gap:"2px",display:"flex",alignItems:"center",margin:"auto",padding:"40px 0px 24px 0px"}}>
            <img src={searchLogo} style = {{marginLeft:"15px",userSelect: "none",position:"absolute",height:"30px",width:"30px"}} alt="" />
            <input type="text" onKeyDown={enterHandler} placeholder="211020121" style={{paddingLeft:"50px",borderRadius: "32px",fontSize:"20px",width:"600px",height:"40px"}}/>
            <img src={sortedLogo} alt="" />
        </div>
    )
}