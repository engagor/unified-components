import React from "react";
import "@clarabridge/unified-ui-tailwind/dist/utilities.css";

export type DropdownProps = {
    isOpen: boolean;
    children?:
        | React.ReactChild
        | React.ReactChild[];
};

export default function Dropdown(props: DropdownProps) {
    return (
        <div
            aria-role="listbox"
            aria-haspopup="listbox"
            aria-live="polite"
            aria-atomic="true"
            aria-expanded={props.isOpen}
            className="box-shadow-default rounded-8 bg-white min-w-320 max-w-400 overflow-hidden"
            tabIndex={0}
        >
            {props.children}
        </div>
    );
};
