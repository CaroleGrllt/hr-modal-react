/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';
import './Modal.css'

export default function Modal({isOpen, onClose, message, closeBtn}) {

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-body">{message}</div>

        <div className="modal-footer">
          <button type="button" className="btn" onClick={onClose}>
            {closeBtn}
          </button>
        </div>
      </div>
    </div>
  )
}
