import searchLogo from "../assets/smallLogo/Search.svg"
import sortedLogo from "../assets/smallLogo/sort.svg"


export function SearchBar(props:any){
    function enterHandler(){
        console.log("enter")
        return null;
    }
    return(
        <div className="SerchBar" style={{
                gap:"8px",
                display:"flex",
                alignItems:"center",
                margin:"auto",
                padding:"40px 0px 24px 0px"
            }}>
            <img src={searchLogo} style = {{
                marginLeft:"15px",
                userSelect: "none",
                position:"absolute",
                height:"325x",
                width:"25px"
                }} alt="" />
            <input id="searchInputBox" type="text" onKeyDown={enterHandler} placeholder="211020121" style={{
                paddingLeft:"50px",
                borderRadius: "32px",
                fontSize:"20px",
                width:"600px",
                height:"40px",
                border:"1px solid black",
                backgroundColor: "#d9d9d9"
                }}/>
            <img src={sortedLogo} style = {{
                width:"30px",
                height:"30px"
            }} alt="" onClick={()=>{
                props.openFilter(true);
            }}/>
        </div>
    )
}