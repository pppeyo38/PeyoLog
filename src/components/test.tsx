import styled from "styled-components"
import { ColorTheme } from "../style/ColorTheme"

import { JaText } from "../components/atoms/JaText"
import { BgImage } from "./templates/BgImage";

const { palette } = ColorTheme;

export const Test = () => {
	return (
		<>
			<JaText fSize='18px' fWeight='400' fColor={palette.gray}>
				日本語
			</JaText>
			<BgImage />
		</>
	)
}

const Text = styled.p`
	font-size: 24px;
	color: ${palette.purple};
`