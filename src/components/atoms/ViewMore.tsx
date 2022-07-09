import styled from "styled-components"
import { ColorTheme } from "../../style/ColorTheme"

const { palette } = ColorTheme

export const ViewMore = () => {
	return (
		<ViewMoreButton>
			VIEW MORE
			<img src="./src/images/icon/ViewMoreIcon.svg"/>
		</ViewMoreButton>
	)
}

const ViewMoreButton = styled.a`
	display: flex;
	align-items: center;
	font-size: 22px;
	color: ${palette.gray};
	font-family: Be Vietnam Pro;
	font-weight: 100;
	img {
		margin-left: 16px;
	}
`
