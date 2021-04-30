import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import HelpText, {HelpTextProps} from "../tooltips/HelpText";
import '../css/tooltip.css';

export default {
    title: 'HelpText',
    component: HelpText,
} as Meta;

const Template: Story<HelpTextProps> = (args) =>
    <HelpText {...args}>
        {args.children}
    </HelpText>

export const HelpTextOnIcon = Template.bind({});
export const HelpTextOnContent = Template.bind({});

HelpTextOnIcon.args = {
    text: 'Help text content',
};

HelpTextOnContent.args = {
    text: 'Help text content',
    children: <div>Hello</div>
};
