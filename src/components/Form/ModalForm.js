import React, { useState } from 'react'

function ModalForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isOpen, setIsOpen] = useState(false)

  const handlerOpen = () => {
    setIsOpen(!isOpen)
  }

  const [submited, setSubmited] = useState(false)
  const [valid, setValid] = useState(false)

  const handlerEmailChange = (event) => {
    setForm({ ...form, email: event.target.value })
  }

  const handlerPasswordChange = (event) => {
    setForm({ ...form, password: event.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (form.email && form.password) {
      setValid(true)
    }
    setSubmited(true)
  }

  return (
    <div className="container">
      <button
        onClick={handlerOpen}
        className="btn mt-5 btn-register btn-primary"
      >
        Регистрация
      </button>
      {isOpen && (
        <div
          onClick={handlerOpen}
          style={{ padding: '10px' }}
          className="modal-content"
        >
          <div onClick={(e) => e.stopPropagation()} className="modal-body">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="mb-3">Форма Регистрации</h3>
                  <span onClick={handlerOpen} style={{ cursor: 'pointer' }}>
                    &times;
                  </span>
                </div>
                {submited && valid ? (
                  <span className="form-label d-flex justify-content-center">
                    Вы зарегистрированы!
                  </span>
                ) : null}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handlerEmailChange}
                />
                {submited && !form.email ? (
                  <div className="alert alert-danger mt-3" role="alert">
                    Пожалуйста введите свой Email!
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <input
                  value={form.password}
                  onChange={handlerPasswordChange}
                  type="text"
                  placeholder="Password"
                  className="form-control"
                />
                {submited && !form.password ? (
                  <div className="alert alert-danger mt-3" role="alert">
                    Пожалуйста введите свой Пароль!
                  </div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary">
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalForm
