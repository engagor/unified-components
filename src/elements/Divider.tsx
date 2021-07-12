import React, { ReactElement } from 'react';

export type DividerProps = {
    color?: string;
    className?: string;
};

export default function Divider(props: DividerProps): ReactElement {
    return <hr className={`border-0 border-b-1 border-solid ${props.color ?? 'border-charcoal-color-200'} ${props.className}`} />
}
