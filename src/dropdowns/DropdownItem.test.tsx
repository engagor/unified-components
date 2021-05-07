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
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import Divider from './Divider';

it('renders correctly', async () => {
    const element = document.createElement('div');

    const dropdown = await renderer
        .create(<Dropdown isOpen={true}>
            <DropdownItem level={0}>Test 1</DropdownItem>
            <DropdownItem level={1}>Test 1</DropdownItem>
            <DropdownItem level={0}>Test 3</DropdownItem>
            <DropdownItem level={0}>Test 4</DropdownItem>
            <Divider/>
            <DropdownItem level={0}>Test 5</DropdownItem>
        </Dropdown>)
        .toJSON();

    await expect(dropdown).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
