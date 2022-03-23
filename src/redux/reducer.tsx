import { IToDoData, ToDoAction, ToDoState } from "../types/type.d";
import * as actionTypes from "./actionTypes";
import { getStoreData } from "./Util";

const initialState: ToDoState = {
  toDoList: getStoreData(),
};

const reducer = (
  state: ToDoState = initialState,
  action: ToDoAction
): ToDoState => {
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      const newToDo: IToDoData = {
        title: action.toDoData.title,
        description: action.toDoData.description,
        date: action.toDoData.date,
        time: action.toDoData.time,
      };

      return {
        ...state,
        toDoList: state.toDoList.concat(newToDo),
      };

    case actionTypes.DELETE_TODO:
      const updatedToDoList: IToDoData[] = state.toDoList.filter(
        (toDoData) => toDoData.title !== action.toDoData.title
      );
      return {
        ...state,
        toDoList: updatedToDoList,
      };
  }

  return state;
};

export default reducer;
