import { FC, memo } from "react"
import styled from "styled-components"

import { EnText } from "../atoms/EnText"
import { ColorTheme } from "../../style/ColorTheme"

type WorkProps = {
  category: string;
  title: string;
  period: string;
  role: string;
}

export const WorkTitle :FC<WorkProps> = memo((props) => {
  const { category, title, period, role } = props

  return (
    <>
      <WorkTitleWrap>
        <WorkTitleContent>
          <EnText fSize='18px' fWeight='300' fColor={ColorTheme.palette.purple}>
            {category}
          </EnText>
          <EnText fSize='62px' fWeight='400' fStyle='Italic' fColor={ColorTheme.palette.purple}>
            {title}
          </EnText>
        </WorkTitleContent>
        <WorkTitleDetail>
          <EnText fSize='18px' fWeight='300' fColor={ColorTheme.palette.purple}>
            {period}
          </EnText>
          <EnText fSize='18px' fWeight='300' fColor={ColorTheme.palette.purple}>
            {role}
          </EnText>
        </WorkTitleDetail>
      </WorkTitleWrap>
    </>
  )
})

const WorkTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const WorkTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const WorkTitleDetail = styled.div`
  display: flex;
  flex-direction: column;
`;