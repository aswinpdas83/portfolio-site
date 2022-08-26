import React from "react";

const PortfolioItemPage = (props) => (
    <div>
        <h1>The item I've Done</h1>
        <p>This Page is for the item page with id: {props.match.params.id}</p>
    </div>

);

export default PortfolioItemPage;