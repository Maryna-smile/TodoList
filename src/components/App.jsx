import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';
// import { nanoid } from 'nanoid';
// import css from './App.module.css';
import TodoList from './TodoList/TodoList';
import InputField from './InputField/InputField';

export default function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({text}))
  setText('');
  };


  return (
    <div>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}
