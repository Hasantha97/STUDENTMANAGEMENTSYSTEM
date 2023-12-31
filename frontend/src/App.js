import "./App.css";
import AddStudent from "./components/AddStudent";
import CounterFun from "./components/CounterFun";
import Header from "./components/Header";
import AllStudents from "./components/AllStudents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AllStudents />} />
        </Routes>

        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
