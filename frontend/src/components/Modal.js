import '../utilities.css'
import './modal.css'

import { useState } from "react"

const Modal = ({activeItem, toggle, handleSubmit}) => {
  const [title, setTitle] = useState(activeItem.title)
  const [description, setDescription] = useState(activeItem.description)
  const [completed, setCompleted] = useState(activeItem.completed)

  const handleChangeTitle = evt => setTitle(evt.target.value)

  const handleChangeDescription = evt => setDescription(evt.target.value)

  const handleChangeCompleted = evt => setCompleted(evt.target.checked)

  return (
    <section className="modal-container">
      <div className="modal">
        <div className='modal-header '>
          <h2>Todo Item</h2>
          <span onClick={toggle}>✖</span>
        </div>
        <div className='padding-top'>
          <label>Title</label><br/>
          <input
            className='width margin-y padding'
            value={title}
            onChange={evt => handleChangeTitle(evt)}
          /><br/>
          <label>Description</label><br/>
          <input
            className='width margin-y padding'
            value={description}
            onChange={evt => handleChangeDescription(evt)}
          /><br/>
          <input
            className='margin-right'
            type='checkbox'
            checked={completed}
            onChange={evt => handleChangeCompleted(evt)}/>
          <label>Completed</label>
        </div>
        <input
          className='modal-btn bc-color-limegreen color-white padding border-radius'
          type='submit'
          value='Save'
          onClick={() => {
            activeItem.title = title
            activeItem.description = description
            activeItem.completed = completed
            handleSubmit(activeItem)
            toggle()
          }}
        />
      </div>
    </section>
  )
}

export default Modal
