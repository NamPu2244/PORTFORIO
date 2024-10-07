import "./App.css";
import HomePage from "./home/homepage";
import { Navbar } from "./home/nav";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ backgroundColor: "#c8d2c7" }}>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/homepage" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
