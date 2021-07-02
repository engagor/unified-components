import React, { ReactElement } from 'react';

export type AvatarProps = {
    image: string;
    size: 'small' | 'medium' | 'large';
    alt: string;
};

export default function Avatar(avatarProps: AvatarProps): ReactElement {

    let width,
        height = 64;

    if (avatarProps.size === 'small') {
        width = height = 16;
    }

    if (avatarProps.size === 'medium') {
        width = height = 32;
    }

    return (
        <div role="img" className="rounded-full overflow-hidden inline-block">
            <img className="block" loading="lazy" src={avatarProps.image} alt={avatarProps.alt} width={width} height={height} />
        </div>
    );
}
