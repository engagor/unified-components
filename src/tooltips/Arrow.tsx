import '../css/arrow.css';

import React, { forwardRef } from "react";

type Props = {
    className?: string;
}

export default forwardRef<HTMLDivElement, Props>(
    ({ className }, ref) => {
        return <div className={`arrow ${className ?? ''}`} ref={ref} />;
    }
)