import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
    htmlFor: string;
    className?: string;
}

const FixedLabel = (props: PropsWithChildren<Props>): ReactElement => {
    return (
        <label className={`form-label form-label--fixed d-inline-block p-relative ${props.className || ''}`} htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
}

export default FixedLabel;
