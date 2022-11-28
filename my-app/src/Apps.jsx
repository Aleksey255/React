import React from 'react'

export default function Apps(props) {
  return (
    <div>
        <h1>
            Hello, {props.name}<br></br>
            Тебе есть {props.age}?<br></br>
            Твоя фамилия {props.lastName}?
        </h1>
    </div>
  )
}
