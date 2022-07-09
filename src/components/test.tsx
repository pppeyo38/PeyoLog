import styled from "styled-components"
import { ColorTheme } from "../style/ColorTheme"

import { BgImage } from "./templates/BgImage";
import { PageTitle } from "./molecules/PageTitle";

const { palette } = ColorTheme;

export const Test = () => {
	return (
		<>
			<PageTitle />
			<BgImage />
		</>
	)
}

const Text = styled.p`
	font-size: 24px;
	color: ${palette.purple};
`