import React, { ReactElement } from 'react';

export type AvatarProps = {
    image: string;
    size: 'small' | 'medium' | 'large';
    alt: string;
    username?: string;
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
        <div role="img" aria-label={avatarProps.username ?? avatarProps.alt} className="rounded-full overflow-hidden inline-block">
            <img aria-hidden="true" className="block" loading="lazy" src={avatarProps.image} alt={avatarProps.username ?? avatarProps.alt} width={width} height={height} />
        </div>
    );
}
