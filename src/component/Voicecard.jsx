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
                            {props.voicecardheading}
                        </Typography>
                        <Typography align="center" variant="subtitle1">
                            {props.voicecardcontent}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    )
}

export default Voicecard;