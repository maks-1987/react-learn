import React, { useState } from "react"

const Counter = function () {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div className="counter">
            <h1 className="counter__title">{counter}</h1>
            <button className="counter__button btn" onClick={increment}>Increment</button>
            <button className="counter__button btn" onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;