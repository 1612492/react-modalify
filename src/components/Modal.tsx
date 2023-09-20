import { animated, useTransition } from '@react-spring/web';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
};

const Backdrop = styled(animated.div, {
  position: 'fixed',
  inset: 0,
  zIndex: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

const Content = styled(animated.div, {
  margin: 8,
  minHeight: 'min-content',
  maxWidth: 400,
  backgroundColor: 'rgb(0, 0, 0)',
});

const Modal = ({ isOpen, children, closeModal }: ModalProps) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  return transitions((style, isOpen) =>
    isOpen ? (
      <Backdrop style={{ opacity: style.opacity }} onClick={() => closeModal()}>
        <Content style={style} onClick={(e) => e.stopPropagation()}>{children}</Content>
      </Backdrop>
    ) : null
  );

};

export default Modal;
