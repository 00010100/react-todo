import React, { useState } from 'react'

function AddTodo({ onToggle }) {
  const [value, setValue] = useState('')

  const handlerSubmit = (event) => {
    event.preventDefault()

    if (value.trim()) {
      onToggle(value)
      setValue('')
    } else {
      alert('Заметка не может быть пустым!')
    }
  }

  const handlerChangeInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        className="form-control"
        id="text"
        value={value}
        onChange={handlerChangeInput}
        placeholder="Введите Заметку"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Добавить
      </button>
    </form>
  )
}

export default AddTodo
