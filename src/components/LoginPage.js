import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/img/trackit_logo.svg";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const [infoLogin, setInfoLogin] = useState({ email: "", password: "" });
  const { userData, setUserData } = useContext(AuthContext);

  function handleLogin(event) {
    event.preventDefault();
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      infoLogin
    );
    request.then((req) => {
      setUserData(req.data);
      navigate("/habitos");
    });
    request.catch((err) => console.log(err));
  }

  return (
    <Container>
      <img src={Logo} />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(content) => setInfoLogin({ ...infoLogin, email: content.target.value })}
        ></input>
        <input
          type="password"
          placeholder="senha"
          onChange={(content) => setInfoLogin({ ...infoLogin, password: content.target.value })}
        ></input>
        <button type="submit">Entrar</button>
      </form>
      <a href="/cadastro">Não tem uma conta? Cadastre-se!</a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin: 68px auto 0 auto;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 30px auto 0 auto;
  }
  form > input {
    margin-top: 6px;
    padding-left: 10px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    border-color: #d4d4d4;
    font-size: 20px;
  }
  form > input::placeholder {
    padding-left: 10px;
    font-size: 20px;
    line-height: 100%;
    color: #dbdbdb;
  }
  form > button {
    margin-top: 6px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 21px;
    text-align: center;
  }

  a {
    margin: 25px auto 0 auto;
    text-decoration: none;
    font-size: 14px;
    color: #52b6ff;
    text-decoration: underline;
  }
`;
