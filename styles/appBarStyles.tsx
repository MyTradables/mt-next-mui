import { makeStyles } from '@mui/styles';

const appBarStyles = makeStyles({
    navbar: {
        backgroundColor: '#add8e6',
        '& a': {
            marginLeft: 10,
            textDecoration: 'none',
        }
    },
    brand: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        display: 'flex',
    },
    brandTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px'
    },
    grow: {
        flexGrow: 1
    },
});

export default appBarStyles;