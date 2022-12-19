import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import styled from "styled-components";

export default function MyHabits() {
  const { userData, setUserData } = useContext(AuthContext);
  const localUserData = JSON.parse(localStorage.getItem("userdata"))
  const token = localUserData.token;
  const [habits, setHabits] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((answer) => setHabits(answer.data));
    promise.catch((answer) => console.log(answer));
  }, []);

  function handleContent(habits) {
    if (habits.length !== 0) {
      return <span>TEM HABITO CADASTRADO</span>;
    } else {
      console.log(habits);
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
  text-align: center;
`;
