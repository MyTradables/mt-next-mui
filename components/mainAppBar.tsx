import { NextPage } from "next";
import Image from 'next/image'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import {
    styled,
    alpha,
} from '@mui/material/styles';

import MainAppBarSearch from "./mainAppBarSearch";
import MainAppBarMenu from "./mainAppBarMenu";

const MainAppBar: NextPage = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky' sx={{ backgroundColor: "lightblue" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="mt-logo"
                        sx={{ mr: 2 }}
                    >
                        <Image
                            src='/img/mt-logo-color.png'
                            alt='mt-logo'
                            height={30}
                            width={60}
                        />
                    </IconButton>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MyTradables
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <MainAppBarSearch />

                    <Box sx={{ flexGrow: 1 }} />

                    <MainAppBarMenu />

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MainAppBar;
