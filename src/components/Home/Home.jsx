import React from 'react';
import Navbar from '../Navbar/Navbar';
import Gadgets from '../Gadgets/Gadgets';
// import Laptop from '../Laptop/Laptop';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Gadgets></Gadgets>
           {/* <Laptop></Laptop> */}
        </div>
    );
};

export default Home;