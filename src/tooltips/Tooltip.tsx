import '../css/tooltip.css';

import React, { isValidElement, PropsWithChildren, ReactElement } from 'react';
import Tippy from "@tippyjs/react";
import Placement from "./Placement";

export type TooltipProps = PropsWithChildren<
    {
        content: string | ReactElement;
        placement?: Placement;
        visible?: boolean;
    }
>;

export default function Tooltip({ content, placement, visible, children }: TooltipProps): ReactElement | null {
    if (!isValidElement(children)) {
        return null;
    }

    return (
        <Tippy content={content} placement={placement} visible={visible}>
            {children}
        </Tippy>
    );
}