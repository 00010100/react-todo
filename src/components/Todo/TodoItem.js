import React from 'react';

function TodoItem({ items, index, onLines, removeToggle }) {
  const classes = [];

  if (items.completed) {
    classes.push('line');
  }

  console.log(items);

  return (
    <div className="container">
      <div className="todo-item d-flex align-items-center justify-content-between">
        <ul className={classes.join('')}>
          <li className="todo__list d-flex align-items-center justify-content-start">
            <div className="todo-info">
              <input
                type="checkbox"
                onChange={() => onLines(items.id)}
                checked={items.completed}
                className="larger"
              />
              <span style={{ marginLeft: '20px' }}>{index + 1}</span>
              {items.title}
              <p className="date">
                <strong>{new Date().toLocaleDateString()}</strong>
              </p>
            </div>
          </li>
        </ul>
        <button
          className="btn btn-danger"
          style={{ marginLeft: '15px' }}
          onClick={() => removeToggle(items.id)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
