import '../styles/LandingPage.css'
import dropdown from "../assets/Dropdown.svg"

function LandingPage() {
    return (
        <><div style={{
            display: "flex",
            height: "80px",
            justifyContent: "center",
            borderBottom: "1px solid black",
            backgroundColor: "#F8C4B4",
            margin:"0px"
        }}>
            <h1 style={{
                fontFamily: "Poppins",
                fontSize: "32px",
                fontWeight: "normal"
            }}>Bun Chu - la</h1>
        </div>
        <div style={{
            margin:"0px",
            height:"calc(100vh - 130px)",
            backgroundColor:"#F8C4B4",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                justifyItems:"left",
                flexDirection:"column",
                marginLeft:"64px",
            }}>
                <h1 style={{
                    color:"black",
                    fontFamily:"Chonburi",
                    fontSize:"128px",
                    fontWeight:"normal",
                    margin:"0px",
                    textAlign:"start"
                }}>Stay learning</h1>

                <h1 style={{
                    color:"black",
                    fontFamily:"Maitree",
                    fontSize:"40px",
                    fontWeight:"normal",
                    margin:"0px",
                    textAlign:"start",
                    width:"850px"
                }}>Discover note, exam, and get some advice 
                from CU students on any topic</h1>

                <button className="button">start learning</button>
            </div>
            
        </div>
        <div style={{
            margin:"0px",
            height:"calc(50px)",
            backgroundColor:"#F8C4B4",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                justifyItems:"left",
                flexDirection:"row",
                marginLeft:"64px",
                gap:"16px"
            }} onClick={()=>{window.scrollTo(0,document.body.scrollHeight)}}>
                <img src={dropdown} alt="dropdown" width={30}></img>
                <h1 style={{
                    color:"black",
                    fontFamily:"Chonburi",
                    fontSize:"40px",
                    fontWeight:"normal",
                    margin:"0px",
                    textAlign:"start"
                }}>midterm countdown</h1>

            </div>
            
        </div>
        <div style={{
            margin:"0px",
            height:"calc(100vh)",
            backgroundColor:"#F8C4B4",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                justifyItems:"left",
                flexDirection:"column",
                marginLeft:"64px",
            }}>
                <h1 style={{
                    color:"black",
                    fontFamily:"Chonburi",
                    fontSize:"128px",
                    fontWeight:"normal",
                    margin:"0px",
                    textAlign:"start"
                }}>Timer</h1>

                <h1 style={{
                    color:"black",
                    fontFamily:"Maitree",
                    fontSize:"40px",
                    fontWeight:"normal",
                    margin:"0px",
                    textAlign:"start",
                    width:"850px"
                }}>bra bra bra</h1>

                <button className="button">start learning</button>
            </div>
            
        </div>
        </>
    )
}
export default LandingPage