import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import '../src/css/components.css';
import LinkButton, { LinkButtonProps } from '../src/buttons/LinkButton';

export default {
    title: 'LinkButton',
    component: LinkButton,
    args: {
        mode: 'primary',
        size: 'normal',
    },
} as Meta;

const TemplateButton: Story<LinkButtonProps> = (args) => <LinkButton {...args}>Button</LinkButton>;

export const Default = TemplateButton.bind({});
export const Primary = TemplateButton.bind({});
export const Secondary = TemplateButton.bind({});
export const Warning = TemplateButton.bind({});
export const Danger = TemplateButton.bind({});

export const Small = TemplateButton.bind({});

Default.args = { };
Primary.args = { color: 'primary' };
Secondary.args = { mode: 'secondary' };
Warning.args = { color: 'warning' }
Danger.args = { color: 'danger' }

Small.args = { mode: 'primary', size: 'small' };
