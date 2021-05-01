import { Meta, Story } from '@storybook/react/types-6-0';
import React, { Fragment } from 'react';
import HelpText, { HelpTextProps } from "../src/tooltips/HelpText";

export default {
    title: 'HelpText',
    component: HelpText,
    argTypes: {
        placement: {
            control: {
                type: 'radio',
                options: ['top', 'right', 'bottom', 'left'],
            }
        }
    }
} as Meta;

const Template: Story<HelpTextProps> = (args) => {
    const content = (
        <Fragment>
            <p className="m-0 mb-8">Pick one or more users or teams of your account, and we'll assign the cases created for this rule to the users (in those teams) using a smart combined strategy of:</p>
            <ul className="m-0 mb-8">
                <li>Assigning the case to the user that previously handled that contact (Smart Assigning)</li>
                <li>Workload based assigning (sending cases to those users with the least amount of assigned cases. Note that we only execute this strategy when the candidates in the rule don't have access to more than 20 topics)</li>
                <li>Random assigning (when the above strategy doesn't return a candidate)</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer">(Read more ...)</a>
        </Fragment>
    );

    return (
        <HelpText title={args.title} content={content} placement={args.placement}>
            {args.children}
        </HelpText>
    );
};

export const OnIcon = Template.bind({});
export const OnContent = Template.bind({});

OnIcon.args = {
    title: 'What is this?',
    content: 'Help text content',
};

OnContent.args = {
    title: 'What is this?',
    children: <div>Hello</div>,
    placement: 'right'
};
