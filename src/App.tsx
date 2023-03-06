import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { login } from "./redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { axios } from "./index";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
    const url = "/5";
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data)
        const result = { // моковые данные
          email: "test@mail.ru",
          name: "Иван"
        }
        dispatch(login(result));
      })
      .catch((error) => {
        console.log(error)
      });
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