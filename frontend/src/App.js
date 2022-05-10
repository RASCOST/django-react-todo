import './App.css'
import { useState, useEffect } from "react"
import axios from 'axios'

import Modal from './components/Modal';

function App() {
  const [viewCompleted, setViewCompleted] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [modal, setModal] = useState(false)
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false
  })

  const refreshList = () => {
    axios.get('/api/todos')
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => refreshList(), [])

  const toggle = () => {
    setModal(!modal)
  }

  const handleSubmit = item => {
    toggle()

    if (item.id) {
      axios.put(`/api/todos/${item.id}`, item)
        .then(res => refreshList())
        .catch(error => console.log(error))

      return
    }

    axios.post(`/api/todos/`, item)
      .then(res => refreshList())
      .catch( error => console.log(error))
  }

  const handleDelete = item => {
    axios.delete(`/api/todos/${item.id}`)
      .then(res => refreshList())
  }

  const createItem = () => {
    const item = {
      title: "",
      description: "",
      completed: false
    }

    setActiveItem(item)
    setModal(!modal)
  }

  const editItem = item => {
    setActiveItem(item)
    setModal(!modal)
  }

  const displayCompleted = status => {
    if (status) {
      return setViewCompleted(true)
    }

    return setViewCompleted(false)
  }

  const renderTabList = () => {
    return (
      <div className='tab-bar'>
        <span
          className={viewCompleted ? 'border border-radius color-tan bc-color-darkeslategray' : 'border border-radius color-tan bc-color-white'}
          onClick={() => displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={!viewCompleted ?  'border border-radius color-tan bc-color-darkeslategray' : 'border border-radius color-tan bc-color-white'}
          onClick={() => displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    )
  }

  const renderItems = () => {
    const newItems = todoList.filter(item => item.completed === viewCompleted)

    return newItems.map(item => (
      <li
        key={item.id}
        className='list-item'
      >
        <span
          className=''
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className='bc-color-dimgray color-white padding border-radius cursor-pointer'
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button
            className='margin-left padding border-radius color-white bc-color-crimson cursor-pointer'
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ))
  }
  return (
    <main className='app-container'>
      <h1 className='color-white upper-case text-center margin-top'>Todo App</h1>
      <div className='card bc-color-white'>
        <button
          className='bc-color-blueviolet border-radius color-white padding margin-bottom'
          onClick={createItem}
        >
          Add task
        </button>
        {renderTabList()}
        <ul>
          {renderItems()}
        </ul>
      </div>
      {modal ? (
        <Modal
          activeItem={activeItem}
          toggle={toggle}
          handleSubmit={handleSubmit}
        />
      ) : null}
    </main>
  )
}

export default App;
