import React from 'react'

const TodoInput = ({ inputText, handleChange, handleSubmit }) => {
  return (
    <div>
      <input value={inputText} type="text"
        onChange={handleChange} placeholder="Enter Task" />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>

  )
}
export default TodoInput