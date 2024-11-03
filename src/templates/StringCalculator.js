import React, { useState } from 'react';
import './StringCalculator.css';

const StringCalculator = () => {
    const [numbers, setNumbers] = useState('');
    const [result, setResult] = useState('');

    const localCalculate = (input) => {
        const numList = input.match(/-?\d+/g);
        if (!numList) return 0;

        const negatives = numList.map(Number).filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negative numbers are not allowed: ${negatives.join(', ')}`);
        }

        return numList.reduce((sum, num) => sum + Number(num), 0); // Sum the numbers
    };

    const handleCalculate = (event) => {
        event.preventDefault();
        const trimmedData = numbers.trim();
        if (!trimmedData) {
            setResult('0');
            return;
        }

        try {
            const calculationResult = localCalculate(trimmedData);
            setResult(`Result: ${calculationResult}`);
        } catch (error) {
            setResult('Error: ' + error.message);
        }
    };

    return (
        <div>
            <header>
                <h1>Simple String Calculator</h1>
            </header>
            <main>
                <form id="dataForm" onSubmit={handleCalculate}>
                    <label htmlFor="numbers">Enter the string:</label>
                    <input
                        type="text"
                        id="numbers"
                        name="numbers"
                        value={numbers}
                        onChange={(e) => setNumbers(e.target.value)}
                        placeholder="e.g., 1,2,3"
                    />
                    <button type="submit">Calculate</button>
                </form>

                <div id="responseContainer">
                    <div>{result}</div>
                </div>
            </main>
        </div>
    );
};

export default StringCalculator;
