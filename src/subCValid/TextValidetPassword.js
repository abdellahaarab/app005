import React from 'react'
import "./TextValidetPassword.css"

function TextValidetPassword(props) {
  return (
    <div className={props.color}>
        {props.text}
    </div>
  )
}

export default TextValidetPassword