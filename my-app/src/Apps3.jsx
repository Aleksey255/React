import { useState, useEffect } from "react"

export default function Apps3() {
  
    const [click, setClick] = useState(0)
    useEffect (() => {
        document.title = `Вы нажали на ${click} заголовок`
    })
  return (
    <div>
        <p>
            Вы нажали {click} раз
        </p>
        <button onClick={() => setClick (click + 1)}>Нажми на меня</button>
    </div>
  )
}
