import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Icon, { IconProps } from '../src/icon/Icon';

export default {
    title: 'Icon',
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => (
    <Icon {...args} />
);

export const IconTemplate = Template.bind({});
IconTemplate.args = { iconName: 'add', className: 'text-charcoal-color-300' };
