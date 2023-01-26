import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from './store/todoSlice'

import { TodoList } from './components/TodoList'
import { Form } from './components/Form'

import './App.css'

export const App = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')
  }

  return <div className='main'>
    <Form addTodo={addTask} text={text} setText={setText}/>
    <TodoList />
  </div>
}
