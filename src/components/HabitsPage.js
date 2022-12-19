import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import CreateHabitContainer from "./CreateHabitContainer";
import MyHabits from "./MyHabits";

export default function HabitsPage() {
  return (
    <Container>
      <Header />
      <CreateHabitContainer />
      <MyHabits />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 70px auto 95px auto;
  background-color: #F2F2F2;
`;
