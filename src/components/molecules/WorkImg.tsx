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
        <Img src={`./src/images/${imgName}`} />
      </ImgWrap>
    </>
  )
})

const ImgWrap = styled.div`
  width: 100%;
`;

const Img = styled.img`
  display: block;
  width: 75%;
  margin: 0 auto;
`;