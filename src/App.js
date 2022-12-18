import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AuthContext from "./contexts/AuthContext";

import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";
import HabitsPage from "./components/HabitsPage";

export default function App() {
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route path={`/`} element={<LoginPage />} />
            <Route path={`/cadastro`} element={<SignInPage />} />
            <Route path={`/habitos`} element={<HabitsPage />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
