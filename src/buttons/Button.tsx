import '@clarabridge/unified-ui/dist/buttons.css';
import React, { PropsWithChildren, ReactElement } from 'react';

export type ButtonProps = {
    mode: 'default' | 'primary' | 'secondary' | 'danger';
    size?: 'normal' | 'small';
    className?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    name?: string;
    type: 'submit' | 'reset' | 'button';
    value?: string | ReadonlyArray<string> | number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button (props: PropsWithChildren<ButtonProps>): ReactElement {
    const buttonClasses = ['btn', `btn--${props.mode}`];

    if (props.disabled) {
        buttonClasses.push('btn--disabled');
    }

    if (props.size === 'small') {
        buttonClasses.push('btn--small');
    }

    return (
        <button {...props}
            className={`${buttonClasses.join(' ')} ${props.className || ''}`}>
            {props.children}
        </button>
    );
}
