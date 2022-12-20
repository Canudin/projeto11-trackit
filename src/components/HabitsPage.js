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
  width: 100%;
  min-height: calc(100vh - 70px - 70px);
  display: flex;
  flex-direction: column;
  margin: 70px 0;
  background-color: #f2f2f2;
`;
