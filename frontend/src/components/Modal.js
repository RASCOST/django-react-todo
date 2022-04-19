import '../utilities.css'
import './modal.css'

const Modal = ({activateItem, toggle, handleSubmit}) => {
  return (
    <section className="modal">
      <div className='modal-header '>
        <h2>Todo Item</h2>
        <span>✖</span>
      </div>
      <div className='padding-top'>
        <label>Title</label><br/>
        <input className='width margin-y padding' value='title' /><br/>
        <label>Description</label><br/>
        <input className='width margin-y padding' value='description' /><br/>
        <input className='margin-right' type='checkbox' />
        <label>Completed</label>
      </div>
      <input className='modal-btn bc-color-limegreen color-white padding border-radius' type='submit' value='Save' />
    </section>
  )
}

export default Modal
