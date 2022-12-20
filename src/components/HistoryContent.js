import styled from "styled-components";

export default function HistoryContent() {
  return (
    <Container>
      <Placeholder>Em breve você poderá ver o histórico dos seus hábitos aqui!</Placeholder>
    </Container>
  );
}

const Container = styled.div`
`;
const Placeholder = styled.p`
  margin: 20px 0;
  font-size: 18px;
  color: #666666;
  display: inline-block;
`;
