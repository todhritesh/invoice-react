import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Planecard from './Planecard';
import Laptopimg from './Laptopimg';
import Cardcontainer from './Cardcontainer';

const Layout = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Banner/>
            <Planecard/>
            <Laptopimg/>
            <Cardcontainer/>
        </React.Fragment>
    )
}

export default Layout;