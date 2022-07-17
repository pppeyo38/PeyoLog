import { memo } from "react"
import styled from "styled-components"

import { SnapSection } from "../organisms/sections/SnapSection"
import { PageTitle } from "../molecules/PageTitle"
import { WorkImg } from "../molecules/WorkImg"

export const ScrollSnap = memo(() => {
  return (
    <SnapArticle>
      <SnapSection>
        <PageTitle />
      </SnapSection>
      <SnapSection>
        <WorkImg imgName='work_vanity.jpg' />
      </SnapSection>
    </SnapArticle>
  )
})

const SnapArticle = styled.article`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;