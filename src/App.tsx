import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { login } from "@/redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { axios } from "@/index";

import Layout from "./components/Layout";
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const RestaurantPage = lazy(() => import("./pages/Restaurant"));

function App() {
  // eslint-disable-next-line
  const user = useAppSelector(state => state.authReducer.user)
  const dispatch = useAppDispatch()

  const getAuthInfo = async () => {
    return
    const url = "/api/123";
    axios
      .get(url)
      .then(() => {
        const result = {
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
        <Route path={`${process.env.REACT_APP_REPO}/`} element={<Layout/>}>
          <Route index path={`${process.env.REACT_APP_REPO}/`} element={<HomePage/>}></Route>
          <Route path={`${process.env.REACT_APP_REPO}/registration`} element={<RegisterPage/>}></Route>
          <Route path={`${process.env.REACT_APP_REPO}/profile`} element={<ProfilePage/>}></Route>
          <Route path={`${process.env.REACT_APP_REPO}/restaurant/:id`} element={<RestaurantPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;