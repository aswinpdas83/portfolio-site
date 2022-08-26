import React from "react";
import { Link } from "react-router-dom";
const PortfolioPage = (props) => (
    <div>
        <h1>My work</h1>
        <p>check out the stuff I've Done.</p>
        <Link to="/portfolio/1">Item one</Link><br />
        <Link to="/portfolio/2">Item two</Link>

    </div>

);

export default PortfolioPage;