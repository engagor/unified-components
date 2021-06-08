import '@clarabridge/unified-ui/dist/modals.css';
import React, { PropsWithChildren, ReactElement } from 'react';

export type ModalProps = PropsWithChildren<
    {
        size?: 'large' | 'medium' | 'small'
        'aria-labelledby'?: string;
        'aria-described-by'?: string;
    }
>;

export default function Modal(props: ModalProps): ReactElement {
    const size = props.size ?? 'medium';

    return (
        <dialog
            className={`modal modal--${size}`}
            aria-labelledby={props['aria-labelledby']}
            aria-describedby={props['aria-described-by']}
        >
            {props.children}
        </dialog>
    );
}
