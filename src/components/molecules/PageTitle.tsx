import { memo } from "react"
import styled from "styled-components"

import { EnText } from "../atoms/EnText"
import { ColorTheme } from "../../style/ColorTheme"
import { JaText } from "../atoms/JaText"

export const PageTitle = memo(() => {
  return (
    <>
      <PageTitleWrap>
        <EnText fSize='72px' fWeight='500' fStyle='italic'  fColor={ColorTheme.palette.purple}>
          Peyo Log!
        </EnText>
        <JaText fSize='18px' fWeight='400' fColor={ColorTheme.palette.gray}>
          Isono Tamaki’s portfolio site
        </JaText>
      </PageTitleWrap>
    </>
  )
})

const PageTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;