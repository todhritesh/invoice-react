import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CardMedia ,Container, Typography } from '@mui/material';

const Planecard = () => {
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{mt:10}}>
                <Box component={Paper} sx={{p:4,bgcolor:"#429ae1",height:"234",width:"100"}}>
                    <Typography variant="h6" align="center" color="white">
                    InvoicePlane is a self-hosted open source application for managing your quotes, invoices, clients and payments.
                Downloaded more than 100.000 times from 193 countries.
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Planecard;