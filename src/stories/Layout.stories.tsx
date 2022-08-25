import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "../components/Layout";

export default {
    title: "Layout",
    component: Layout,
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
