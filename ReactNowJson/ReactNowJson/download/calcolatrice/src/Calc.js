import React, { useState } from 'react';

export const Calc = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [op, setOp] = useState(1)
    const [ris, setRis] = useState()

    const  calcola = () => {
        if(op==4){
            setRis(num1/num2)
        }else if(op==3){
                setRis(num1*num2)
            }else if(op==2){
                    setRis(num1-num2)
                }else{
                    setRis(parseFloat(num1)+parseFloat(num2))
                }

    }

    return (
        <div className="mainContainer">
            <h1 id="titolo">Calcolatrice</h1>
            <div className="calcContainer">
                <div>
                    <input type="text" placeholder="Num1" onChange={(e) => setNum1(e.target.value)}/>
                    <select className="mioSelect" onChange={(e) => setOp(e.target.value)}>
                        <option value="1">+</option>
                        <option value="2">-</option>
                        <option value="3">*</option>
                        <option value="4">/</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Num2" onChange={(e) => setNum2(e.target.value)}/>
                    <button onClick={calcola}>vai</button>
                </div>
                <div>
                    <input type="text" id="ris" placeholder="Risultato" value={ris} disabled/>
                </div>
            </div>
        </div>
    )
}

