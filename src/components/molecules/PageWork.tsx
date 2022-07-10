import { memo } from "react"
import styled from "styled-components"

export const PageWork = memo(() => {
  return (
    <>
      <ImgWrap>
        <img src="./src/images/work_vanity.png" />
      </ImgWrap>
    </>
  )
})

const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(237, 237, 239, 0.7);
`;