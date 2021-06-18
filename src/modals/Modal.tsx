import '@clarabridge/unified-ui/dist/modals.css';
import React, { Fragment, PropsWithChildren, ReactElement } from 'react';
import { createPortal } from 'react-dom';

export type ModalProps = PropsWithChildren<
    {
        size?: 'large' | 'medium' | 'small'
        'aria-labelledby'?: string;
        'aria-described-by'?: string;
        isOpen: boolean;
        container?: Element;
    }
>;

export default function Modal(props: ModalProps): ReactElement | null {
    const size = props.size ?? 'medium';

    if (!props.isOpen) {
        return null;
    }

    return createPortal(
        (
            <Fragment>
                <dialog
                    className={`modal modal--${size}`}
                    aria-labelledby={props['aria-labelledby']}
                    aria-describedby={props['aria-described-by']}
                >
                    {props.children}
                </dialog>
                <div className="modal-backdrop" />
            </Fragment>
        ),
        props.container ?? document.body
    );
}
