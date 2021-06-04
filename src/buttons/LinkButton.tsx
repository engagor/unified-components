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

const stylesPerMode: Record<string, Record<string, string[]>> = {
    default: {
        base: [
            'bg-charcoal-color-600',
            'border-charcoal-color-600',
            'text-white',
        ],
        hover: [
            'bg-hover-none',
            'text-hover-charcoal-color-600'
        ]
    },
    primary: {
        base: [
            'bg-primary-color-400',
            'border-primary-color-400',
            'text-white',
        ],
        hover: [
            'bg-hover-none',
            'text-hover-primary-color'
        ]
    },
    secondary: {
        base: [
            'border-charcoal-color-400',
            'text-charcoal-color-400',
            'bg-none',
        ],
        hover: [
            'text-hover-primary-color',
            'border-hover-primary-color-400',
        ]
    },
    danger: {
        base: [
            'border-danger-400',
            'bg-danger-400',
            'text-white',
        ],
        hover: [
            'bg-hover-none',
            'text-hover-danger-400',
            'border-hover-danger-400',
        ]
    },
}

export default function LinkButton(props: PropsWithChildren<LinkButtonProps>): ReactElement {
    const buttonClasses = [
        'd-inline-block',
        'border-solid',
        'border-2',
        'rounded-2',
        'bg-transition',
        'text-decoration',
        ...stylesPerMode[props.mode].base
    ];

    let cursorClass = 'cursor-pointer';

    if (props.disabled) {
        cursorClass = 'cursor-default';
        buttonClasses.push('opacity-25');
        buttonClasses.push('pointer-events-none');
    } else {
        buttonClasses.push(...stylesPerMode[props.mode].hover);
    }

    const size = props.size ?? 'normal';

    if (size === 'small') {
        buttonClasses.push('ph-8', 'pv-4', 'text-sm-1', 'leading-sm-1');

    }
    if (size === 'normal') {
        buttonClasses.push('ph-16', 'pv-8', 'text-base', 'leading-base');
    }

    buttonClasses.push(cursorClass);

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
