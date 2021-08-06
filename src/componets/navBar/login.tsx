import React from 'react';
import { Button, InputSign, SignForm, SignWrapper } from "./stylesNav";


const onLogin= () => { alert("loggin") };

export const Login: React.FC = () => {
	return (
		<SignWrapper>
			<SignForm>
				<label color="#fffff" >Email</label>
				<InputSign type="email" ></InputSign>
				<label color="#fffff" >Password</label>
				<InputSign type="password" ></InputSign>
				<Button onClick={onLogin}>Login</Button>
			</SignForm>
		</SignWrapper>
	);
}
