import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";


export default function Head () {
    const {color} = useContext(ThemeContext)

    return(
        <div className={`header ${color}Head`}>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    )
}