import '../styles/LandingPage.css'
import dropdown from "../assets/Dropdown.svg"
import { useEffect, useState,useContext } from 'react'
import  { redirect } from 'react-router-dom'
import { UserContext } from '../userContext'
import { UserProps } from '../interfaces/UserProps'

function getDate(time : number) :string{

    time = Number(time);
    var d = Math.floor(time / (3600*24));
    var h = Math.floor(time % (3600*24) / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 60);
    
    var ret =  ("     " + d.toString()).slice(-3) + ' : ' + ("     " + h.toString()).slice(-2) + ' : ' + ("       " + m.toString()).slice(-2)+ ' : ' +("    " + s.toString()).slice(-2)
    return ret
}

function LandingPage() {
    const examdate = new Date('2022-11-28')
    const temp = Math.floor((examdate.getTime()-Date.now())/1000)
    const [time,setTime] = useState(temp)
    const handleToHome = ()=>window.location.href = 'http://localhost:8080//html/login.html?service=http://localhost:3000/login/';
    const handleScrollDown = ()=>{window.scrollTo(0,document.body.scrollHeight)};

    useEffect(() => {
        const interval = setInterval(() => {
            const temp = Math.floor((examdate.getTime()-Date.now())/1000)
            setTime(temp)
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <><div className='navbar'>
            <h1>Bun Chu - la</h1>
        </div>
        <div style={{
            margin:"0px",
            height:"calc(100vh - 50px)",
            backgroundColor:"#F8C4B4",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly"
        }}>
            <div className='sloganBox'>
                <h1>สังคมแห่งการเรียนรู้เพื่อจุฬา</h1>

                <h2>ตามดูโน๊ตสรุป ข้อสอบเก่า และรับคำแนะนำจากรุ่นพี่นิสิตจุฬาได้ทุกเมื่อในที่เดียว</h2>

                <button className="button" onClick={handleToHome}>start learning</button>
            </div>
            
        </div>
        <div className='scrollButtonContainer'>
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                justifyItems:"left",
                flexDirection:"row",
                marginLeft:"64px",
                gap:"16px"
            }} onClick={handleScrollDown}>
                <img className='scrollButton' src={dropdown} alt="dropdown" width={30}></img>
                <h1 style={{
                    color:"black",
                    fontFamily:"Chonburi",
                    fontSize:"40px",
                    fontWeight:"normal",
                    margin:"0px",
                    textAlign:"start"
                }}>final countdown</h1>

            </div>
        </div>
        <div className='timerContainer'>
            <div className='timerBox'>
                <h1><pre>{getDate(time)}</pre></h1>
                <pre>days               hour             minute         second</pre>

                <button className="bottom button" onClick={handleToHome}>start learning</button>
            </div>
            
        </div>
        </>
    )
}
export default LandingPage