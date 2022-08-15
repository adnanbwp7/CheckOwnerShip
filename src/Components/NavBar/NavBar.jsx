import React, { useState } from 'react'
import { AppBar, Box, CardMedia, Typography, Drawer } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../../assets/logo.png";

const pages = ["Home", "StakeNiFTi", "Contact US"];

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const handleOpenNavMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="static" sx={{
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(180deg, #000, rgba(0, 0, 0, 0.36))",
            }}>
                <Container maxWidth="lg" sx={{ display: 'flex', padding: 0, margin: "5px auto", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{
                                display: { xs: 'flex', sm: 'none' },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <CardMedia
                            component="img"
                            alt="logo"
                            sx={{
                                display: "flex",
                                width: "50px",
                                height: 'auto',
                                justifyContent: "center",
                            }}
                            image={logo}
                        />
                        <Drawer
                            open={open}
                            anchor={"left"}
                            onClick={() => setOpen(false)}
                            PaperProps={{
                                sx: {
                                    backgroundColor: "#000000b3",
                                    width: "90%",
                                    maxWidth: '425px',
                                    paddingTop: "87px",
                                    gap: "10px"

                                }
                            }}
                            sx={{ background: 'transparent', display: { xs: "flex", sm: "none" }, padding: "20px 0" }}
                        >
                            {pages.map((page, index) => (
                                <Typography
                                    key={index}
                                    onClose={handleCloseNavMenu}
                                    to={`/${page.toLowerCase()}`}
                                    style={{
                                        width: '100%',
                                        maxWidth: "400px",
                                        padding: '5px',
                                        display: "flex",
                                        textTransform: "capitalize",
                                        justifyContent: 'center', alignItems: 'flex-start',
                                        color: "#FFFFFF", margin: "5px auto", fontFamily: "'Play', sans-serif",

                                    }}>
                                    {page}
                                </Typography>
                            ))}
                        </Drawer>
                    </Box>
                    <Box sx={{ flexGrow: 0, gap: '34px', display: { xs: 'none', sm: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    fontWeight: 700, fontSize: "16px", textTransform: "capitalize", width: 'max-content', color: "#fff", fontFamily: "'Inter', sans-serif;", lineHeight: "24px",
                                    '&:hover': {
                                        color: "#fefefe",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}

                    </Box>

                </Container>
            </AppBar>
        </>
    )
}

export default NavBar