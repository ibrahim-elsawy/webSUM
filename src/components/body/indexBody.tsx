import React, {useState} from "react";
import { toast } from "react-toastify";
import { fileProcess, stringProcess } from "../../services/processService";
import { Background, Button, Input, Text, TextInput, Upload, Wrapper } from "./stylesBody";


export const Main: React.FC = () => {
	const [textString, updateText] = useState();
	const [textFile, updateFile] = useState<any>();
	const [result, updateResult] = useState<any>();

	const textChange = (c: any) => {
		updateText(c.target.value);
	};
	const fileChange = (c: any) => {
		updateFile(c.target.files[0]);
	};
	const onSumbit = async() => {
		if (textFile != null)
		{
			//call server
			const formData = new FormData();
			formData.append("file", textFile);
			const res = await fileProcess(formData);
			updateFile(res);
			console.log(res);
		}
		else if (textString != null)
		{
			//call server 
			const textData = new FormData();
			textData.append("text", textString?textString:textFile);
			const res = await stringProcess(textData);
			updateResult(res);
			console.log(res);
		}
		else
		{
			console.log("empty");
			toast.error('Empty Input !', {
				position: "top-center", autoClose: 5000, hideProgressBar: false,
				closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
		}
		
	};
	return (
		<Background>
			<Text color="#e2a779" fontSize="2em">Pegasus Summarizer</Text>
			<br></br>
			<Text color="#a48167">is the fastest online Summarizer, it summarize all types of documents and paragraphs giving the best and accurate results</Text>
			<Upload>
				<Wrapper>
					<TextInput onChange = {textChange} placeholder='Enter the text '></TextInput>
					<Input onChange={fileChange}></Input>
				</Wrapper>
			</Upload>
			<Wrapper>
				<Button onClick={onSumbit}>Summarize </Button>
				{result && (<TextInput border="none" readOnly="none"></TextInput>)}
			</Wrapper>
		</Background>
	)
}