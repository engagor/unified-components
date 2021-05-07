import React, { ReactElement } from 'react';
import '@clarabridge/unified-ui-tailwind/dist/utilities.css';

export default function Divider(): ReactElement {
    return <hr className="border-0 border-b-1 border-solid border-primary-color-600 mb-8 mt-8"/>;
}
