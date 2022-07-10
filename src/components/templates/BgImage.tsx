import { FC, memo, ReactNode } from "react"
import styled from "styled-components"

type Props = {
  children: ReactNode;
}

export const BgImage :FC<Props> = memo((props) => {
  const { children } = props

  return (
    <FullDisplay>
      {children}
    </FullDisplay>
  )
})

const FullDisplay = styled.div`
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("./src/images/MainVisual.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
`;