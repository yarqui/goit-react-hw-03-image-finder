import { ModalStyled, Overlay } from './Modal.styled';

const Modal = ({ url, onCloseClick, tags }) => {
  return (
    <Overlay>
      <ModalStyled>
        <img src={url} alt={tags} />
        This is modal
        <button type="button" onClick={onCloseClick}>
          Close
        </button>
      </ModalStyled>
    </Overlay>
  );
};

export default Modal;
