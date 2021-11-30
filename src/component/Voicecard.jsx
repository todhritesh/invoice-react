import { Grid , Card, CardContent, Typography} from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const Voicecard = (props) => {
    return (
        <React.Fragment>
            <Grid item lg={6} sx={{mx:'auto'}}>
                <Card sx={{maxWidth:"100%",border:0, boxShadow: "none"}}>
                    <Box sx={{pt:2,width:"100%",display:'flex',justifyContent:'center'}}>
                        
                        {props.Voicecardicon}
                    </Box>
                    <CardContent>
                        <Typography align="center" variant="h5">
                        Quotes, Invoices, Payments
                        </Typography>
                        <Typography align="center" variant="subtitle1">
                        nvoicePlane is a solid application to manage your complete billing circle: from quotes over invoices to payments.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}

export default Voicecard;