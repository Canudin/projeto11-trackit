import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import HistoryContent from "./HistoryContent";

export default function HistoryPage() {
  return (
    <Container>
      <Header />
      <HistoryContent />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px - 70px);
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
`;
