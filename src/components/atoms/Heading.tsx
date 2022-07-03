import { ReactNode, FC } from "react"
import styled from "styled-components"
import { ColorTheme } from "../../style/ColorTheme"

type Props = {
	children: ReactNode;
	fontSize: string;
	fontWeight: string;
}

type StyleProps = {
	fontSize: string;
	fontWeight: string;
}

const { palette } = ColorTheme

export const Heading: FC<Props> = (props) => {
	const { children, fontSize, fontWeight } = props;

	return (
		<HeadingText fontSize={fontSize} fontWeight={fontWeight}>
			{children}
		</HeadingText>
	)
}

const HeadingText = styled.p<StyleProps>`
	font-size: ${({fontSize}) => fontSize};
	color: ${palette.purple};
	font-family: Be Vietnam Pro;
	font-weight: ${({ fontWeight }) => fontWeight};
	font-style: Italic;
`