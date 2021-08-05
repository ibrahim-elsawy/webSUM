import styled from "styled-components";
import { PageText as NavText } from "../../styles/pageText";
import { PageItemWrapper as NavItemWrapper } from "../../styles/itemWrapper";


export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	background-color: #799abf;
`

export const Text = styled(NavText)`
	color: ${(props) => props.color ? props.color : "#000000f"};
	font-size: ${(props)=>props.fontSize ? props.fontSize : ".9em"};
`

export const Wrapper = styled(NavItemWrapper)`
	display: flex;
	flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "column"};
        align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
        padding: .1em;
        cursor:pointer;
        border:1px solid #131A22;

        &:hover{
		border:1px solid #ffffff;
		border-radius: .2em;
        }
	@media(max-width:850px){
		display: none;
        }
`
export const Logo = styled.img`
    width: 3em;
    height: 3em;
    border:1px solid #799abf;
    padding: .2em .1em;
    margin-right: 1rem;
    /* cursor:pointer; */

    /* &:hover{
        border:1px solid #020202;
        border-radius: .2em;
    } */
`
export const Button = styled.button`
	margin: 1rem;
	padding: .2rem;
	background-color: #1271b5;
	border:0;
	border-radius: .3em;
	cursor:pointer;
	border: 1px solid #131A22;
	&:hover{
		border:1px solid #ffffff;
		border-radius: .4em;
        }
	@media(max-width:850px){
		display: none;
        }
`

