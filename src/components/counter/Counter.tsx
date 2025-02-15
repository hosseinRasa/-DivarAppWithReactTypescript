import { ReactNode } from "react"
import './Counter.css'
type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}
const Counter = ({ setCount, children } : CounterProps) => {
    // const [count, setCount] = useState<number>(1)
  return (
    <article>
        
           {children}
        
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