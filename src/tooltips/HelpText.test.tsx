import { renderToStaticMarkup } from 'react-dom/server';

jest.mock(
    'react-dom',
    () => {
        return {
            createPortal: (element: ReactElement, node: HTMLElement) => {
                node.innerHTML = renderToStaticMarkup(element);
            },
        }
    }
);

import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';
import HelpText from './HelpText';

it('renders correctly', async () => {
    const element = document.createElement('div');

    const helptext = await renderer
        .create(<HelpText content="Hello this is my awesome helptext!" visible={true} appendTo={element} />)
        .toJSON();

    await expect(helptext).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
