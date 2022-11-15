import TodoPage from './todo/TodoPage';

function App() {
  return (
    <div className='h-screen bg-[#1D1E21] flex justify-center overflow-auto'>
      <div className='max-w-xl w-full'>
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
