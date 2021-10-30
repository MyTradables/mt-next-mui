import NextLink from 'next/link';
import React from 'react'
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Typography
} from '@mui/material'
import {
    Favorite,
    MoreVert,
    Share
} from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { Item } from '../utils/types';
import { Box } from '@mui/system';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
;

const TradablesDisplay = ({ itemData }: any) => {
    const [settings, setSettings] = React.useState(null);
    const [share, setShare] = React.useState(null);

    const openSettings = Boolean(settings);
    const openShare = Boolean(share);

    const handleSettingsClicked = (event: any) => {
        setSettings(event.currentTarget);
    };
    const handleShareClicked = (event: any) => {
        setShare(event.currentTarget);
    };
    const handleClosed = () => {
        setSettings(null);
        setShare(null);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{mt: 10}}>
            <Grid container spacing={3}>
                {itemData.map((item: Item) => (
                    <Grid item md={3} key={item.id} zeroMinWidth>

                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <NextLink href={`/traders/${item.owner}`} passHref>
                                        <Link>
                                            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                                {item.owner[0].toUpperCase()}
                                            </Avatar>
                                        </Link>
                                    </NextLink>
                                }
                                action={
                                    <IconButton
                                        aria-label="settings"
                                        id="settings-button"
                                        aria-controls="settings-menu"
                                        aria-haspopup="true"
                                        aria-expanded={openSettings ? "true" : undefined}
                                        onClick={handleSettingsClicked}
                                    >
                                        <MoreVert />
                                    </IconButton>
                                }
                                title={
                                    <NextLink href={`/tradables/${item.category}/${item.subCategory}/${item.id}`} passHref>
                                        <Link>{item.title}</Link>
                                    </NextLink>
                                }
                                subheader={`${item.city}, ${item.province}`}
                            />
                            <NextLink href={`/tradables/${item.category}/${item.subCategory}/${item.id}`} passHref>
                                <Link>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item.images[0]}
                                        alt={item.title}
                                    />
                                </Link>
                            </NextLink>

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.shortDescription}
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <Favorite />
                                </IconButton>
                                <IconButton
                                    aria-label="share"
                                    id="share-button"
                                    aria-controls="share-menu"
                                    aria-haspopup="true"
                                    aria-expanded={openShare ? "true" : undefined}
                                    onClick={handleShareClicked}
                                >
                                    <Share />
                                </IconButton>
                                <Button size="small" color="primary">
                                    offer trade
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))};

                <Menu
                    id="positioned-menu"
                    aria-labelledby="positioned-button"
                    anchorEl={settings}
                    open={openSettings}
                    onClose={handleClosed}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    <MenuItem onClick={handleClosed}>Trader</MenuItem>
                    <MenuItem onClick={handleClosed}>Offer maken</MenuItem>
                    <MenuItem onClick={handleClosed}>Favorieten</MenuItem>
                    <MenuItem onClick={handleClosed}>Berichten</MenuItem>
                </Menu>

                <Menu
                    id="share-menu"
                    aria-labelledby="share-button"
                    anchorEl={share}
                    open={openShare}
                    onClose={handleClosed}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <MenuItem onClick={handleClosed}>
                            <FacebookIcon />
                        </MenuItem>
                        <MenuItem onClick={handleClosed}>
                            <TwitterIcon />
                        </MenuItem>
                        <MenuItem onClick={handleClosed}>
                            <InstagramIcon />
                        </MenuItem>
                        <MenuItem onClick={handleClosed}>
                            <PinterestIcon />
                        </MenuItem>
                    </Box>
                </Menu>
            </Grid>
        </Box>
    )
}

export default TradablesDisplay;
