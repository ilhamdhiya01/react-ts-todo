import * as todoApi from '../api';
import { ITodoReq, ITodoRes, ITodoEdit } from '..';
export const getAllTodos = async (setTasks: React.Dispatch<React.SetStateAction<ITodoRes[]>>) => {
  const result = await todoApi.apiGetAllTodos();
  setTasks(result);
};

export const handleRemoveTask = async (id: number) => {
  const result = await todoApi.apiDeleteTaskById(id);
};

export const handleAddTask = async (newTask: string) => {
  const dataTask = {
    body: newTask,
    user_id: 1,
    completed: false,
  };
  const result = await todoApi.apiAddNewTask(dataTask);
};

export const handleUpdateTask = async (id: number) => {
  const dataTask = {
    completed: true,
  };
  const result = await todoApi.apiUpdateTask(id, dataTask);
  console.log(result.message);
};
