import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Container>
      <ButtonsContainer>
        <Link to="/habitos">
          <Habits>Hábitos</Habits>
        </Link>
        <Link to="/hoje">
        <Today>Hoje</Today>
      </Link>
        <Link to="/historico">
          <History>Histórico</History>
        </Link>
      </ButtonsContainer>

    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  background-color: #ffffff;
`;

const ButtonsContainer = styled.div`
  width: 375px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  a {
    height: 100%;
    width: calc(375px / 2);
  }
`;

const Habits = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #52b6ff;
  background-color: #ffffff;
  font-size: 18px;
  padding-left: calc(100% / 6);
  :hover {
    cursor: pointer;
  }
`;
const Today = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  left: calc((100vw - 90px) / 2);
  bottom: 25px;
  /* bottom: calc(70px - (90px / 2)); */
  border-radius: 50px;
  color: #ffffff;
  background-color: #52b6ff;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`;
const History = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #52b6ff;
  background-color: #ffffff;
  font-size: 18px;
  padding-right: calc(100% / 6);
  :hover {
    cursor: pointer;
  }
`;
