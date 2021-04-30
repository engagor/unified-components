import React, { PropsWithChildren, ReactElement } from 'react';
import { Options } from 'tooltip.js';
import Tooltip from "../utils/Tooltip";

export type HelpTextProps = PropsWithChildren<{
    text: string;
    color?: string;
    id?: string;
    placement?: Options['placement'];
    className?: string;
}>;

const defaultProps: HelpTextProps = {
    text: '',
    color: 'black',
    id: '',
    placement: 'right',
};

export default function HelpText(props: HelpTextProps): ReactElement {
    const getTemplate = (): string => {
        return `
            <div class="popover bg-white box-shadow-default rounded-4 w-max-280 p-8" role="tooltip">
                <div class="tooltip-arrow arrow"></div>
                <div class="popover-content">
                    <div class='tooltip-inner'></div>
                </div>
            </div>
        `;
    };

    // We do this extra guard because if someone sends null or empty string,
    // React's default props will not kick in (only on undefined).
    let placementString = props.placement;
    if (!placementString) {
        placementString = defaultProps.placement;
    }

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

    let content = (
        <span className={`${classNames.join(' ')} inline_help_${props.color} ${props.className || ''}`}
              id={`help_inline_${props.id}`}>
            ?
        </span>
    );

    if (props.children) {
        content = <span className="tooltip-wrapper">{props.children}</span>;
    }

    return (
        <Tooltip
            container={document.body}
            title={props.text}
            html={true}
            template={getTemplate()}
            placement={placementString}
        >
            {content}
        </Tooltip>
    );
};

HelpText.defaultProps = defaultProps;
