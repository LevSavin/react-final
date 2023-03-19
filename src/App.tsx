import { Suspense, useEffect } from "react";
import { login } from "@/redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { axios } from "@/index";
import AppRoutes from "@/config/AppRoutes";

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
      <AppRoutes></AppRoutes>
    </Suspense>
  );
}

export default App;