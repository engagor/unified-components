import React, { isValidElement, PropsWithChildren, ReactElement, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Placement from './Placement';
import Arrow from './Arrow';

export type TooltipProps = PropsWithChildren<
    {
        content: string | ReactElement;
        appendTo?: 'parent' | Element | ((ref: Element) => Element)
        placement?: Placement;
        visible?: boolean;
    }
>;

export default function Tooltip({ content, appendTo, placement, visible, children }: TooltipProps): ReactElement | null {
    const [arrow, setArrow] = useState<HTMLDivElement | null>(null);

    if (!appendTo) {
        appendTo = document.body;
    }

    if (!placement) {
        placement = 'top';
    }

    if (!isValidElement(children)) {
        return null;
    }

    const popperOptions = {
        modifiers: [
            { name: 'arrow', options: { element: arrow } },
        ],
    };

    return (
        <Tippy
            placement={placement}
            appendTo={appendTo}
            visible={visible}
            popperOptions={popperOptions}
            render={
                (attrs) => {
                    return (
                        <article className="bg-charcoal-color-400 shadow rounded-4 w-max-280 p-8" role="tooltip" {...attrs}>
                            <section className="text-base font-normal text-white">{content}</section>
                            <Arrow ref={(node) => setArrow(node)} className="text-charcoal-color-400" />
                        </article>
                    );
                }
            }
        >
            {children}
        </Tippy>
    );
}
