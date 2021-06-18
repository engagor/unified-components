import { renderToStaticMarkup } from 'react-dom/server';
import React, { Fragment, ReactElement } from 'react';
import renderer from 'react-test-renderer';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ButtonGroup from '../buttons/ButtonGroup';
import Button from '../buttons/Button';

jest.mock(
    'react-dom',
    () => {
        return {
            createPortal: (element: ReactElement, node: HTMLElement) => {
                node.innerHTML = renderToStaticMarkup(element);

                return <Fragment />;
            },
        }
    }
);

it('renders correctly when modal is open', async () => {
    const element = document.createElement('div');
    const modal = await renderer
        .create(
            <Modal isOpen={true} container={element} size="medium" aria-labelledby="modal-header">
                <ModalHeader mode="default" onClose={() => { /** Do nothing */ }}>Modal header</ModalHeader>
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
        )
        .toJSON();

    expect(modal).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});

it('renders correctly when modal is closed', async () => {
    const element = document.createElement('div');
    const modal = await renderer
        .create(
            <Modal isOpen={false} container={element} size="medium" aria-labelledby="modal-header">
                <ModalHeader mode="default" onClose={() => { /** Do nothing */ }}>Modal header</ModalHeader>
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
        )
        .toJSON();

    expect(modal).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
