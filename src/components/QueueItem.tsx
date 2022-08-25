import React, { FC, SVGProps } from "react";
import { useRecoilState } from "recoil";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactComponent as PuzzleIcon } from "../assets/svgs/puzzle.svg";
import { ReactComponent as PickIcon } from "../assets/svgs/pick.svg";
import { queueSelectedIndexState } from "./Queue";

export interface IQueueItem {
    title: String;
    description?: String;
    icon?: QueueItemIconType;
    index?: number;
}

export enum QueueItemIconType {
    Puzzle = "puzzle",
    Pick = "pick",
}

const iconComponentMap = new Map<
    QueueItemIconType,
    FC<SVGProps<SVGSVGElement>>
>([
    [QueueItemIconType.Puzzle, PuzzleIcon],
    [QueueItemIconType.Pick, PickIcon],
]);

export const QueueItem: FC<IQueueItem> = ({
    title = "",
    description = "",
    icon = null,
    index = 0,
}) => {
    const [selectedIndex, setSelectedIndex] = useRecoilState(
        queueSelectedIndexState
    );
    const Icon = icon && iconComponentMap.get(icon);
    const isSelected = selectedIndex === index;

    return (
        <ListItem
            onClick={(event: React.MouseEvent<HTMLElement>) => {
                setSelectedIndex(index);
            }}
            disablePadding
            sx={{
                border: isSelected ? "2px solid #1D5F83" : "0",
                borderRadius: "12px",
            }}
        >
            <ListItemButton
                disableRipple
                sx={{
                    padding: "10px",
                }}
            >
                {Icon && (
                    <ListItemIcon
                        sx={{
                            backgroundColor: isSelected
                                ? "#5DABC7"
                                : "transparent",
                            borderRadius: "8px",
                            minWidth: "unset",
                            padding: "11px 4px",
                            marginRight: "10px",
                        }}
                    >
                        {
                            <Icon
                                className={
                                    isSelected ? "selectedQueueItem" : ""
                                }
                            />
                        }
                    </ListItemIcon>
                )}
                <ListItemText primary={title} secondary={description} />
            </ListItemButton>
        </ListItem>
    );
};
