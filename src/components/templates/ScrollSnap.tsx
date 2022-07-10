import { memo } from "react"
import styled from "styled-components"

import { SnapSection } from "../organisms/sections/SnapSection"
import { PageTitle } from "../molecules/PageTitle"
import { PageWork } from "../molecules/PageWork"

export const ScrollSnap = memo(() => {
  return (
    <SnapArticle>
      <SnapSection>
        <PageTitle />
      </SnapSection>
      <SnapSection>
        <PageWork />
      </SnapSection>
    </SnapArticle>
  )
})

const SnapArticle = styled.article`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;