import { cloneElement, FunctionComponent, ReactElement, useEffect, useRef } from 'react';
import { Options } from 'tooltip.js';

const Tooltip: FunctionComponent<TooltipProps> = (props: TooltipProps): ReactElement => {
    const tooltipInstance: any = useRef(null);
    const tooltipRef: any = useRef(null);

    useEffect(
        (): () => void => {
            if (props.title && tooltipRef.current) {
                import(/* webpackChunkName: "tooltip-js" */ 'tooltip.js').then(
                    ({ default: TooltipLib }): void => {
                        tooltipInstance.current = new TooltipLib(
                            tooltipRef.current,
                            {
                                placement: props.placement,
                                title: props.title,
                                trigger: props.trigger,
                                html: props.html,
                                container: props.container,
                                boundariesElement: 'window',
                                template: props.template || '<div class="popper-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                            }
                        );
                    }
                );
            }

            return (): void => {
                if (tooltipInstance.current !== null) {
                    tooltipInstance.current.dispose();
                }
            };
        },
        [
            props.placement,
            props.title,
            props.trigger,
            props.html,
            props.container,
            props.template,
            tooltipRef
        ]
    );

    // @ts-ignore
    const trigger: Trigger = props.children;

    if (!props.title) {
        return trigger;
    }

    return cloneElement(
        trigger,
        {
            ...trigger.props,
            ref: (node: any): void => {
                tooltipRef.current = node;

                if (typeof trigger.ref === 'function') {
                    trigger.ref(node);
                }
            }
        }
    );
};

interface Trigger extends ReactElement {
    ref: (node: ReactElement) => {};
}

interface TooltipProps {
    title: Options['title'];
    placement?: Options['placement'];
    trigger?: Options['trigger'];
    html?: Options['html'];
    container?: Options['container'];
    children: ReactElement;
    template?: string;
}

Tooltip.defaultProps = {
    placement: 'top',
    trigger: 'hover focus',
    html: false,
    container: document.body,
};

export default Tooltip;
