import React from 'react';
import { Button, InputSign, SignForm, SignWrapper } from "./stylesNav";


const siginSubmit = () => { alert("submitted") };

export const Signup: React.FC = () => {
	return (
		<SignWrapper>
			<SignForm>
				<label color="#fffff" >Email</label>
				<InputSign type="email" ></InputSign>
				<label color="#fffff" >Password</label>
				<InputSign type="password" ></InputSign>
				<Button onClick={siginSubmit}>Submit</Button>
			</SignForm>
		</SignWrapper>
	);
}