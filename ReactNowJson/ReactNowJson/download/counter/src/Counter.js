import React, { useState } from 'react';

export const Calc = () => {
    const [counterVal, setCounterVal] = useState(0)
    const [colorStyl, setColor] = useState("#333")

    const incrementa = () => {
        setCounterVal(counterVal+1)
        if(counterVal>=0){
            setColor("#34eb93")
        }
    }

    const decrementa = () => {
        setCounterVal(counterVal-1)
        if(counterVal<=0){
            setColor("#eb4034")
        }
    }

    const resetta = () => {
        setCounterVal(0)
        setColor("#333")
    }

    return (
        <div className="mainContainer">
            <h1 id="titolo">Counter</h1>
            <div className="counterContainer">
                <div>
                    <h1 className="counterValue" style={{ color: colorStyl }} >{counterVal}</h1>
                </div>
                <div>
                    <button onClick={incrementa}>Incrementa</button>
                    <button onClick={decrementa}>Descrementa</button>
                    <button onClick={resetta}>Resetta</button>
                </div>
            </div>
        </div>
    )
}

