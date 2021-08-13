import React, { useState } from 'react';
import { login } from '../../services/authService';
import { alertToast } from '../../services/Validation/sumbitCheck';
import { BackWrapper, Button, InputSign, SignForm, SignWrapper } from "./stylesNav";

interface Props {
	History: any;
};

export const Login: React.FC<Props> = ({ History }) => {

	const [email, getEmail] = useState<string>();
	const [password, getPassword] = useState<string>();
	const onLogin = async() => {
		try {
			const success = await login({ email, password });
			// await test();
			success ? window.location.assign("/main") : console.log("error has been occured");
			
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				// alertToast("try again");
				alertToast(ex);
			}
		}
	};
	return (
		<BackWrapper>
			<SignWrapper>
				<SignForm>
					<label color="#fffff" >Email</label>
					<InputSign type="email" onChange={(c)=>getEmail(c.target.value)}></InputSign>
					<label color="#fffff" >Password</label>
					<InputSign type="password" onChange={(c)=>getPassword(c.target.value)}></InputSign>
				</SignForm>
				<Button onClick={onLogin}>Login</Button>
			</SignWrapper>
		</BackWrapper>
	);
}
