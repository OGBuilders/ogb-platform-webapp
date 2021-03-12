import React from "react";
import "./modal.css";

import checkIcon from "../../../images/check.png";

const Modal = ({ children, closeModal, modalState, title, status }) => {
  if (!modalState) {
    return null;
  }

  let content = "";

  if (status === false) {
    content = (
      <div>
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
      </div>
    );
  } else {
    content = (
      <div>
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body success-msg">
          <div className="content">Congratulations! You're one step closer to your dream. We will contact you shortly.</div>
          <img src={checkIcon} className="success-icon" alt="Success"></img>
        </section>
      </div>
    );
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">{content}</div>
    </div>
  );
};

export default Modal;
