import { useState } from "react"
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState<number>(1)
  return (
    <article>
        <h2>
            Count is : {count}
        </h2>
        <div id="buttonGroup">

        <button id="plus-counter" onClick={() => {setCount(count => ++count )}}>
            +
             </button>
        <button id="plus-counter" onClick={() => {setCount(count => --count )}}>
            -
             </button>
        </div>
    </article>
  )
}

export default Counter