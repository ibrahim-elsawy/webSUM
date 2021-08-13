/* eslint-disable react/style-prop-object */
import React from 'react'
import { Button, Container, Logo, Text, Wrapper } from './stylesNav';
import logo from "../../assets/p.svg";
import { Link } from 'react-router-dom';
import { getJwt, logout } from '../../services/authService';

interface Props {
    History: any
}
export const NavBar: React.FC<Props> = ({History}) => {
    const onLogin = () => History.push("/login");
    const onSignup = () => History.push("/register");
    // const onMain = () => History.push("/main");

    return (
        <Container>
            <Link to="/main" style={{ textDecoration:"none" }}>
                <Wrapper flexDirection="row" alignItems="center">
                    <Logo src={logo}></Logo>
                    <Text color="#000000" weight={900} style="italic" fontSize="1.1em">Pegasus Summary</Text>
                </Wrapper>
            </Link>
            {getJwt().jwt == null &&(<div>
                <Button onClick={onLogin}>Login</Button>
                <Button onClick={onSignup}>Sign Up</Button>
            </div>)}
            {getJwt().jwt != null && (
                <div>
                    <Button onClick={logout}>Logout</Button>
                </div>
            )}
        </Container>
    )
}