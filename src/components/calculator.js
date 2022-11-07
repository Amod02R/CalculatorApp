import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputscreen.js";
import Button from "./button";

import { useState } from "react";

function Calculator() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
 
    const handleClick = (event) => {

        const value = event.target.value;

        switch(value) {
            case '=' : {

                if(question !== '')
                {
                    var ans = '';

                    try {
                        ans = eval(question);
                    }
                    catch(err)
                    {
                        setAnswer("Math error");
                    }

                    if (ans===undefined){
                        setAnswer("Math error");
                    }
                    else {
                        setAnswer(ans);
                        
                    }                    
                }
                break;

            }
            case 'Clear' :{
                setQuestion('');
                setAnswer('');
                break;
            }

            case 'Delete' : {
                var str = question;
                str = str.substring(0, str.length-1);
                setQuestion(str);
                break;
            }
            
            default: {
                setQuestion(question+value);
                break;

            }
        }

    }

    return (
        <div className="frame">
            <CalculatorTitle value="Calculator" className="calculator-title" />
            <div className="mainCalc">
                <OutputScreen question = {question} answer = {answer} />
                <div className="button-row">
                    <Button label={'Clear'} handleClick = { handleClick } />
                    <Button label={'Delete'} handleClick = { handleClick }/>
                    <Button label={'%'} handleClick = {  handleClick }/>
                    <Button label={'/'} handleClick = { handleClick }/>
                </div>
                <div className="button-row">
                    <Button label={'7'} handleClick = { handleClick } />
                    <Button label={'8'} handleClick = { handleClick }/>
                    <Button label={'9'} handleClick = { handleClick } />
                    <Button label={'*'} handleClick = { handleClick }/>
                </div>
                <div className="button-row">
                    <Button label={'4'} handleClick = { handleClick }/>
                    <Button label={'5'} handleClick = { handleClick }/>
                    <Button label={'6'} handleClick = { handleClick }/>
                    <Button label={'-'} handleClick = { handleClick }/>
                </div>
                <div className="button-row">
                    <Button label={'1'} handleClick = { handleClick }/>
                    <Button label={'2'} handleClick = { handleClick }/>
                    <Button label={'3'} handleClick = { handleClick }/>
                    <Button label={'+'} handleClick = { handleClick }/>
                </div>
                <div className="button-row">
                    <Button label={'0'} handleClick = { handleClick }/>
                    <Button label={'='} handleClick = { handleClick }/>
                </div>


            </div>
        </div>
    );
}

export default Calculator;