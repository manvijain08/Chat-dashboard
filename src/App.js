import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Custom/Header/Header";
import Chats from "./Components/Chats/Chats";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <section className="pages">
              <Sidebar />
              <Chats />
            </section>
          }
        />
        <Route
          path="/chat/:id"
          element={
            <section className="pages">
              <Sidebar />
              <Chats />
            </section>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
