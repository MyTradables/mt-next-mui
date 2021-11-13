import Head from 'next/head';
import { Container } from '@mui/material';
import layoutStyles from '../styles/layoutStyles';
import Footer from './footer';
import MainAppBar from './mainAppBar';

const Layout = ({ title, children }) => {
    const classes = layoutStyles();
    return (
        <div>
            <Head>
                <title>{title? `MyTradables.com - ${title}`: 'MyTradables.com'}</title>
            </Head>
            <MainAppBar />
            <Container className={classes.main}>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;
