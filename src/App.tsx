import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
    <TodoForm/>
    <TodoList/>
    </>
  );
}

export default App;
