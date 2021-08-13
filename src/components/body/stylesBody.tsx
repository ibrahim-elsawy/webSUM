import styled from "styled-components";
import { PageText as BodyText} from "../../styles/pageText";
import { PageItemWrapper as BodyWrapper} from "../../styles/itemWrapper";
//props for textarea 
interface Props {
	placeholder: string;
	border: string;
	resize: string;
}
export const Background = styled.div`
	height: 100vh;
	padding: .3em;
	background-color: #330033;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

`
export const Upload = styled.form`
	background-color:transparent;
`

export const Input = styled.input.attrs({
	type: 'file',
	accept:'.txt',
})`
	background-color: transparent;
	color:white;
	`
export const TextInput = styled.textarea.attrs(props => ({
	type: 'input',
	placeholder: props.placeholder ? props.placeholder : '',
	readOnly: props.readOnly ? props.readOnly : '',
	rows:10
}))`
	background-color: black;
	color: #d3c7c7;
	border: ${(props:Props) => props.border ? props.border : ''};
	resize: ${(props:Props) => props.resize ? props.resize : 'none'};
`
export const Wrapper = styled(BodyWrapper)`
	display:flex;
	width:50%;
	flex-direction: ${(props) => props.flexDirection ? props.flexDirection : "column"};
        align-items:  ${(props) => props.alignItems ? props.alignItems : "flex=start"};
	align-content: center;
        padding: .2em 0;
`

export const Text = styled(BodyText)`
	color: ${(props) => props.color ? props.color : "#000000f"};
	font-size: ${(props)=>props.fontSize ? props.fontSize : ".9em"};
`

export const Button = styled.button`
	margin: 1rem;
	width: 10em;
	padding: .3rem;
	background-color: #e2a779;
	border:0;
	border-radius: .3em;
	color: #0a0a0a;
	cursor:pointer;
	border: 1px solid #000000;
	&:hover{
		border:1px solid #ffffff;
		border-radius: .4em;
        }
	@media(max-width:850px){
		width:7em;
        }
`

