import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import styled from "styled-components";

export default function MyHabits() {
  const localUserData = JSON.parse(localStorage.getItem("userdata"));
  const token = localUserData.token;
  const [habits, setHabits] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    handleUserHabits();
  }, []);

  function handleUserHabits() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((answer) => setHabits(answer.data));
    promise.catch((answer) => console.log(answer.response));
  }

  function handleDeletion(id) {
    if (window.confirm("Quer mesmo apagar o hábito?")) {
      const config = { headers: { Authorization: `Bearer ${localUserData.token}` } };
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        config
      );
      promise.then((answer) => {
        handleUserHabits();
        console.log(answer);
      });
    } else {
      return;
    }
  }

  function handleCheckHabit(){
    
  }

  function handleContent(habits) {
    if (habits.length !== 0) {
      return habits.map((habit) => {
        const days = [
          { shortName: "D", isHabit: false },
          { shortName: "S", isHabit: false },
          { shortName: "T", isHabit: false },
          { shortName: "Q", isHabit: false },
          { shortName: "Q", isHabit: false },
          { shortName: "S", isHabit: false },
          { shortName: "S", isHabit: false },
        ];
        console.log(habit);
        habit.days.map((dayIndex) => (days[Number(dayIndex)].isHabit = true));
        return (
          <HabitContainer>
            <HabitTitle>
              <p>{habit.name}</p>
              <HabitDelete onClick={() => handleDeletion(habit.id)}>
                <ion-icon name="trash-outline" />
              </HabitDelete>
            </HabitTitle>

            <HabitDays>
              {days.map((day) => {
                return (
                  <HabitDay color={day.isHabit} background={day.isHabit} onClick={() => handleCheckHabit()}>
                    {day.shortName}
                  </HabitDay>
                );
              })}
            </HabitDays>
          </HabitContainer>
        );
      });
    } else {
      return (
        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </span>
      );
    }
  }
  return <Container>{handleContent(habits)}</Container>;
}

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  span {
    text-align: center;
  }
`;

const HabitContainer = styled.div`
  width: 340px;
  height: 90px;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const HabitTitle = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HabitDays = styled.div``;

const HabitDay = styled.button`
  width: 30px;
  height: 30px;
  margin-top: 8px;
  margin-right: 2px;
  color: ${(props) => (props.color ? "#FFFFFF" : "#CFCFCF")};
  font-size: 20px;
  background: ${(props) => (props.color ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  border-color: #d4d4d4;
`;

const HabitDelete = styled.button`
  border: none;
  background-color: #ffffff;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;
