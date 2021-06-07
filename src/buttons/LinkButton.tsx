import React, { PropsWithChildren, ReactElement } from 'react';

export type LinkButtonProps = {
    mode: 'default' | 'primary' | 'secondary' | 'danger';
    size?: 'normal' | 'small';
    className?: string;
    href: string;
    target?: string;
    rel?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function LinkButton(props: PropsWithChildren<LinkButtonProps>): ReactElement {
    const buttonClasses = ['btn', `btn--${props.mode}`, 'active:outline-primary-color-200'];

    if (props.disabled) {
        buttonClasses.push('btn--disabled');
    }

    if (props.size === 'small') {
        buttonClasses.push('btn--small');
    }

    return (
        <a
            className={`${buttonClasses.join(' ')} ${props.className || ''}`}
            href={props.href}
            target={props.target}
            rel={props.rel}
            onClick={props.onClick}
            aria-disabled={props.disabled}
        >
            {props.children}
        </a>
    );
}
