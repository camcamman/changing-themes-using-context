import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

export default function MainButton () {
    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className="button">
            <button onClick={toggleTheme}>the theme is {color} click me if you want to change it</button>
        </div>
    )
}