import styled from "styled-components"

export const BgImage = () => {
  return (
    <FullDisplay />
  )
}

const FullDisplay = styled.div`
  position: fixed;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("./src/images/MainVisual.jpg");
  background-size: cover;
  background-position: bottom;
`;