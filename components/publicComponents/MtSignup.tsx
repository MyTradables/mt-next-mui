import { NextPage } from "next";
import Image from 'next/image'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const MtSignup: NextPage = () => {
    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 20 }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image
                    src='/img/bee.svg'
                    alt='mt-logo'
                    height={100}
                    width={140}
                />
                <Typography component="h1" variant="h5">
                    MyTradables
                </Typography>
            </Box>
        </Container>
    );
}

export default MtSignup;
