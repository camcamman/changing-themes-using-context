import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

export default function Main () {

    const {color} = useContext(ThemeContext)

    return (
        <div className={`main ${color}Main`}>
            <p>Click the button to toggle the theme</p>
        </div>
    )
}