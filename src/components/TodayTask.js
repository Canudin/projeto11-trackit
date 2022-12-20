import axios from "axios";
import styled from "styled-components";

export default function TodayTask(props) {
  const { id, name, done, currentSequence, highestSequence } = props.task;
  const { concludedNumber, setConcludedNumber } = props;
  const localUserData = JSON.parse(localStorage.getItem("userdata"));
  const token = localUserData.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleTaskComplete(done) {
    if (!done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        config
      );
      promise.then((answer) => {
        let newConcludedNumber = concludedNumber + 1;
        setConcludedNumber(newConcludedNumber);
      });
      promise.catch((answer) => console.log(answer.response.data));
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        {},
        config
      );
      promise.then((answer) => {
        let newConcludedNumber = concludedNumber - 1;
        setConcludedNumber(newConcludedNumber);
      });
      promise.catch((answer) => console.log(answer.response.data));
    }
  }

  return (
    <Container>
      <Description>
        <TaskTitle>{name}</TaskTitle>
        <TaskSequence>Sequência atual: {currentSequence} dias</TaskSequence>
        <TaskRecord>Seu recorde: {highestSequence} dias</TaskRecord>
      </Description>
      <CheckBox background={done} onClick={() => handleTaskComplete(done)}>
        <ion-icon name="checkmark-outline" />
      </CheckBox>
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
  display: flex;
  align-items: center;
  justify-content: center;
  ion-icon{
    font-size: 60px;
    color: #ffffff;
  }
`;
