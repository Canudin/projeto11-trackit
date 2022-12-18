import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import styled from 'styled-components';

export default function MyHabits() {
  const { userData, setUserData } = useContext(AuthContext);
  const token = userData.token;

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
    promise.then(handleContent);
    promise.catch((answer) => console.log(answer));
    return () => {};
  }, []);

  function handleContent(answer) {
    if (answer.data.length !== 0) {
      return <span>TEM HABITO CADASTRADO</span>;
    } else {
      console.log(answer.data);
      return (
        <Divisao>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Divisao>
      );
    }
  }
}

const Divisao = styled.div`
  height: 100vh;
  background-color: red;  
`;