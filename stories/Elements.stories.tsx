import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Divider, { DividerProps } from '../src/elements/Divider';

export default {
    title: 'Elements/Divider',
    component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => (
    <Divider {...args} />
);

export const DividerTemplate = Template.bind({});
DividerTemplate.args = { className: 'w-64 my-8' };
