import { NextPage } from "next";
import Image from 'next/image'
import * as React from 'react';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Link } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const createLoginButton = (
    icon: React.ReactElement<any, any>,
    title: string,
    margins: number[],
    onClick: any
) => {
    return <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: margins[0], mb: margins[1] }}
        onClick={onClick}
    >
        {icon}{title}
    </Button>
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();
    console.log('email: ', email, ' password: ', password);
};

const MtLogin: NextPage = () => {
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
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Box sx={{ display: 'flex', alignItems: 'right' }}>
                        <NextLink href="signup" passHref>
                            <Link>Sign Up</Link>
                        </NextLink>
                    </Box>


                    {createLoginButton(
                        <AssignmentIndIcon />,
                        'Sign In',
                        [3, 1],
                        null,
                    )}
                    {createLoginButton(
                        <FacebookIcon />,
                        'Sign in with Facebook',
                        [1, 1],
                        () => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook }),
                    )}
                    {createLoginButton(
                        <GoogleIcon />,
                        'Sign in with Google',
                        [1, 1],
                        () => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google }),
                    )}

                </Box>
            </Box>
        </Container>
    );
}

export default MtLogin;
