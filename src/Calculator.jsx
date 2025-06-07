import { useState, useEffect } from 'react';
import './Calculator.css';


// const performOperation = (operator, operand1, operand2) => {
//     switch (operator) {
//         case '+':
//             return operand1 + operand2;
//         case '-':
//             return operand1 - operand2;
//         case '*':
//             return operand1 * operand2;
//         case '/':
//             if(operand2 === 0){
//                 if(operand1 === 0){
//                     return NaN;
//                 }
//                 return Infinity;
//             }
//             return operand1 / operand2;
//         default: throw new error("Unknown operator!");
//     }
// };

// const calculateExpression = (expression) => {
//     if(!expression) {
//         return 'Error';
//     }
//     const token = expression.match(/(\d+\.?\d*) | (\+|-|\*|\/)/g);
//     if(!token || token.length === 0){
//         return 'Error';
//     }
//     const outputQueue = [];
//     const operatorStack = [];
//     for(const token of tokens){
//         if(/\d+\.?\d*/.test(token)){
//             outputQueue.push(parseFloat(token));
//         } else {
//             while(operatorStack.length > 0 && operatorPrecedence[operatorStack[operatorStack.length - 1]] >= operatorPrecedence[token]){
//                 outputQueue.push(operatorStack.pop());
//             }
//         }
//     }
//     while(operatorStack.length > 0){
//         outputQueue.push(operatorStack.pop());
//     }

//     const valueStack = [];
//     for(const token of outputQueue) {
//         if(typeof token === 'number') {
//             valueStack.push(token);
//         }
//         else{
//             if(valueStack.length < 2) {
//                 return 'Error';
//             }
//             const operand2 = valueStack.pop();
//             const operand1 = valueStack.pop();
//             const result = performOperation(token, operand1, operand2);

//             if(result === Infinity) {
//                 return 'Infinity';
//             }
//             if(isNaN(result)){
//                 return 'NaN';
//             }
//             if(result === -Infinity){
//                 return 'Infinity';
//             }
//             valueStack.push(result);
//         }
//     }
//     if(valueStack.length !== 1) {
//         return 'Error';
//     }
//     return valueStack[0].toString();
// };

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if(value === '='){
            if(input === ''){
                setResult('Error');
                return;
            }
            try{
                // const calculated = calculateExpression(input);
                setResult(eval(input).toString());
            } catch(error){
                setResult('Error');
            }
        } else if(value == 'C'){
            setInput('');
            setResult('');
        }
        // else if(['+', '-', '*', '/'].includes(value)){
        //     setResult('');
        //     if(input.length === 0 && (value === '*' || value === '/')){
        //         return;
        //     }
        //     const lastChar = input[input.length - 1];
        //     if(['+', '-', '*', '/'].includes(lastChar)){
        //         setInput(input.slice(0, -1) + value);
        //     } else {
        //         setInput((prevInput) => prevInput + value);
        //     }
        // } 
         else {
            if(result && !['+', '-', '*', '/'].includes(value)) {
                setInput(value);
                setResult('');
            } else {
                setInput((prevInput) => prevInput + value);
                setResult('');
            }
        }
    };

    return (
        <div className="calculator-container">
            <h1>React Calculator</h1>
            <input 
            type="text"
            className="calculator-display"
            value={input}
            readOnly
            />
            <div className="calcualtor-result">{result}</div>
            <div className='calculator-buttons'>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('+')}>+</button>

                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>

                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('*')}>*</button>

                <button onClick={() => handleClick('C')}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('=')}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;