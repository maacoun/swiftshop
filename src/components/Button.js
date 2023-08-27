import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
    return (
        <>
            <Link to={props.link} className="btn">{props.text}</Link>
        </>
    );
}

export default Button;