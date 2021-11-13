import { makeStyles } from '@mui/styles';

const cardStyles = makeStyles({
    Card: {
        
        transition: 'all 0.5s',
        
        '&:hover': {
            transform: `scale(${1.015})`
         }
    }

});

export default cardStyles;