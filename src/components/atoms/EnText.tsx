import { ReactNode } from "react"
import styled from "styled-components"

import { TextStyle } from '../../types/style'

type Props = {
	children: ReactNode;
	fSize: string;
	fWeight: string;
	fColor?: string;
	fStyle?: string;
}

export const EnText = (props: Props) => {
	const { children, fSize, fWeight, fColor, fStyle } = props

	return (
		<EnglishText fSize={fSize} fWeight={fWeight} fStyle={fStyle} fColor={fColor}>
			{children}
		</EnglishText>
	)
}

const EnglishText = styled.p<TextStyle>`
	font-family: 'Be Vietnam Pro';
	font-size: ${({fSize}) => fSize};
	font-weight: ${({ fWeight }) => fWeight};
	font-style: ${({ fStyle }) => fStyle};
	color: ${({fColor}) => fColor};
`;