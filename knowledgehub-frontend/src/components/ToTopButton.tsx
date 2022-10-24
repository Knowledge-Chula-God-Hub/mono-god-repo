import React, {useState} from 'react';
import styled from 'styled-components';
import dropdown from '../assets/Dropdown.svg'
const ScrollButton = () =>{

const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 96%;
   bottom: 50px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: black;
   
`


const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<img src={dropdown} onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none',transform:"rotate(180deg)"}} />
	</Button>
);
}

export default ScrollButton;
