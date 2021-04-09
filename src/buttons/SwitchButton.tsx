import React, { PropsWithChildren, ReactElement } from 'react';

import '../css/components.css';

export type SwitchButtonProps = {
    checked: boolean;
    onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
};

const stylesPerMode: Record<string, string[]> = {
    checked: ['bg-primary-color-400', 'pl-16'],
    unchecked: ['bg-charcoal-color-200', 'pr-16'],
}

export default function SwitchButton(props: PropsWithChildren<SwitchButtonProps>): ReactElement {
    let switchButtonClassNames = [
        'box-sizing-box',
        'p-relative',
        'd-inline-block',
        'p-2',
        'leading-0',
        'rounded-16',
        'border-0',
        'outline-none',
        ...stylesPerMode[props.checked ? 'checked' : 'unchecked'],
    ];

    if (props.className) {
        switchButtonClassNames.push(props.className);
    }

    let optionalClasses = ['cursor-pointer'];
    if (props.disabled) {
        optionalClasses = ['opacity-25'];
    }

    switchButtonClassNames = [...switchButtonClassNames, ...optionalClasses];

    const toggleClassNames = [
        'd-inline-block',
        'p-8',
        'bg-white',
        'rounded-16'
    ];

    return (
        <button
            className={switchButtonClassNames.join(' ')}
            onClick={!props.disabled ? props.onToggle : undefined}
            type="button"
            role="switch"
            aria-checked={props.checked ? 'true' : 'false'}
            aria-label={props.checked ? 'on' : 'off'}
            aria-disabled={props.disabled}
        >
            <span className={toggleClassNames.join(' ')} />
        </button>
    );
}
