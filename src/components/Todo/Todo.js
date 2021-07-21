import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import FilterButton from './FilterButton';

function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, completed: false, title: 'Купить продукты' },
    { id: 2, completed: false, title: 'Сходить на тренировку' },
    { id: 3, completed: false, title: 'Выйти на Учебу' },
  ]);

  const filterMap = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
  };

  const lineToggle = (id) => {
    setTodo(
      todo.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed: !todos.completed };
        }

        return todos;
      })
    );
  };

  const [filter, setFilter] = useState('All');

  const filterName = Object.keys(filterMap);

  const filterList = filterName.map((name) => {
    return (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    );
  });

  const addTodo = (title) => {
    setTodo(todo.concat([{ title, id: Date.now(), completed: false }]));
  };

  const removeTodo = (id) => setTodo(todo.filter((todos) => todos.id !== id));

  // const filtered = useMemo(() => {
  //   return todo.filter(filterMap[filter]);
  // }, [filter]);

  return (
    <div className="container">
      <div className="mb-3">
        <h2 className="form-label mt-3 mb-3">Заметки</h2>
        <AddTodo onToggle={addTodo} />
        <div className="d-flex justify-content-end">{filterList}</div>
      </div>

      {!todo.length ? <p>Дел нет!</p> : null}

      {todo &&
        todo.filter(filterMap[filter]).map((todos, index) => {
          return (
            <div style={{ marginLeft: '-10px' }} key={todos.id}>
              <TodoItem
                onLines={lineToggle}
                removeToggle={removeTodo}
                completed={todos.completed}
                index={index}
                items={todos}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Todo;
