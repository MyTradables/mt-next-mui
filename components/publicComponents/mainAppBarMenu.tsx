import { NextPage } from "next";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const MainAppBarMenu: NextPage = () => {

    return (
        <>
            <Button
                variant="text"
                size="large"
                sx={{
                    height: 54,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                <Link href="tradables"> Tradables </Link>
            </Button>
            <Button
                variant="text"
                size="large"
                sx={{
                    height: 54,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                <Link href="categories"> Categories </Link>
            </Button>
            <Button
                variant="text"
                size="large"
                sx={{
                    height: 54,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                <Link href="aboutus"> About us </Link>
            </Button>

            <Button
                variant="text"
                size="large"
                sx={{
                    height: 54,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                <Link href="pricing">  Pricing</Link>
            </Button>

            <Box sx={{ flexGrow: 1 }} />

            <Button
                variant="outlined"
                size="large"
                sx={{
                    height: 54,
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                }}
            >
                <Link href="login">Register/Login</Link>
            </Button>
        </>)
}

export default MainAppBarMenu;
