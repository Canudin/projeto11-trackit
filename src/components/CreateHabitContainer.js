import { useState } from "react";
import styled from "styled-components";

import DayButton from "./DayButton";

export default function CreateHabitContainer() {
  const [displayNewHabit, setDisplayNewHabit] = useState(false);
  const [weekSelected, setWeekSelected] = useState([
    { day: "D", selected: false, id: 1 },
    { day: "S", selected: false, id: 2 },
    { day: "T", selected: false, id: 3 },
    { day: "Q", selected: false, id: 4 },
    { day: "Q", selected: false, id: 5 },
    { day: "S", selected: false, id: 6 },
    { day: "S", selected: false, id: 7 },
  ]);
  const [newHabitName, setNewHabitName] = useState("");

  return (
    <Container>
      <TitleContainer>
        <span>Meus Hábitos</span>
        <AddHabitButton>+</AddHabitButton>
      </TitleContainer>
      <CreateHabit>
        <form>
          <input
            placeholder="nome do hábito"
            onChange={(content) => {
              setNewHabitName(content.target.value);
              console.log(newHabitName);
            }}
          />
          <DayButtonsContainer>
            {weekSelected.map((item) => {
              return (
                <DayButton
                  day={item.day}
                  selected={item.selected}
                  id={item.id}
                  weekSelected={weekSelected}
                  setWeekSelected={setWeekSelected}
                />
              );
            })}
          </DayButtonsContainer>
        </form>
      </CreateHabit>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 20px auto;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const AddHabitButton = styled.button`
  width: 40px;
  height: 35px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  font-size: 27px;
  color: #ffffff;
`;

const TitleContainer = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    width: inherit;
    color: #126ba5;
    font-size: 23px;
    text-justify: center;
  }
`;

const CreateHabit = styled.div`
  width: 340px;
  height: 180px;
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 5px;
  display: auto;
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  form > input {
    margin: 8px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    border-color: #d4d4d4;
    font-size: 20px;
    padding-left: 10px;
  }
  form > input::placeholder {
    font-size: 20px;
    line-height: 100%;
    color: #dbdbdb;
  }
`;

const DayButtonsContainer = styled.div`
  margin: 0 8px;
`;
