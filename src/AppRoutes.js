import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, ToDoPage } from "./pages";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/todo/" element={<ToDoPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
