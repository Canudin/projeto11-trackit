import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";

export default function Header() {
  const { userData } = useContext(AuthContext);
  const localUserData = JSON.parse(localStorage.getItem("userdata"))
  const userImage = localUserData.image;
  return (
    <Container>
      <Content>
        <span>TrackIt</span>
        <img src={userImage} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  width: 375px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  span {
    font-family: "Playball", cursive;
    font-size: 40px;
    color: #ffffff;
  }
  img {
    height: 51px;
    width: 51px;
    border-radius: 98.5px;
  }
`;
