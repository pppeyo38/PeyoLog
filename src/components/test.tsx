import styled from "styled-components"
import { ColorTheme } from "../style/ColorTheme"

const { palette } = ColorTheme;

export const Test = () => {
	return (
		<>
			<Text>
				べ〜
			</Text>
		</>
	)
}

const Text = styled.p`
	font-size: 24px;
	color: ${palette.purple};
`