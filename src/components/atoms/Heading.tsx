import { ReactNode } from "react"
import styled from "styled-components"
import { ColorTheme } from "../../style/ColorTheme"

import { TextStyle } from '../../types/style'

type Props = {
	children: ReactNode;
	fSize: string;
	fWeight: string;
}

const { palette } = ColorTheme

export const Heading = (props: Props) => {
	const { children, fSize, fWeight } = props;

	return (
		<HeadingText fSize={fSize} fWeight={fWeight}>
			{children}
		</HeadingText>
	)
}

const HeadingText = styled.p<TextStyle>`
	font-size: ${({fSize}) => fSize};
	color: ${palette.purple};
	font-family: Be Vietnam Pro;
	font-weight: ${({ fWeight }) => fWeight};
	font-style: Italic;
`