import '../utilities.css'
import './modal.css'

const Modal = ({activeItem, toggle, handleSubmit}) => {
  return (
    <section className="modal">
      <div className='modal-header '>
        <h2>Todo Item</h2>
        <span>✖</span>
      </div>
      <div className='padding-top'>
        <label>Title</label><br/>
        <input className='width margin-y padding' value={activeItem.title} /><br/>
        <label>Description</label><br/>
        <input className='width margin-y padding' value={activeItem.description} /><br/>
        <input
          className='margin-right'
          type='checkbox'
          checked={activeItem.complete ? true : false}/>
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
