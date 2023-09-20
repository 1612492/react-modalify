import { useTransition } from '@react-spring/web';
import { cloneElement } from 'react';

type ModalProps = {
  isOpen: boolean;
  children: JSX.Element;
};

const ModalTransition = ({ isOpen, children }: ModalProps) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  return transitions((style, isOpen) => (isOpen ? cloneElement(children, { style }) : null));
};

export default ModalTransition;
