import { DispatchType, IToDoData, ToDoAction } from "../types/type.d";
import * as actionTypes from "./actionTypes";
import { deleteStoreData, updateStoreData } from "./Util";

export function createToDo(toDoData: IToDoData) {
  const action: ToDoAction = {
    type: actionTypes.CREATE_TODO,
    toDoData,
  };

  updateStoreData(toDoData);
  return takeAction(action);
}

export function deleteToDo(toDoData: IToDoData) {
  const action: ToDoAction = {
    type: actionTypes.DELETE_TODO,
    toDoData,
  };

  deleteStoreData(toDoData?.pos);
  return takeAction(action);
}

export function takeAction(action: ToDoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
        console.log('helo')
      dispatch(action);
    }, 500);
  };
}
