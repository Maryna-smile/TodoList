import React from 'react';
import css from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'store/todoSlice';
import { toggleTodo } from 'store/todoSlice';

export default function TodoItem({id, completed, text}) {
  const dispatch = useDispatch();
  return (
    <li>
    <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo({id}))}/>
    <span>{text}</span>
    <span className={css.cross} onClick={() => dispatch(removeTodo({id}))}>X</span>
  </li>
  )
}
