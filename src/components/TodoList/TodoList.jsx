import React from 'react'
import TodoItem from 'components/TodoItem/TodoItem';
import { useSelector } from 'react-redux';
// import from './TodoList.module.css'

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
        {todos.map(todo => <TodoItem key={todo.id} {...todo}/>
       
        )}
      </ul>
  )
}
