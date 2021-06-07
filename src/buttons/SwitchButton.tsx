import '@clarabridge/unified-ui/dist/switch-buttons.css';
import React, { PropsWithChildren, ReactElement } from 'react';

export type SwitchButtonProps = {
    checked: boolean;
    onToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
};

export default function SwitchButton(props: PropsWithChildren<SwitchButtonProps>): ReactElement {
    const switchButtonClassNames = ['switch-btn', `switch-btn--${props.checked ? 'checked' : 'unchecked'}`];

    if (props.className) {
        switchButtonClassNames.push(props.className);
    }

    if (props.disabled) {
        switchButtonClassNames.push('switch-btn--disabled');
    }

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
            <span className="switch-btn__toggle" />
        </button>
    );
}
