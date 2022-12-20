import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import TodayTask from "./TodayTask";

export default function TodayHabits() {
  const localUserData = JSON.parse(localStorage.getItem("userdata"));
  const token = localUserData.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [todayTasks, setTodayTasks] = useState([]);
  const weekDayNames = [
    { shortDay: "D", longDay: "Domingo" },
    { shortDay: "S", longDay: "Segunda" },
    { shortDay: "T", longDay: "Terça" },
    { shortDay: "Q", longDay: "Quarta" },
    { shortDay: "Q", longDay: "Quinta" },
    { shortDay: "S", longDay: "Sexta" },
    { shortDay: "S", longDay: "Sábado" },
  ];
  const weekDayName = weekDayNames[new Date().getDay()].longDay;
  const dateNumber = new Date().getDate();
  const monthNumber = new Date().getMonth() + 1;
  const [percentagePhrase, setPercentagePhrase] = useState("Nenhum hábito concluído ainda");
  const [concludedNumber, setConcludedNumber] = useState(0);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((answer) => {
      let newConcluded = 0;
      let percentage = 0;
      setTodayTasks(answer.data);
      answer.data.map((n) => {
        if (n.done) {
          newConcluded++;
          percentage = ((newConcluded / answer.data.length) * 100).toFixed(0);
          setPercentagePhrase(`${percentage.toString()}% dos hábitos concluídos`);
        }
      });
    });
    return;
  }, []);

  return (
    <Container>
      <Title>
        <Day>
          {weekDayName}, {dateNumber}/{monthNumber}
        </Day>
        <ConcludedPercentage color={concludedNumber}>{percentagePhrase}</ConcludedPercentage>
      </Title>
      <TasksContainer>
        {todayTasks.map((task) => {
          return (
            <TodayTask
              task={task}
              concludedNumber={concludedNumber}
              setConcludedNumber={setConcludedNumber}
            ></TodayTask>
          );
        })}
      </TasksContainer>
    </Container>
  );
}

const Container = styled.div`
box-sizing: border-box;
  min-height: calc(100vh - 70px - 70px);
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Day = styled.p`
  font-size: 23px;
  color: #126ba5;
`;
const ConcludedPercentage = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: ${(props) => (props.color !== 0 ? "#8FC549" : "#BABABA")};
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
