import { memo, ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode;
}

export const SnapSection = memo((props: Props) => {
  const { children } = props

  return(
    <SnapSections>
      {children}
    </SnapSections>
  )
})

const SnapSections = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;
