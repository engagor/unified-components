import React, { ReactElement } from 'react';
import { ClarabridgeIconsId } from '@clarabridge/unified-icons/src/types/clarabridge-icons';

export type IconProps = {
    iconName: ClarabridgeIconsId;
    className?: string;
};

export default function Icon(props: IconProps): ReactElement {
    return <span className={`en-icon en-icon-${props.iconName} ${props.className ?? ''}`} aria-hidden="true" />
}
