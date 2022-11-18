import React, {useContext, useState} from "react";
import {ThemeContext} from "./ThemeContext";

export default function Form () {
    const {toggleTheme} = useContext(ThemeContext)
    const [form, setForm] = useState({
        colorAndPlace: ""
    })

    function handleChange(event) {
        console.log(event)
        const {value} = event.target
        toggleTheme(value)
    }

    return(
        <div className="form">
            <form>
                <select
                onChange={handleChange}
                >
                    <option value="top light">Top Light</option>
                    <option value="top dark">Top Dark</option>
                    <option value="right light">Right Light</option>
                    <option value="right dark">Right Dark</option>
                    <option value="left light">Left Light</option>
                    <option value="left dark">Left Dark</option>
                </select>
            </form>
        </div>
    )
}