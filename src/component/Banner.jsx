import { Fragment } from "react";
import Box from '@mui/material/Box'
import { CardMedia } from "@mui/material";
import Invoicebg from './images/invoiceimg.jpg';

const styles = {
    boximg: {
        backgroundImage: `url(${Invoicebg})`,
        backgroundSize:"cover",
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
    }
};


const Banner = () => {
    return (
        <Fragment>
            <Box 
            sx={{height:500,mt:10,width:"100%",objectFit:'cover'}}
            style={styles.boximg}
            >
                <Box sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img height="300"  src="https://www.invoiceplane.com/assets/img/logo.svg"></img>

                </Box>
            </Box>
        </Fragment>
    )
}

export default Banner;