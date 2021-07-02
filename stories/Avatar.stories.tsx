import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Avatar, { AvatarProps } from '../src/avatars/Avatar';

export default {
    title: 'Avatar',
    component: Avatar,
    args: {},
} as Meta;

const TemplateAvatar: Story<AvatarProps> = (args) => <Avatar {...args}/>;

export const Default = TemplateAvatar.bind({});

Default.args = {
    image: 'https://via.placeholder.com/128'
};
