import React, { Dispatch, useCallback } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { createToDo } from "./redux/actionCreators";
import { IToDoData, ToDoState } from "./types/type.d";

import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { LoginPage, ToDoPage } from "./pages";
import { isLoggedIn } from "./redux/Util";

const PrivateRoute = () => {
  const auth = isLoggedIn();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = () => {
  const auth = isLoggedIn();
  return auth ? <Navigate to="/todo/" /> : <Outlet />;
};

const AppRoutes = () => {
  const toDoList: readonly IToDoData[] = useSelector(
    (state: ToDoState) => state.toDoList,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const createNewToDo = useCallback(
    (toDoData: IToDoData) => dispatch(createToDo(toDoData)),
    [dispatch]
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="" element={<LoginPage />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route
              path="/todo/"
              element={
                <ToDoPage toDoList={toDoList} createNewToDo={createNewToDo} />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
