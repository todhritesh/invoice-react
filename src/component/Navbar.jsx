import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar , Box ,ButtonGroup ,Button , Stack} from '@mui/material';

const Navbar = ()=> {
    return (
        <React.Fragment>
            <Box sx={{flexGrow:1}} >
                <AppBar color="info" sx={{px:6,py:1}} >
                    <Toolbar > 
                        <Stack spacing={2} direction="row">
                            <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>Home</Button>
                            <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>About</Button>
                            <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>Demo</Button>
                            <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>Download</Button>
                            <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>Support</Button>
                            <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>Community</Button>
                        </Stack>
                        <Box sx={{flexGrow:1}} />
                        <Button variant="text" color="inherit" sx={{outline:0,border:0,fontWeight:"light",textTransform: 'capitalize'}}>v1.5.11</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}


export default Navbar;