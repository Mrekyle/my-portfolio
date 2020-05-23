import React from 'react';
import Fade from 'react-reveal/Fade';
import './Header.css'

const Header = () => {
	return (
		<div>
			<div className='ttu pv7 pl7 mv5'>
				<Fade left>
					<h1 className='w-90 b center'>My name is <span style={{color: 'red'}} className='b lgc'>Kyle Chart</span>,</h1>
					<h1 className='w-90 b center'>And I am a Fullstack Developer</h1>
					<button className='Center ml7 margl'>Find Out More!</button>
				</Fade>
			</div>
		</div>
	);
}

export default Header;