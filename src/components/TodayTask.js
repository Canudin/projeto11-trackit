import styled from "styled-components";

export default function TodayTask(props) {
  const { id, name, done, currentSequence, highestSequence } = props.task;
  return (
    <Container>
      <Description>
        <TaskTitle>{name}</TaskTitle>
        <TaskSequence>Sequência atual: {currentSequence} dias</TaskSequence>
        <TaskRecord>Seu recorde: {highestSequence} dias</TaskRecord>
      </Description>
      <CheckBox background={done} />
    </Container>
  );
}

const Container = styled.div`
  width: 340px;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 10px;
  padding: 13px;
`;
const Description = styled.div``;
const TaskTitle = styled.p`
  font-size: 20px;
  color: #666666;
  margin-bottom: 5px;
`;
const TaskSequence = styled.p`
  font-size: 13px;
  color: #666666;
`;
const TaskRecord = styled.p`
  font-size: 13px;
  color: #666666;
`;
const CheckBox = styled.div`
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  background-color: ${(props) => (props.background ? "#8FC549" : "#EBEBEB")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;
