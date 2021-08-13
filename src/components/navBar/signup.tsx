import React, { useState } from 'react';
import { Register} from '../../services/authService';
import { alertToast, submitCheck } from '../../services/Validation/sumbitCheck';
import { Button, InputSign, SignForm, SignWrapper, BackWrapper } from "./stylesNav";


interface Props {
	History: any;
};

export const Signup: React.FC<Props> = ({History}) => {

	const [email, getEmail] = useState<string>();
	const [username, getUsername] = useState<string>();
	const [password, getPassword] = useState<string>();

	const siginSubmit= async() => {
		// submitCheck({ username, email, password }).catch((err:string) => {
		// 	alertToast(err);
		// });
		// (password?.length as number >= 8) ? console.log("valid password") : alertToast("Password must be more than 8 letters");
		// (username?.length as number >= 4) ? console.log("valid password") : alertToast("usernname must be more than 4 letters");
		try {
			const success = await Register({ username, email, password });
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
					<label color="#fffff" >Username</label>
					<InputSign type="text" onChange={(c)=>getUsername(c.target.value)}></InputSign>
					<label color="#fffff" >Email</label>
					<InputSign type="email" onChange={(c) => getEmail(c.target.value)}></InputSign>
					<label color="#fffff" >Password</label>
					<InputSign type="password" onChange={(c) => getPassword(c.target.value)}></InputSign>
				</SignForm>
				<Button onClick={siginSubmit}>Submit</Button>
			</SignWrapper>
		</BackWrapper>
	);
}