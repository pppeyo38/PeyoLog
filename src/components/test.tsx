import styled from "styled-components"
import { ColorTheme } from "../style/ColorTheme"

import { EnText } from "./atoms/EnText";
const { palette } = ColorTheme;

export const Test = () => {
	return (
		<>
			<Text>
				べ〜
			</Text>
			<EnText fSize="25px" fWeight='300' fColor={palette.gray} >
				text ABC Umeme
			</EnText>
		</>
	)
}

const Text = styled.p`
	font-size: 24px;
	color: ${palette.purple};
`