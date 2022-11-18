import React, {useState} from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider (props) {

    const [color, setColor] = useState("light")

    // const toggleTheme = () => {
    //     setColor(prevColor => prevColor === "light"? "dark": "light")
    // }
    const toggleTheme = (color) => {
        setColor(color)
    }

    return(
        <ThemeContext.Provider value={{
                color,
                toggleTheme
            }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}