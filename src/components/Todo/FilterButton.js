import React from 'react'

function FilterButton({ isPressed, setFilter, name }) {
  return (
    <div>
      <button
        type="button"
        style={{ margin: '0 7px' }}
        className="btn btn-primary"
        aria-pressed={isPressed}
        onClick={() => setFilter(name)}
      >
        <span className="filter-button">{name}</span>
      </button>
    </div>
  )
}

export default FilterButton
