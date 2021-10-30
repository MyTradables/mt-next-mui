import { NextPage } from "next";
import NextLink from 'next/link';
import Image from 'next/image'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";

import MainAppBarSearch from "./MainAppBarSearch";
import MainAppBarMenu from "./MainAppBarMenu";
import appBarStyles from "../styles/appBarStyles";


const MainAppBar: NextPage = () => {
    const classes = appBarStyles();
    return (
        <Box className={classes.grow}>
            <AppBar position='sticky' className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <div className={classes.brand}>
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
                                    className={classes.brandTitle}
                                >
                                    MyTradables
                                </Typography>
                            </div>
                        </Link>
                    </NextLink>

                    <Box className={classes.grow} />

                    <MainAppBarSearch />

                    <Box className={classes.grow} />

                    <MainAppBarMenu />

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default MainAppBar;
