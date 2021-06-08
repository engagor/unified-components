import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Toast, { ToastMode, ToastProps } from '../src/alerts/Toast';

export default {
    title: 'Toast',
    component: Toast,
} as Meta;

const Template: Story<ToastProps> = (args) => (
    <Toast {...args}>Are you sure?</Toast>
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
