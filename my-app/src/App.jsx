import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  const handleInc = () => {
    setCounter(counter + 1)
  }
  const handleMul = () => {
    setCounter(counter * 2)
  }
  const handleDiv = () => {
    setCounter(counter / 3)
  }
  const handleDec = () => {
    if (counter <= 0) {
      setCounter(0)
  } else {
      setCounter(counter - 1)
  }
}
const handleSbros = () => {
  setCounter(0)
}
return (

  <div className="App">
    <div className="container">
      <div className="row justify-content-centr">
        <div className="col-12 col-md-6">
          <div className="bg-light text-centr p-2 display-6 mb-2">
            Pro <b>Counter</b>
          </div>
          <div className="display-1 text-centr my-5 py-5">
            {counter}
            <div className="row">
              <div className="col">
                <button className="btn btn-primaty w-100" onClick={handleInc}>
                  Увеличить
                </button>
              </div>
              <div className="col">
                <button className="btn btn-succes w-100" onClick={handleDec}>
                  Уменьшить
                </button>
              </div>
              <div className="col">
                <button className="btn btn-succes w-100" onClick={handleMul}>
                  Умножить
                </button>
              </div>
              <div className="col">
                <button className="btn btn-succes w-100" onClick={handleDiv}>
                  Разделить
                </button>
              </div>
              <div className="col">
                <button className="btn btn-outline-cursor w-100" onClick={handleSbros}>
                  Сбросить
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;

// Хуки
// useEffect управление жизнненныйм циклом компонента
// useState управление состоянием компонента
// useCallback/mem можем мемонизирвоать функции либо
// какие-то объекты чтобы избежать лишних перерисовок
// useRef мы можем хранить каикие-то данные изменения которых не должно затрагивать перерисовоку компонента
// useReducer - он хранит в себе кеш.
// useContext - глобальное хранилище в которое мы можем поместить что-то и вытащить