import '@clarabridge/unified-ui/dist/buttons.css';
import React, { PropsWithChildren, ReactElement } from 'react';

export type ButtonProps = {
    mode?: 'primary' | 'secondary';
    color?: 'charcoal' | 'primary' | 'warning' | 'danger';
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
    const mode = props.mode ?? 'primary';
    const color = props.color ?? 'charcoal';
    const size = props.size ?? 'normal';

    const buttonClasses = ['btn', `btn--size-${size}`, `btn--mode-${mode}`, `btn--color-${color}`];

    if (props.disabled) {
        buttonClasses.push('btn--disabled');
    }

    return (
        <button
            {...props}
            className={`${buttonClasses.join(' ')} ${props.className || ''}`}
        >
            {props.children}
        </button>
    );
}
