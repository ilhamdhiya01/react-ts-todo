import Button from '../components/Button';
import { IconX, IconCheck } from '@tabler/icons';
import { Input } from '../components/Input';
import Alert from '../components/Alert';
import { useState, useEffect } from 'react';
import { getAllTodos, handleRemoveTask, handleAddTask, handleUpdateTask } from './service';
import { ITodoRes } from '.';

export default function TodoPage() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITodoRes[]>([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    getAllTodos(setTasks);
  }, [trigger]);

  const submitTask = async (e: any) => {
    e.preventDefault();
    await handleAddTask(newTask);
    setNewTask('');
    setTrigger((prev) => !prev);
  };

  const onclikRemoveBtn = async (id: number) => {
    await handleRemoveTask(id);
    setTrigger((prev) => !prev);
  };

  const onclickCompleteBtn = async (id: number) => {
    await handleUpdateTask(id);
    setTrigger((prev) => !prev);
  };
  return (
    <div>
      <form onSubmit={(e) => submitTask(e)}>
        <div className='flex justify-center gap-2 mt-[100px]'>
          <Input value={newTask} onChange={(e: any) => setNewTask(e.target.value)} />
          <Button type='submit' className='hover:bg-slate-300 hover:text-[#1D1E21] transition duration-300 text-sm font-semibold border-2 border-slate-300 h-10 whitespace-nowrap items-center rounded-md text-white bg-transparent inline-flex justify-center px-2 py-1' text='Add Task' />
        </div>
      </form>
      <div>
        <h2 className='text-2xl font-semibold text-white mt-4'>My task :</h2>
        {tasks.length > 0 ? (
          <ol className='mt-8 space-y-4'>
            {tasks.map((task) => (
              <li key={task.id} className='border-2 border-slate-300 p-4 flex items-center justify-between rounded-lg'>
                <div>
                  <div className='flex items-center gap-3'>
                    <h2 className='text-2xl font-semibold text-white'>{task.body}</h2>
                    {task.completed ? <IconCheck className='text-green-500 text-2xl' /> : <IconX className='text-red-500 text-2xl' />}
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <span onClick={() => onclickCompleteBtn(task.id)} className={`${task.completed ? 'hidden' : ''} p-2 border border-slate-300 rounded-md text-white text-sm cursor-pointer font-semibold hover:bg-slate-300 hover:text-[#1D1E21] transition duration-300`}>
                    Complete
                  </span>
                  <span onClick={() => onclikRemoveBtn(task.id)} className='p-2 border border-slate-300 rounded-md text-white text-sm cursor-pointer font-semibold hover:bg-slate-300 hover:text-[#1D1E21] transition duration-300'>
                    Remove
                  </span>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div>No result data ..</div>
        )}
      </div>
    </div>
  );
}
