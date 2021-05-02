import React, { PropsWithChildren, ReactElement } from 'react';

import '../css/components.css';

export enum ToastMode {
    Confirmation = 'confirmation',
    Error = 'error',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
}

export type ToastProps = {
    mode: ToastMode;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
};

const stylesPerMode: Record<string, Record<string, string[]>> = {
    confirmation: {
        base: ['bg-charcoal-color-400'],
        icon: ['en-icon', 'en-icon-check-3']
    },
    error: {
        base: ['bg-danger-400'],
        icon: ['en-icon', 'en-icon-accessdenied']
    },
    info: {
        base: ['bg-primary-color-400'],
        icon: ['en-icon', 'en-icon-info']
    },
    success: {
        base: ['bg-success-400'],
        icon: ['en-icon', 'en-icon-check']
    },
    warning: {
        base: ['bg-warning-400'],
        icon: ['en-icon', 'en-icon-warning']
    },
}

const Toast = (props: PropsWithChildren<ToastProps>): ReactElement => {
    const toastClasses = [
        'text-white',
        'p-static',
        'd-flex',
        'p-8',
        'border-0',
        'rounded-2',
        'leading-base',
        'min-w-300',
        'max-w-500',
        ...stylesPerMode[props.mode].base
    ];

    let dismissButton = null;

    if (props.dismissible) {
        dismissButton = <span className="en-icon en-icon-delete-3 ml-auto" />
    }

    return (
        <dialog {...props} className={`${toastClasses.join(' ')} ${props.className || ''}`}>
            <span className={`${stylesPerMode[props.mode].icon.join(' ')} d-inline`} />
            <section className="text-sm-1 mh-8 mv-0 d-inline break-word">
                {props.children}
            </section>
            {dismissButton}
        </dialog>
    );
}

export default Toast
