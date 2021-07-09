import React from 'react';

export type IconProps = {
    iconName: string;
    className?: string;
};

export default function Icon(props: IconProps) {
    return <span className={`en-icon en-icon-${props.iconName} ${props.className ?? ''}`} aria-hidden="true" />
}
