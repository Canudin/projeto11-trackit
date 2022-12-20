import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import TodayHabits from "./TodayHabits";

export default function TodayPage() {
  return (
    <Container>
      <Header />
      <TodayHabits />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - 70px - 70px);
  display: flex;
  flex-direction: column;
  margin: 70px auto 70px auto;
  background-color: #f2f2f2;
`;
