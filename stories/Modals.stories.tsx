import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Modal, { ModalProps } from '../src/modals/Modal';
import ModalHeader, { ModalHeaderProps } from '../src/modals/ModalHeader';
import ModalBody, { ModalBodyProps } from '../src/modals/ModalBody';
import ModalFooter from '../src/modals/ModalFooter';
import Button from '../src/buttons/Button';
import ButtonGroup from '../src/buttons/ButtonGroup';

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
        <ModalHeader mode={args.mode} onClose={args.onClose}>Modal header</ModalHeader>
        <ModalBody>
            <p className="text-black dark:text-white m-0">Here comes the body</p>
        </ModalBody>
        <ModalFooter>
            <ButtonGroup className="justify-end w-100-percent">
                <Button mode="secondary" type="button" className="mr-8">Cancel</Button>
                <Button mode="primary" type="button">Save</Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
);

export const Default = Template.bind({});
Default.args = { size: 'medium', mode: 'default' };
