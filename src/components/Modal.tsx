import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import './style.css'

const modalRoot = document.getElementById('modal')

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  return createPortal(
    <div className="modal">
      <h1>This is a Modal!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button onClick={onClose}>Close</button>
    </div>,
    modalRoot as Element,
  )
}

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className="open-button" onClick={handleButtonClick}>
        Click Me!
      </button>
      {isOpen && <ModalContent onClose={handleButtonClick} />}
    </>
  )
}
