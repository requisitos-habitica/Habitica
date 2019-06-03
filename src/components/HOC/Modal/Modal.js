import React from 'react'
import './Modal.scss'

const Modal = props => (
  <div className="modal" onClick={ props.onClose }>
    { props.children }
  </div>
)

export default Modal