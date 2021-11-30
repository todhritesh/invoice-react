import { Container } from "@mui/material";
import { Fragment } from "react";
import Invoice from './images/invoicelaptop.jpg';

export default function Laptopimg(){
    return (
        <Fragment>
            <Container maxWidth="lg" sx={{mt:10}}>
                <img width="100%" src={Invoice} />

            </Container>
        </Fragment>
    )
}