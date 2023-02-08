import styled from "styled-components";
import { NavBar } from "../NavBar";

const Container = styled.div`
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const NavcontentContainer = styled.div``;
const Navwrapper = styled.div`
  height: 42vh;
  width: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Heading = styled.h1`
  font-style: normal;
  font-size: 3.75rem;
  line-height: 69px;
`;

export const Banner = (props) => {
  const { title } = props;
  return (
    <>
      <Container imgUrl={props?.imgUrl}>
        <NavcontentContainer>
          <NavBar />
          <Navwrapper>
            <FlexContainer>
              <Heading>{title}</Heading>
            </FlexContainer>
          </Navwrapper>
        </NavcontentContainer>
      </Container>
    </>
  );
};
