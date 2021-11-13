import { NextPage } from "next";
import NextLink from 'next/link';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from "@mui/material";
import appBarStyles from "../styles/appBarStyles";
import MainAppBarMenu from "./mainAppBarMenu";
import MainAppBarSearch from "./mainAppBarSearch";


const MainAppBar: NextPage = () => {
    const classes = appBarStyles();
    return (
        <Box className={classes.grow}>
            <AppBar position='sticky' className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link href="">
                            <div className={classes.brand}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="mt-logo"
                                    sx={{ mr: 1.5 }}
                                >
                                    <Image
                                        src='/img/bee.svg'
                                        alt='mt-logo'
                                        height={50}
                                        width={70}
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
