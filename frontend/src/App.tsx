import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Card from "./Card/Card";
import { GlobalContextProvider } from "./context/GlobalContext";
import ThemeBtn from "./components/ThemeButton/ThemeBtn";
import ThemeProvider from "./providers/ThemeProvider";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const checkUser = async () => {
    const token = localStorage.getItem("jwt_token");
    console.log(token);
    const response = await axios.get(
      `http://localhost:5000/api/auth/checkUser`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    
    if (response.data.isAuthorized === true) {
      console.log("Auth Done !");
    }else if (response.data.isAuthorized === false) {
      navigate("/");
    }



  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      {/* <BrowserRouter> */}
        <GlobalContextProvider>
          <ThemeProvider>
            <ThemeBtn />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/card" element={<Card />} />
            </Routes>
          </ThemeProvider>
        </GlobalContextProvider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
