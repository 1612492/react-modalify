import { ReactNode, useState } from 'react';
import ModalContext from './ModalContext';

type Props = {
  children: ReactNode;
};

type ModalStack = Record<number, ReactNode>;

const ModalProvider = ({ children }: Props) => {
  const [modalStack, setModalStack] = useState<ModalStack>({});

  const openModal = (modal: ReactNode | number) => { };

  const closeModal = (modal: ReactNode | number) => { };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
