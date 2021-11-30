import { Fragment } from "react";
import { Container , Grid  } from "@mui/material";
import Voicecard from './Voicecard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import PublicIcon from '@mui/icons-material/Public';


const Cardcontainer = ()=>{
    return (
        <Fragment>
            <Container sx={{py:12,width:"90%"}}>
                <Grid container spacing={4} >
                    
                    <Voicecard
                    voicecardcontent="The application provides CRM-like management for your clients. Enter contact details, notes or add custom fields. Basic project and task management is also available."
                     Voicecardicon={<AttachMoneyIcon sx={{fontSize:80,color:"#429ae1"}} />} />
                     <Voicecard
                     voicecardcontent="You can customize InvoicePlane to make sure it fits your needs: select from different themes, set amount formats, modify email and PDF templates or many more."
                     Voicecardicon={<SupervisorAccountIcon sx={{fontSize:80,color:"#429ae1"}} />} />
                     
                    <Voicecard
                     voicecardcontent="InvoicePlane is a solid application to manage your complete billing circle: from quotes over invoices to payments."
                     Voicecardicon={<PublicIcon sx={{fontSize:80,color:"#429ae1"}} />} />
                    
                     
                     <Voicecard
                     voicecardcontent="Let your clients pay the invoices by using one of 25 different online payment providers like PayPal, Stripe or even using Bitcoin via Coinbase."
                     Voicecardicon={<SettingsIcon sx={{fontSize:80,color:"#429ae1"}} />} />
                     
                     <Voicecard
                     voicecardcontent="InvoicePlane is translated into many languages by community members and more languages are coming soon."
                     Voicecardicon={<PaymentIcon sx={{fontSize:80,color:"#429ae1"}} />} />
                     
                </Grid>
            </Container>
        </Fragment>
    )
}

export default Cardcontainer;