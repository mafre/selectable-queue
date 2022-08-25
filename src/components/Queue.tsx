import React, { FC } from "react";
import { atom } from "recoil";

import { IQueueItem, QueueItem } from "./QueueItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

interface IQueue {
    items?: IQueueItem[];
}

export const queueSelectedIndexState = atom({
    key: "queueSelectedIndexState",
    default: 0,
});

export const Queue: FC<IQueue> = ({ items = [] }) => {
    return (
        <Box sx={{ margin: "20px" }}>
            <List>
                {items.map((item, index) => {
                    return <QueueItem key={index} {...item} index={index} />;
                })}
            </List>
        </Box>
    );
};
