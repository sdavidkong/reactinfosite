import React from "react";
import Logo from "../logo.svg"

export default function Navbar() {
    return (
    <nav className="nav">
        <img src={Logo} width="130px" alt="" className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
        )
}