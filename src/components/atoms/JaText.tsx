import { ReactNode, FC } from "react"
import styled from "styled-components"

import { TextStyle } from '../../types/style'

type Props = {
	children: ReactNode;
	fSize: string;
	fWeight: string;
	fColor: string;
}

export const JaText: FC<Props> = (props) => {
	const { children, fSize, fWeight, fColor } = props

	return (
		<EnglishText fSize={fSize} fWeight={fWeight} fColor={fColor}>
			{children}
		</EnglishText>
	)
}

const EnglishText = styled.p<TextStyle>`
	font-family: 'Zen Kaku Gothic New', sans-serif;
	font-size: ${({fSize}) => fSize};
	font-weight: ${({ fWeight }) => fWeight};
	color: ${({fColor}) => fColor};
`;