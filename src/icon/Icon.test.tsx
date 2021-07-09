import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

it('renders correctly', async () => {
    const element = document.createElement('div');

    const icon = await renderer
        .create(<Icon iconName="add" />)
        .toJSON();

    await expect(icon).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
