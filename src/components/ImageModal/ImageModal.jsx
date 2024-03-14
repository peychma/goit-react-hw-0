import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from "./ImageModal.module.css";

Modal.setAppElement('#root');

const ImageModal = ({ imageUrl, altText, isOpen, closeModal }) => {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [closeModal]);

    return (
    <Modal className={css.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName={css.modalOverlay}
    >
      <img className={css.modalimage} src={imageUrl} alt={altText} />
    </Modal>
  );
};

export default ImageModal;
