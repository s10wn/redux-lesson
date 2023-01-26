import React from 'react'

// eslint-disable-next-line react/prop-types
export const Form = ({ text, addTodo, setText }) => {
  return <label>
  <input value={text} onChange={(e) => setText(e.target.value)} placeholder='text'/>
  <button onClick={addTodo}>Add Todos</button>
</label>
}
