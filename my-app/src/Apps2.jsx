import { useState } from "react";

export default function Apps2() {
    const [counter, setCounter] = useState(0)
    const [counters, setCounters] = useState(true)
    const handleInc = () => {
        if (counter >= 10) {
            alert('Стоп')
        } else setCounter(counter + 1)

    }
    return (
        <div className="Apps2">
            <h1>
                Вы кликнули {counter} раз
            </h1>
            <button onClick={handleInc}>
                Увеличить
            </button>
            {counters ?
                <div>Правда
                    <button onClick={() => setCounters(!counters)}>Правда</button>
                </div> 
                    : 
                <div>Ложь
                    <button onClick={() => setCounters(!counters)}>Ложь</button>
                </div>
            }
        </div>
    )
}
