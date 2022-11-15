export interface ITodoRes {
  id: number;
  body: string;
  user_id: number;
  completed: boolean;
}

export interface ITodoReq {
  body: string;
  user_id: number;
  completed: boolean;
}

export interface ITodoEdit {
  completed: boolean;
}
