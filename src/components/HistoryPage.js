import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function HistoryPage() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  min-height: calc(100vh - 70px - 70px);
  display: flex;
  flex-direction: column;
  margin: 70px auto 70px auto;
  background-color: #f2f2f2;
`;
