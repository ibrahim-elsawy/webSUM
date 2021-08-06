import React from 'react'
import { Button, Container, Logo, Text, Wrapper } from './stylesNav';
import logo from "../../assets/p.svg";
import { useHistory } from 'react-router';


export const NavBar: React.FC = () => {
    let history = useHistory();
    const onLogin = () => history.push("/login");
    const onSignup = () => history.push("/register");

    return (
        <Container>
            <Wrapper flexDirection="row" alignItems="center">
                <Logo src={logo}></Logo>
                <Text color="#ffffff" >Pegasus Summary</Text>
            </Wrapper>
            <div>
                <Button onClick={}>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </Container>
    )
}