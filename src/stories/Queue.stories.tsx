import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Queue } from "../components/Queue";
import { QueueItemIconType } from "../components/QueueItem";
import "../App.css";

export default {
    title: "Queue",
    component: Queue,
} as ComponentMeta<typeof Queue>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Queue> = (args) => <Queue {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    items: [
        {
            title: "Item 1",
            description: "Description 1",
            icon: QueueItemIconType.Pick,
        },
        {
            title: "Item 2",
            description: "Description 2",
            icon: QueueItemIconType.Puzzle,
        },
    ],
};
