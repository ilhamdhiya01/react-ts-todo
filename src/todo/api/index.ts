import { ITodoEdit, ITodoReq, ITodoRes } from '..';
import api from '../../constant/api';
export const apiGetAllTodos = async () =>
  api
    .get(`todos`)
    .then((data) => data.data)
    .catch((error) => console.log(error));

export const apiDeleteTaskById = async (id: number) =>
  api
    .delete(`delete/${id}`)
    .then((data) => data.data)
    .catch((error) => console.log(error));

export const apiAddNewTask = async (data: ITodoReq) =>
  api
    .post('create', data)
    .then((data) => data.data)
    .catch((error) => console.log(error));

export const apiUpdateTask = async (id: number, dataTask: ITodoEdit) =>
  api
    .put(`edit/${id}`, dataTask)
    .then((data) => data.data)
    .catch((error) => console.log(error));
