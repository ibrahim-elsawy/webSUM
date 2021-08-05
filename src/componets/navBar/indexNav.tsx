import React from 'react'
import { Button, Container, Logo, Text, Wrapper } from './stylesNav';
import logo from "../../assets/p.svg";

export const NavBar: React.FC = () => {
    return (
        <Container>
            <Wrapper flexDirection="row" alignItems="center">
                <Logo src={logo}></Logo>
                <Text color="#ffffff" >Pegasus Summary</Text>
            </Wrapper>
            <div>
                <Button>Login</Button>
                <Button>Sign Up</Button>
            </div>
        </Container>
    )
}