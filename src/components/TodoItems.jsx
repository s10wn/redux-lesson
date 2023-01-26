import React from 'react'
import { useDispatch } from 'react-redux'

import { removeTodo, toggleTodo } from '../store/todoSlice'
// eslint-disable-next-line react/prop-types
export const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()

  return <li>
  <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo({ id }))}/>
  <span>{text}</span>
  <span className='delete' onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
  </li>
}
