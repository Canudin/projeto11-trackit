import styled from "styled-components";

export default function CreateHabit() {
  return (
    <Container>
      <span>Meus Hábitos</span>
      <button>+</button>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  box-sizing: border-box;
  margin: 70px auto 95px auto;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  span {
    color: #126ba5;
    font-size: 23px;
  }
  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: none;
    font-size: 27px;
    color: #ffffff;
  }
`;
