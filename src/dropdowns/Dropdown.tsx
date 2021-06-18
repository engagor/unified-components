import React, { ReactElement } from 'react';
import '@clarabridge/unified-ui/dist/utilities.css';

export type DropdownProps = {
    isOpen: boolean;
    children:
        | React.ReactChild
        | React.ReactChild[];
};

export default function Dropdown(props: DropdownProps): ReactElement {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            aria-expanded={props.isOpen}
            className="shadow-md rounded-8 bg-white dark:bg-charcoal-color-500 min-w-320 max-w-400 overflow-hidden"
            role="listbox"
            tabIndex={0}
        >
            {props.children}
        </div>
    );
}
