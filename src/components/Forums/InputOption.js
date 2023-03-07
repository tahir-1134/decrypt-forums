import React from 'react'
import "./InputOption.css"

function InputOption({Icon, title, color,onClick,status}) {
  return (
    <div onClick={onClick} className='inputOption'>
        <Icon style = {{color: color}} />
        <h4 style = {{color: color}}>{title} {status}</h4>
    </div>
  )
}

export default InputOption