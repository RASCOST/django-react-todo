import './App.css'
import { useState } from "react"

const todoItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];

function App() {
  const [viewCompleted, setViewCompleted] = useState(false)
  const [todoList, setTodoList] = useState(todoItems)

  const displayCompleted = status => {
    if (status) {
      return setViewCompleted(true)
    }

    return setViewCompleted(false)
  }

  const renderTabList = () => {
    return (
      <div>
        <span
          className=''
          onClick={() => displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className=''
          onClick={() => displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    )
  }

  const renderItems = () => {
    const newItems = todoList.filter(item => item.completed = viewCompleted)

    return newItems.map(item => (
      <li
        key={item.id}
        className=''
      >
        <span
          className=''
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            className=''
          >
            Edit
          </button>
          <button
            className=''
          >
            Delete
          </button>
        </span>
      </li>
    ))
  }
  return (
    <main className=''>
      <h1 className=''>Todo App</h1>
      <div>
        <button>
          Add task
        </button>
        {renderTabList()}
        <ul>
          {renderItems()}
        </ul>
      </div>
    </main>
  )
}

export default App;
