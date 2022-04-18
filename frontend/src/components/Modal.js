import './modal.css'

const Modal = ({activateItem, toggle, handleSubmit}) => {
  return (
    <div className="modal">
      <h2>Todo Item</h2>
      <span>✖</span>
      <label>Title</label>
      <input value='title' />
      <label>Description</label>
      <input value='description' />
      <input type='checkbox' value='completed' />
      <input type='submit' value='Save' />
    </div>
  )
}

export default Modal
