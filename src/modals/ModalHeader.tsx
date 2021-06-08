import '@clarabridge/unified-ui/dist/modals.css';
import React, { PropsWithChildren, ReactElement, MouseEvent } from 'react';

export type ModalHeaderProps  = PropsWithChildren<
    {
        mode?: 'default' | 'warning' | 'danger';
        onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
    }
>;

export default function ModalHeader(props: ModalHeaderProps): ReactElement {
    const mode = props.mode ?? 'default';

    return (
        <header className={`modal__header modal__header--${mode}`}>
            <h2 id="modal-header" className="modal__header__title">{props.children}</h2>
            <button className="modal__header__dismiss" type="button" aria-label="Close modal" onClick={props.onClose}>
                <span className="en-icon en-icon-delete-3" aria-hidden="true" />
            </button>
        </header>
    );
}
