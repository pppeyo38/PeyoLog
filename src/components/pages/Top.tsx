import { memo } from "react"
import styled from "styled-components"

import { PageTitle } from "../molecules/PageTitle"
import { BgImage } from "../templates/BgImage"

export const Top = memo(() => {
  return (
    <>
      <BgImage />
      <ContentWrap>
        <PageTitle />
      </ContentWrap>
    </>
  )
})

const ContentWrap = styled.section`
  position: absolute;
`;