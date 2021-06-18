import React, { ReactElement } from 'react';
import '@clarabridge/unified-ui/dist/utilities.css';

export default function Divider(): ReactElement {
    return <hr className="border-0 border-b-1 border-solid border-primary-color-600 dark:border-charcoal-color-300 mb-8 mt-8"/>;
}
