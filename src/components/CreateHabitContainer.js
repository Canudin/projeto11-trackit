import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import DayButton from "./DayButton";

export default function CreateHabitContainer() {
  const localUserData = JSON.parse(localStorage.getItem("userdata"));
  const [displayNewHabit, setDisplayNewHabit] = useState(false);
  const [weekSelected, setWeekSelected] = useState([
    { day: "D", selected: false, id: 0 },
    { day: "S", selected: false, id: 1 },
    { day: "T", selected: false, id: 2 },
    { day: "Q", selected: false, id: 3 },
    { day: "Q", selected: false, id: 4 },
    { day: "S", selected: false, id: 5 },
    { day: "S", selected: false, id: 6 },
  ]);
  const [newHabitName, setNewHabitName] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleSubmit(habit) {
    habit.preventDefault();
    const config = { headers: { Authorization: `Bearer ${localUserData.token}` } };

    let newHabitDays = weekSelected.filter((day) => day.selected);
    newHabitDays = newHabitDays.map((day) => day.id);
    const newHabit = { name: newHabitName, days: newHabitDays };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      newHabit,
      config
    );
    promise.then((answer) => {
      // console.log(answer);
      // console.log(answer.data);
      alert("Sucesso!");
      clearForm(habit);
    });
    promise.catch((answer) => console.log(answer.response.data));
  }

  function clearForm(item) {
    setShowForm(false);
    setNewHabitName("");
    console.log(item);
    item.target.reset();
    weekSelected.map((day) => (day.selected = false));
  }

  function handleHabitNameChange(content) {
    setNewHabitName(content.target.value);
    console.log(newHabitName);
  }

  return (
    <Container>
      <TitleContainer>
        <span>Meus Hábitos</span>
        <AddHabitButton onClick={() => setShowForm(!showForm)}>+</AddHabitButton>
      </TitleContainer>
      <CreateHabit display={showForm}>
        <form onSubmit={(habit) => handleSubmit(habit)}>
          <input
            placeholder="nome do hábito"
            onChange={(content) => handleHabitNameChange(content)}
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
          <ContainerAction>
            <CancelButton type="reset" onClick={(item) => clearForm(item)}>
              Cancelar
            </CancelButton>
            <SubmitButton type="submit">Salvar</SubmitButton>
          </ContainerAction>
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
  :hover {
    cursor: pointer;
  }
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
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  form > input {
    height: 45px;
    margin: 8px;
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

const ContainerAction = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: right;
  background-color: red;
`;

const CancelButton = styled.button`
  height: 45px;
  border-radius: 5px;
  border: none;
  color: #52b6ff;
  background-color: #ffffff;
  font-size: 21px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
const SubmitButton = styled.button`
  height: 45px;
  width: 84px;
  margin: 0 0 0 10px;
  background-color: #52b6ff;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 21px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
