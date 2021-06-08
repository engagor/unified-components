import React, { PropsWithChildren, ReactElement } from 'react';

export type ButtonGroupProps = {
    className?: string;
};

export default function ButtonGroup (props: PropsWithChildren<ButtonGroupProps>): ReactElement {
    return (
        <div className={`flex ${props.className || ''}`}>
            {props.children}
        </div>
    );
}
