import React from 'react'
import './Calculator.css'
import Display from './Display';
import Button from './Button';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
};

class Calculator extends React.Component {

    state = { ...initialState }

    constructor(props) {
        super(props) 
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState({
            ...initialState
        })
    };

    setOperation(operation) {
        if(this.state.current === 0) {
            this.setState({
                operation: operation, current: 1, clearDisplay: true
            })
            // agr sem ser 0 e sim 1, ou seja, o segundo número
            // o else smp vem quando clico na operação (pq o current vai pra 1)
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = this.state.values;
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`) // fazendo eval em cima disso ele soma, ele convereter o "+" para + 
            } catch(e) {
                values[0] = this.state.values[0]
                // se der erro
            }
            
            console.log(values)
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                // se o usuario colocou equals, vou continuar mechendo no valor 0 se botar outra operação quero mecher no segundo valor
                clearDisplay: !equals, 
                // so quero limpar se for diferente de equals
                values,
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return 
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;  
        
        const currentValue = clearDisplay ? "" : this.state.displayValue;

        const newDisplayValue = currentValue + n

        this.setState({
            displayValue: newDisplayValue, clearDisplay: false
        });

        if (n !== '.') {
            const i = this.state.current; // 0
            const newValue = parseFloat(newDisplayValue);
            const values = this.state.values; // unica diferença é que fica em string operator
            values[i] = newValue
            console.log(values)
        }

    }

    render() {
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
            
        )
    }
}

export default Calculator;
