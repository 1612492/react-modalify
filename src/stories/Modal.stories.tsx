import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import { Modal } from '../.';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div style={{ width: '20rem', height: '20rem', background: '#fff' }}></div>
      </Modal>
    </Fragment>
  );
}

export const Default: Story = {
  render: () => <ModalContainer />,
};

