import React, { useState } from 'react';

export const Calc = () => {
    const [display, setDisplay] = useState("")

    const  AggiungiVal = (e) => {
        setDisplay(display+e.target.value)
    }

    const  Reset = (e) => {
        setDisplay("")
    }


    const  Calcola = (e) => {
        setDisplay(eval(display))
    }

    const AggiungiOp = (e) => {
        if(e.target.value = "÷"){
            setDisplay(display+"/")
        }else if(e.target.value = "x"){
                setDisplay(display+"*")
            }
    }

    return (
        <div className="mainContainer">
            <h1 id="titolo">Calcolatrice V2</h1>
            <div className="calcContainer">
            <table>
                <tr>
                    <td colspan="3"><input type="text" value={display} disabled/></td>
                    <td><input type="button" className="clear" value="C" onClick={Reset}/></td>
                </tr>
                <tr>
                    <td><input type="button" value="1" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="2" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="3" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="-" onClick={AggiungiVal} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="4" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="5" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="6" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="+" onClick={AggiungiVal} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="7" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="8" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="9" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="÷" onClick={AggiungiOp} /></td>
                </tr>
                <tr>
                    <td><input type="button" value="." onClick={AggiungiVal} /></td>
                    <td><input type="button" value="0" onClick={AggiungiVal} /></td>
                    <td><input type="button" value="=" onClick={Calcola} /></td>
                    <td><input type="button" value="x" onClick={AggiungiOp} /></td>
                </tr>
            </table>
            </div>
        </div>
    )
}

