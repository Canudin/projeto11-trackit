import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/img/trackit_logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [register, setRegister] = useState({ email: "", name: "", image: "", password: "" });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      register
    );
    request.then((a) => {
      navigate("/");
      console.log(a);
    });
    request.catch((a) => console.log(a.response.data));
  }
  return (
    <Container>
      <img src={Logo} />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(content) => {
            setRegister({ ...register, email: content.target.value });
          }}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(content) => {
            setRegister({ ...register, password: content.target.value });
          }}
        />
        <input
          type="text"
          placeholder="nome"
          onChange={(content) => {
            setRegister({ ...register, name: content.target.value });
          }}
        />
        <input
          type="url"
          placeholder="foto"
          onChange={(content) => {
            setRegister({ ...register, image: content.target.value });
          }}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <a href="/">Já tem uma conta? Faça login!</a>
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
