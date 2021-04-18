import '@clarabridge/unified-ui-tailwind/dist/modals.css';
import React, { PropsWithChildren, ReactElement } from 'react';

export type ModalFooterProps  = PropsWithChildren<
    {

    }
>;

export default function ModalFooter(props: ModalFooterProps): ReactElement {
    return <footer className="modal__footer">{props.children}</footer>;
}
