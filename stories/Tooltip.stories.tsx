import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Tooltip, { TooltipProps } from "../src/tooltips/Tooltip";

export default {
    title: 'Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            control: {
                type: 'radio',
                options: ['top', 'right', 'bottom', 'left'],
            }
        }
    }
} as Meta;

const Template: Story<TooltipProps> = (args) =>
    <Tooltip {...args}>
        <div>Hello</div>
    </Tooltip>

export const Default = Template.bind({});

Default.args = {
    content: 'Tooltip content',
    placement: 'top',
};