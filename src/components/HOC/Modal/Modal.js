import React from 'react'
import './Modal.scss'

const Modal = props => (
  <div className="modal">
    <div className="modal-close" onClick={ props.onClose }>&#10005;</div>
    { props.children }
  </div>
)

export default Modal