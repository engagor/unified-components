import '../css/arrow.css';

import React, { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(
    (props, ref) => {
        return <div className="arrow" ref={ref} />;
    }
)