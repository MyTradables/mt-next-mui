import { NextPage } from "next";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
                About us
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
                Pricing
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
                Register/Login
            </Button>
        </>)
}

export default MainAppBarMenu;
