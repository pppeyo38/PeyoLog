import { memo } from "react"
import styled from "styled-components"
import { PageTitle } from "../molecules/PageTitle"

import { SnapSection } from "../organisms/sections/SnapSection"

export const ScrollSnap = memo(() => {
  return (
    <SnapArticle>
      <SnapSection>
        <PageTitle />
      </SnapSection>
      <SnapSection>
        <PageTitle />
      </SnapSection>
    </SnapArticle>
  )
})

const SnapArticle = styled.article`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;