import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { GlobalContextProvider } from "./context/GlobalContext";
import ThemeBtn from "./components/ThemeButton/ThemeBtn";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <ThemeProvider>
          <BrowserRouter>
            <ThemeBtn />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
