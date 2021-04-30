import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Modal, { ModalProps } from '../modals/Modal';
import ModalHeader, { ModalHeaderProps } from '../modals/ModalHeader';
import ModalBody, { ModalBodyProps } from '../modals/ModalBody';
import ModalFooter from '../modals/ModalFooter';
import Button from '../buttons/Button';
import ButtonGroup from '../buttons/ButtonGroup';

export default {
    title: 'Modal',
    component: Modal,
    subcomponents: { ModalHeader, ModalBody, ModalFooter },
    argTypes: {
        mode: {
            control: {
                type: 'radio',
                options: ['default', 'warning', 'danger'],
            }
        }
    }
} as Meta;

const Template: Story<ModalProps & ModalHeaderProps & ModalBodyProps> = (args) => (
    <Modal size={args.size} aria-labelledby="modal-header">
        <ModalHeader mode={args.mode} onClose={args.onClose}>
            <h2 id="modal-header" className="text-base leading-base m-0 font-normal">
                Modal header
            </h2>
        </ModalHeader>
        <ModalBody>
            <p className='text-black dark:text-white'>Here comes the body</p>
        </ModalBody>
        <ModalFooter>
            <ButtonGroup className="justify-end w-full">
                <Button mode="secondary" type="button" className="mr-8">Cancel</Button>
                <Button mode="primary" type="button">Save</Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
);

export const Default = Template.bind({});
Default.args = { size: 'medium', mode: 'default' };
