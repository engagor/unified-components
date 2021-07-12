import React from 'react';
import renderer from 'react-test-renderer';
import Divider from './Divider';

it('renders correctly', async () => {
    const element = document.createElement('div');

    const divider = await renderer
        .create(<Divider />)
        .toJSON();

    await expect(divider).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
