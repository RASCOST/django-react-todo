import '../utilities.css'
import './modal.css'

import { useState } from "react"

const Modal = ({activeItem, toggle, handleSubmit}) => {
  const [item, setItem] = useState(activeItem)

  const handleChange = evt => {
    let {name, value} = evt.target

    if (evt.target.type === 'cheked') {
      value = evt.target.checked
    }

    setItem({...item, [name]: value})
  }

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
            name='title'
            value={item.title}
            onChange={evt => handleChange(evt)}
          /><br/>
          <label>Description</label><br/>
          <input
            className='width margin-y padding'
            name='description'
            value={item.description}
            onChange={evt => handleChange(evt)}
          /><br/>
          <input
            className='margin-right'
            name='completed'
            type='checkbox'
            checked={item.completed}
            onChange={evt => handleChange(evt)}/>
          <label>Completed</label>
        </div>
        <input
          className='modal-btn bc-color-limegreen color-white padding border-radius'
          type='submit'
          value='Save'
          onClick={() => {
            activeItem.title = item.title
            activeItem.description = item.description
            activeItem.completed = item.completed
            handleSubmit(activeItem)
            toggle()
          }}
        />
      </div>
    </section>
  )
}

export default Modal
