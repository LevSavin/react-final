import "./App.css";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/registration" element={<RegisterPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;