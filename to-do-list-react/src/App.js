import './App.css';
import { TodoList } from './components/TodoList';
import React, {useState} from 'react';

export function App() {
  const [todos, setTodos]= useState([ {id:1,  task: 'Tarea 1',  completed: false}]);
  
  return (
    <>
    <TodoList todos = {todos}/>
    <input type="text" placeholder="Nueva tarea"/>
    <button>➕</button>
    <button>🗑</button>
    </>
  );
}


