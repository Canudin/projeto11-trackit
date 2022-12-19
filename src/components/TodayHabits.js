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
  const [concludedTasks, setConcludedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [percentageTasks, setPercentageTasks] = useState(0);
  console.log(config);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((answer) => setTodayTasks(answer.data));
    handleTaskCounter();
    return;
  }, []);

  function handleTaskCounter() {
    let notEmpty = false;
    console.log(todayTasks);
    todayTasks.map((task) => {
      const newTotalTasks = totalTasks + 1;
      setTotalTasks(newTotalTasks);
      if (task.done) {
        return (notEmpty = true);
      } else {
        setConcludedTasks(concludedTasks + 1);
      }
    });
    if (notEmpty) {
      return "Nenhum hábito concluído ainda";
    } else {
      const percentageTasks = ((concludedTasks + 1) % (totalTasks + 1)) * 100;
      return `${percentageTasks}% dos hábitos concluídos`;
    }
  }

  return (
    <Container>
      <Title>
        <Day>
          {weekDayName}, {dateNumber}/{monthNumber}
        </Day>
        <ConcludedPercentage>{}</ConcludedPercentage>
      </Title>
      <TasksContainer>
        {todayTasks.map((task) => {
          return <TodayTask task={task}></TodayTask>;
        })}
      </TasksContainer>
    </Container>
  );
}

const Container = styled.div`
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
  color: #bababa;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
