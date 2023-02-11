import { ModalStyled, Overlay } from './Modal.styled';
//
//ЗУПИНИВСЯ НА ТОМУ, ЩО МОДАЛКА ОДРАЗУ ВІДКРИВАЄТЬСЯ, НАВІТЬ НЕ МОДАЛКА, А ОВЕРЛЕЙ.
// ПОМИЛКИ....
//
//
const Modal = () => {
  return (
    <Overlay>
      <ModalStyled>This is modal</ModalStyled>
    </Overlay>
  );
};

export default Modal;
