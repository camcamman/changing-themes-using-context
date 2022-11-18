import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

export default function Footer () {
    const {color} = useContext(ThemeContext)

    return(
        <div className={`foot ${color}Foot`}>
            <p>This is the footer of the page</p>
        </div>
    )
}
