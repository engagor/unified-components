import '@clarabridge/unified-ui-tailwind/dist/modals.css';
import React, { PropsWithChildren, ReactElement } from 'react';

export type ModalBodyProps = PropsWithChildren<
    {

    }
>;

export default function ModalBody(props: ModalBodyProps): ReactElement {
    return <section className="modal__body">{props.children}</section>;
}
