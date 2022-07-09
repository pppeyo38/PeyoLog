import styled from "styled-components"
import { ColorTheme } from "../style/ColorTheme"

import { JaText } from "../components/atoms/JaText"

const { palette } = ColorTheme;

export const Test = () => {
	return (
		<>
			<Text>
				べ〜
			</Text>
			<JaText fSize='18px' fWeight='400' fColor={palette.gray}>
				日本語
			</JaText>
		</>
	)
}

const Text = styled.p`
	font-size: 24px;
	color: ${palette.purple};
`