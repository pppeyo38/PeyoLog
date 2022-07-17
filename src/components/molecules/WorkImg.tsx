import { memo } from "react"
import styled from "styled-components"

type ImgProps = {
  imgName: string
}

export const WorkImg = memo((props: ImgProps) => {
  const { imgName } = props;

  return (
    <>
      <ImgWrap>
        <img src={`./src/images/${imgName}`} />
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