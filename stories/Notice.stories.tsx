import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Notice, { ToastMode, ToastProps } from '../src/alerts/Notice';

export default {
    title: 'Notice',
    component: Notice,
} as Meta;

const Template: Story<ToastProps> = (args) => (
    <Notice {...args}>Are you sure?</Notice>
);

export const Confirmation = Template.bind({});
Confirmation.args = { mode: ToastMode.Confirmation };

export const Error = Template.bind({});
Error.args = { mode: ToastMode.Error };

export const Info = Template.bind({});
Info.args = { mode: ToastMode.Info };

export const Success = Template.bind({});
Success.args = { mode: ToastMode.Success };

export const Warning = Template.bind({});
Warning.args = { mode: ToastMode.Warning };
