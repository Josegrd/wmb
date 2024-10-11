import "./App.css";
import Hero from "./components/Hero";
import ListFood from "./components/ListFood";
import ListTable from "./components/ListTable";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/ListFood"
            element={
              <ProtectedRoute>
                <Sidebar />
                <ListFood />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ListTable"
            element={
              <ProtectedRoute>
                <Sidebar />
                <ListTable />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MoreInfo"
            element={
              <ProtectedRoute>
                <Sidebar />
                <MoreInfo />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
