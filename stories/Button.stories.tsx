import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import '../src/css/components.css';
import Button, { ButtonProps } from '../src/buttons/Button';
import ButtonGroup, { ButtonGroupProps } from '../src/buttons/ButtonGroup';

export default {
    title: 'Button',
    component: Button,
    args: {
        mode: 'primary',
        size: 'normal',
        type: 'button',
    },
} as Meta;

const TemplateButton: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

const TemplateButtonGroup: Story<ButtonGroupProps> = (args) => <ButtonGroup><Button className='mr-8' mode='secondary' type='button'>Cancel</Button><Button mode='primary' type='button'>Submit</Button></ButtonGroup>;

export const Default = TemplateButton.bind({});
export const Primary = TemplateButton.bind({});
export const Secondary = TemplateButton.bind({});
export const Danger = TemplateButton.bind({});

export const Small = TemplateButton.bind({});

export const Group = TemplateButtonGroup.bind({});

Default.args = { };
Primary.args = { color: 'primary' };
Secondary.args = { mode: 'secondary' };
Danger.args = { color: 'danger' }

Small.args = { mode: 'primary', size: 'small' };
