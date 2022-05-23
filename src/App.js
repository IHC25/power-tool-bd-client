import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Home/Banner";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/home" element={<Banner></Banner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
