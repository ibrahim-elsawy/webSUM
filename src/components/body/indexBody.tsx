import React from "react";
import { Background, Button, Input, Text, TextInput, Upload, Wrapper } from "./stylesBody";


export const Main: React.FC = () => {
	return (
		<Background>
			<Text color="#e2a779" fontSize="2em">Pegasus Summarizer</Text>
			<br></br>
			<Text color="#a48167">is the fastest online Summarizer, it summarize all types of documents and paragraphs giving the best and accurate results</Text>
			<Upload>
				<Wrapper>
					<TextInput></TextInput>
					<Input></Input>
				</Wrapper>
			</Upload>
			<Button>Summarize</Button>
		</Background>
	)
}