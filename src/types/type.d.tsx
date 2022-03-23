export interface IToDoPage {
  toDoList: readonly IToDoData[];
  createNewToDo: Function;
}

export interface IFolders {
  folders: Array<object>;
}

export interface IAddNewArticle {
  open: boolean;
  handleClose: Function;
}

export interface IToDoData {
  title: string;
  description: string;
  date: string;
  time: string;
  pos?: number;
}

export type ToDoState = {
  toDoList: IToDoData[];
};

export type ToDoAction = {
  type: string;
  toDoData: IToDoData;
};

export type DispatchType = (args: ToDoAction) => ToDoAction;
