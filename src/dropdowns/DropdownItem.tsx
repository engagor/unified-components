import React from "react";

type DropdownItem = {
    level: number;
    selected?: boolean;
    link?: string,
    callback?: (event: React.MouseEvent) => void;
    children?:
        | React.ReactChild
        | React.ReactChild[];
};

export default function DropdownItem(props: DropdownItem) {
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
    ];

    const listItemActiveClasses = [
        ...listItemBaseClasses,
        'text-white',
        'bg-primary-color-600',
        'hover:bg-primary-color-200',
        'hover:text-charcoal-color-400',
    ];

    return (
        <div role="option" aria-selected={props.selected} tabIndex={0}>
            {props.link ?
                <a
                    href={props.link}
                    onClick={props.callback ?? undefined}
                    className={props.selected
                        ? listItemActiveClasses.join(" ")
                        : listItemRegularClasses.join(" ")}
                >
                    <span className={`flex pl-${props.level * 24}`}>
                        {props.children}
                    </span>
                </a> :
                <div
                    onClick={props.callback ?? undefined}
                    className={props.selected
                        ? listItemActiveClasses.join(" ")
                        : listItemRegularClasses.join(" ")}
                >
                    <span className={`flex pl-${props.level * 24}`}>
                        {props.children}
                    </span>
                </div>
            }
        </div>
    );
}
