import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Tools from "./Pages/Home/Tools";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route
          path="/tools/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
