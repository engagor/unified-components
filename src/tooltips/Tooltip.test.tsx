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
import Tooltip from './Tooltip';

it('renders correctly', async () => {
    const element = document.createElement('div');

    const tooltip = await renderer
        .create(
            (
                <Tooltip content="Hello this is my awesome tooltip!" visible={true} appendTo={element}>
                    <button>Trigger</button>
                </Tooltip>
            )
        )
        .toJSON();

    await expect(tooltip).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
