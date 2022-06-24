import styled from "styled-components";
import ImageLeft from "./ImageLeft";
import ImageRight from "./ImageRight";

const Main = () => {
  <OutsideWrapper>
    <ImageLeft />
    <ImageRight />
  </OutsideWrapper>;
};

export default Main;

const OutsideWrapper = styled.main`
  @media (min-width: 1200px) {
    width: 100px;
    height: auto;
    display: grid;
    grid-template-rows: 1fr, 1fr;
    border: 1px solid red;
  }
`;
