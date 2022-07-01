import styled from "styled-components"
import { ColorTheme } from "../style/ColorTheme"

const { palette } = ColorTheme;

export const Test = () => {
	return (
		<Text>
			べ〜
		</Text>
	)
}

const Text = styled.p({
	fontSize: '24px',
	color: `${palette.purple}`
})