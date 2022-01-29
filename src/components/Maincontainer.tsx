import React from "react";
import { Container, Box, Button } from "@mui/material";

export default function MainContainer() {
    return(
    <Container className="MainContainer" maxWidth="sm">
        <Box component="span" 
            sx={{
                p: 2,
                border: '1px dashed grey',
                width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
                 },
                }}>
            <Button sx={{color: 'white'}}>Save</Button>
        </Box>
    </Container>
    )
};