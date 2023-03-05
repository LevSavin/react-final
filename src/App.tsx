import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { login } from "./redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";

import "./App.css";
import Layout from "./components/Layout";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  // eslint-disable-next-line
  const user = useAppSelector(state => state.authReducer.user)
  const dispatch = useAppDispatch()

  const getAuthInfo = async () => {
    // запрос на сервер
    const result = {
      email: "test@mail.ru",
      name: "Иван"
    }
    await dispatch(login(result));
  }
  useEffect(() => {
    getAuthInfo();
  }, []);

  return (
    <Suspense fallback={<div className="container">Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<HomePage/>}></Route>
          <Route path="/registration" element={<RegisterPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;