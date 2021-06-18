import {Meta, Story} from '@storybook/react/types-6-0';
import React from 'react';
import Dropdown, {DropdownProps} from "../src/dropdowns/Dropdown";
import DropdownItem from "../src/dropdowns/DropdownItem";
import Divider from "../src/dropdowns/Divider";

export default {
    title: 'Dropdowns',
    component: Dropdown,
    subcomponents: {DropdownItem, Divider},
    args: {},
} as Meta;

const DropdownTemplate: Story<DropdownProps> = (args) =>
    <Dropdown {...args}>
        <DropdownItem level={0}>Hello</DropdownItem>
        <Divider/>
        <DropdownItem selected={true} level={0}>Hello2</DropdownItem>
        <DropdownItem level={0}>Hello3</DropdownItem>
        <DropdownItem level={1}>Hello3</DropdownItem>
        <DropdownItem level={1}>Hello3</DropdownItem>
    </Dropdown>;

export const Default = DropdownTemplate.bind({});

Default.args = {
    isOpen: true,
};


