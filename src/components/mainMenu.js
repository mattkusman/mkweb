import {AppBar, Box, Container, Drawer, Icon, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import {lightGreen} from "@mui/material/colors";
import CottageIcon from '@mui/icons-material/Cottage';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const MainMenu = (open, changeOpen) => {

    return (
        <AppBar position="static" sx={{backgroundColor: '#ACBFA4', color: '#262626', height: '7vh'}}>
                <Toolbar disableGutters={true} sx={{marginLeft: '16px', marginRight:'16px', display: 'flex', alignItems: 'center'}}>
                    <CottageIcon sx={{ mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '-.05rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        MK
                    </Typography>
                    <MenuItem component={Link} to="/">
                        <Typography textAlign="center" fontFamily="monospace" fontWeight={500} >Home</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/about">
                        <Typography textAlign="center" fontFamily="monospace" fontWeight={500}>About</Typography>
                    </MenuItem>
                </Toolbar>
        </AppBar>
    )
}

export default MainMenu;