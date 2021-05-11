import React from 'react'
import './Button.scss'
const Button = ({text, color}) => {
    return (
        <button style = {{backgroundColor:color}} className="button">{text}</button>
    )
}

export default Button
