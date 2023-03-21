import { Suspense, useEffect } from "react";
import { login } from "@/redux/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { axios } from "@/index";
import AppRoutes from "@/config/AppRoutes";
import Loading from "@/components/loading/Loading";

function App() {
  // eslint-disable-next-line
  const user = useAppSelector(state => state.authReducer.user)
  const dispatch = useAppDispatch()

  const getAuthInfo = async () => {
    const mockUser = {
      email: "test@mail.ru",
      name: "Иван",
      role: "restaurant",
    }
    dispatch(login(mockUser));
    
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
    <Suspense fallback={<Loading></Loading>}>
      <AppRoutes></AppRoutes>
    </Suspense>
  );
}

export default App;