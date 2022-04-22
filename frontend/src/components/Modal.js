import '../utilities.css'
import './modal.css'

import { useState } from "react"

const Modal = ({activeItem, toggle, handleSubmit}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [complete, setComplete] = useState(false)

  const handleChangeTitle = evt => setTitle(evt.target.value)

  const handleChangeDescription = evt => setDescription(evt.target.value)

  const handleChangeComplete = evt => setComplete(evt.target.checked)

  
    <section className="modal">
      <div className='modal-header '>
        <h2>Todo Item</h2>
        <span>✖</span>
      </div>
      <div className='padding-top'>
        <label>Title</label><br/>
        <input
          className='width margin-y padding'
          value={activeItem.title ? activeItem.title : title}
          onChange={evt => handleChangeTitle(evt)}
        /><br/>
        <label>Description</label><br/>
        <input
          className='width margin-y padding'
          value={activeItem.description ? activeItem.description : description}
          onChange={evt => handleChangeDescription(evt)}
        /><br/>
        <input
          className='margin-right'
          type='checkbox'
          checked={activeItem.complete ? activeItem.complete : complete}
          onChange={evt => handleChangeComplete(evt)}/>
        <label>Completed</label>
      </div>
      <input
        className='modal-btn bc-color-limegreen color-white padding border-radius'
        type='submit'
        value='Save'
        onClick={() => {
          handleSubmit()
          toggle()
        }}
      />
    </section>
  )
}

export default Modal
