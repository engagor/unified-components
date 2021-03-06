import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

it('renders correctly', async () => {
    const element = document.createElement('div');

    const avatar = await renderer
        .create(<Avatar image="https://via.placeholder.com/150" size="large" alt="alt_text" />)
        .toJSON();

    await expect(avatar).toMatchSnapshot();
    expect(element).toMatchSnapshot();
});
