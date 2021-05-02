import React, { isValidElement, PropsWithChildren, ReactElement, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Arrow from './Arrow';
import Placement from './Placement';

export type HelpTextProps = PropsWithChildren<{
    title?: string | ReactElement;
    content: string | ReactElement;
    appendTo?: 'parent' | Element | ((ref: Element) => Element)
    placement?: Placement;
    visible?: boolean;
}>;

export default function HelpText({ title, content, appendTo, placement, visible, children }: HelpTextProps): ReactElement | null {
    const [arrow, setArrow] = useState<HTMLDivElement | null>(null);

    if (!placement) {
        placement = 'right';
    }

    if (!children) {
        const classNames = [
            'd-flex',
            'align-items-center',
            'justify-center',
            'bg-charcoal-color-200',
            'rounded-full',
            'text-white',
            'font-bold',
            'w-16',
            'h-16',
            'text-sm-2',
            'cursor-pointer',
        ];

        children = <span className={`${classNames.join(' ')}}`}>?</span>;
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
            visible={visible}
            appendTo={appendTo}
            popperOptions={popperOptions}
            render={
                (attrs) => {
                    if (title) {
                        title = <h2 className="text-base font-bold m-0 mb-8">{title}</h2>;
                    }

                    return (
                        <article className="bg-white box-shadow-default rounded-4 w-max-280 p-16" role="tooltip" {...attrs}>
                            {title}
                            <section className="text-base font-normal">{content}</section>
                            <Arrow ref={(node) => setArrow(node)} />
                        </article>
                    );
                }
            }
        >
            {children}
        </Tippy>
    );
}
