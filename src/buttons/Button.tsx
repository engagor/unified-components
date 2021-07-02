import '@clarabridge/unified-ui/dist/buttons.css';
import React, { PropsWithChildren, ReactElement, MouseEvent } from 'react';

export type ButtonProps = {
    mode?: 'primary' | 'secondary';
    color?: 'charcoal' | 'primary' | 'warning' | 'danger';
    size?: 'normal' | 'small';
    className?: string;
    disabled?: boolean;
    name?: string;
    type: 'submit' | 'reset' | 'button';
    value?: string | ReadonlyArray<string> | number;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button (props: PropsWithChildren<ButtonProps>): ReactElement {
    const mode = props.mode ?? 'primary';
    const color = props.color ?? 'charcoal';

    const buttonClasses = ['btn', `btn--mode-${mode}`, `btn--color-${color}`];

    if (props.disabled) {
        buttonClasses.push('btn--disabled');
    }

    if (props.size === 'small') {
        buttonClasses.push('btn--small');
    }

    const handleClickedButton = (event: MouseEvent<HTMLButtonElement>) => {
        if (props.disabled) {
            return;
        }

        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <button
            className={`${buttonClasses.join(' ')} ${props.className || ''}`}
            disabled={props.disabled}
            name={props.name}
            type={props.type}
            value={props.value}
            onClick={handleClickedButton}
        >
            {props.children}
        </button>
    );
}
