import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contactContainer margv'>
		<div className='center f4 pa2 white monserat tc'>
			<p>Need something built? Have a question? Want a chat?</p>
			<p>Email me and ill get back to you as soon as possible</p>
		</div>
			<div>
				<form className='tc form Center'>
					<input type='text' required='' placeholder='Name'/>
					<input type='email' required='' placeholder="Email"/>
					<input type='text' required='' placeholder='Message'/>
					<button className=''>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;