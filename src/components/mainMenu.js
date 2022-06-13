import {AppBar, Box, Container, Drawer, Icon, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import {styles} from "./styles";
import {lightGreen} from "@mui/material/colors";
import CottageIcon from '@mui/icons-material/Cottage';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const MainMenu = (open, changeOpen) => {

    return (
        <AppBar position="static">
                <Toolbar disableGutters={true} sx={{marginLeft: '16px', marginRight:'16px'}}>
                    <CottageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '-.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MK
                    </Typography>
                    <MenuItem key={"home"}>
                        <Typography textAlign="center" fontFamily="monospace" fontWeight={500} >Home</Typography>
                    </MenuItem>
                    <MenuItem key={"about"}>
                        <Typography textAlign="center" fontFamily="monospace" fontWeight={500}>About</Typography>
                    </MenuItem>
                </Toolbar>
        </AppBar>
    )
}

export default MainMenu;