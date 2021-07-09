import '@clarabridge/unified-ui/dist/buttons.css';
import React, { PropsWithChildren, ReactElement, MouseEvent } from 'react';

export type LinkButtonProps = {
    mode?: 'primary' | 'secondary';
    color?: 'charcoal' | 'primary' | 'warning' | 'danger';
    size?: 'normal' | 'small';
    className?: string;
    href: string;
    target?: string;
    rel?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function LinkButton (props: PropsWithChildren<LinkButtonProps>): ReactElement {
    const mode = props.mode ?? 'primary';
    const color = props.color ?? 'charcoal';

    const buttonClasses = ['btn', `btn--mode-${mode}`, `btn--color-${color}`];

    if (props.disabled) {
        buttonClasses.push('btn--disabled');
    }

    if (props.size === 'small') {
        buttonClasses.push('btn--small');
    }

    const handleClickedButton = (event: MouseEvent<HTMLAnchorElement>) => {
        if (props.disabled) {
            event.preventDefault();

            return;
        }

        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <a
            role="button"
            tabIndex={0}
            className={`${buttonClasses.join(' ')} ${props.className || ''}`}
            href={props.href}
            target={props.target}
            rel={props.rel}
            onClick={handleClickedButton}
            aria-disabled={props.disabled}
        >
            {props.children}
        </a>
    );
}
