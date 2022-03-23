import { IToDoData } from "../types/type.d";

export const isLoggedIn = () => {
  let getState = localStorage.getItem("loggedIn");
  return getState ? true : false;
};

export const setIsLoggedIn = () => {
  localStorage.setItem("loggedIn", String(true));
};

export const updateStoreData = (toDoData: IToDoData) => {
  let getStore = localStorage.getItem("todos");
  if (!getStore) {
    return localStorage.setItem("todos", JSON.stringify([toDoData]));
  }

  let newStore = getStoreData();
  newStore.push(toDoData);
  return localStorage.setItem("todos", JSON.stringify(newStore));
};

export const getStoreData = () => {
  let getData = localStorage.getItem("todos");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

export const clearStoreData = () => {
  localStorage.removeItem("todos");
};

export const deleteStoreData = (pos?: number) => {
  let getStore = getStoreData();
  if (getStore.length) {
    getStore.splice(pos, pos);
    return localStorage.setItem("todos", JSON.stringify(getStore));
  } else {
    return [];
  }
};
