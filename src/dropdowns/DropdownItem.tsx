import React, { ReactElement } from 'react';
import '@clarabridge/unified-ui/dist/utilities.css';

type DropdownItem = {
    level: number;
    selected?: boolean;
    link?: string,
    callback?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    children?:
        | React.ReactChild
        | React.ReactChild[];
};

export default function DropdownItem(props: DropdownItem): ReactElement {
    const listItemBaseClasses = [
        'w-100-percent',
        'inline-block',
        'no-underline',
        'px-16',
        'py-8',
        'cursor-pointer',
    ];

    const listItemRegularClasses = [
        ...listItemBaseClasses,
        'text-charcoal-color-400',
        'hover:bg-primary-color-200',
        'dark:text-white',
        'dark:hover:text-charcoal-color-400',
    ];

    const listItemActiveClasses = [
        ...listItemBaseClasses,
        'text-white',
        'bg-primary-color-600',
        'hover:bg-primary-color-200',
        'hover:text-charcoal-color-400',
    ];

    return (
        <div
            role="option"
            aria-selected={props.selected}
            tabIndex={0}
            onClick={props.callback ?? undefined}
            onKeyDown={props.callback ?? undefined}
        >
            {props.link ?
                <a
                    href={props.link}
                    className={props.selected
                        ? listItemActiveClasses.join(' ')
                        : listItemRegularClasses.join(' ')}
                >
                    <span className={`flex pl-${props.level * 24}`}>
                        {props.children}
                    </span>
                </a> :
                <div
                    className={props.selected
                        ? listItemActiveClasses.join(' ')
                        : listItemRegularClasses.join(' ')}
                >
                    <span className={`flex pl-${props.level * 24}`}>
                        {props.children}
                    </span>
                </div>
            }
        </div>
    );
}
