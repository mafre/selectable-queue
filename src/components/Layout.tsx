import React, { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ReactComponent as MoreVerticalIcon } from "../assets/svgs/more_vertical.svg";

interface ILayout {
    children?: ReactNode;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "black",
    marginLeft: "15px",
}));

export const Layout: FC<ILayout> = ({ children = null }) => {
    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                height: "100vh",
            })}
        >
            <AppBar
                position="static"
                elevation={4}
                sx={{
                    backgroundColor: "white",
                    borderBottomRightRadius: "12px 12px",
                    borderBottomLeftRadius: "12px 12px",
                    boxShadow:
                        "0px 2px 4px -1px rgba(0,0,0,0.05),0px 4px 5px 0px rgba(0,0,0,0.05),0px 1px 10px 0px rgba(0,0,0,0.05)",
                }}
            >
                <StyledToolbar>
                    <Box
                        sx={(theme) => ({
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                        })}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="more"
                        >
                            <MoreVerticalIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            margin: "10px 0",
                            fontWeight: "bold",
                        }}
                    >
                        Select queue
                    </Typography>
                </StyledToolbar>
            </AppBar>
            <Grid
                container
                disableEqualOverflow
                sx={{
                    height: "100vh",
                    justifyContent: "center",
                }}
            >
                <Grid xs={12}>{children}</Grid>
            </Grid>
        </Box>
    );
};
