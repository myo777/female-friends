import React from 'react';
import { Link } from 'react-router-dom';
//import PageNotFound from '../assets/images/PageNotFound.png';

const NotFound = () => (
<div>
    <img src={PageNotFound} 
    style={{display: 'block', margin: 'auto'}}
    alt="404 page not found" />
    <center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default NotFound;
