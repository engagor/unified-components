import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Modal, { ModalProps } from '../modals/Modal';
import ModalHeader, { ModalHeaderProps } from '../modals/ModalHeader';
import ModalBody, { ModalBodyProps } from '../modals/ModalBody';
import ModalFooter from '../modals/ModalFooter';
import Button from '../buttons/Button';
import ButtonGroup from '../buttons/ButtonGroup';
import FieldSet from '../forms/FieldSet';
import Legend from '../forms/Legend';
import FormGroup from '../forms/FormGroup';
import FixedLabel from '../forms/FixedLabel';
import Input from '../forms/Input';
import TextArea from '../forms/TextArea';
import Label from '../forms/Label';
import Select from '../forms/Select';
import OptGroup from '../forms/OptGroup';
import Option from '../forms/Option';

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
            <FieldSet className='mb-16'>
                <Legend>This is a legend</Legend>
                <FormGroup>
                    <FixedLabel htmlFor='text-input'>This is a fixed label</FixedLabel>
                    <Input id="text-input" type='text' placeholder='This is a text input' />
                </FormGroup>
                <FormGroup>
                    <FixedLabel htmlFor='text-area'>This is a fixed label</FixedLabel>
                    <TextArea id='text-area' name='text-area' value=''>Placeholder</TextArea>
                </FormGroup>
                <FormGroup>
                    <Label className='mr-8' htmlFor='text-input1'>This is a regular label</Label>
                    <Input id="text-input1" type='text' placeholder='This is a text input' />
                </FormGroup>
            </FieldSet>
            <FieldSet className='mb-0'>
                <Legend>This is a legend</Legend>
                <FormGroup>
                    <FixedLabel htmlFor='text-input'>This is a fixed label</FixedLabel>
                    <Select id='select-id' name='select-name' value='' onChange={() => {}}>
                        <OptGroup label='This is an option groupp'>
                            <Option value='value'>This an option</Option>
                        </OptGroup>
                    </Select>
                </FormGroup>
            </FieldSet>
        </ModalBody>
        <ModalFooter>
            <ButtonGroup className="align-self-end ml-auto">
                <Button mode="secondary" type="button" className="mr-8">Cancel</Button>
                <Button mode="primary" type="button">Save</Button>
            </ButtonGroup>
        </ModalFooter>
    </Modal>
);

export const Default = Template.bind({});
Default.args = { size: 'medium', mode: 'default' };
