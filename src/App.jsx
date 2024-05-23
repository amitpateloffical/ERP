import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Layout from "./Components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="App">
        <LoginPage />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<DashBoard />} />
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
