import React, { FC, ReactNode } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface ILayout {
    children?: ReactNode;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "white",
    color: "black",
    borderBottomRightRadius: "12px 12px",
    borderBottomLeftRadius: "12px 12px",
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
            <AppBar position="static">
                <StyledToolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            margin: "20px 0",
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
