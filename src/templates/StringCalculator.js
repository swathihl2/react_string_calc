import React, { useState } from 'react';
import './StringCalculator.css';

const StringCalculator = () => {
    const [numbers, setNumbers] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const trimmedData = numbers.trim();
        if (!trimmedData) {
            setResult('0');
            return;
        }

        const url = 'https://shl-server.onrender.com/stringcalc';
        setLoading(true);
        setResult('');

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ numbers: trimmedData }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            const data = await response.text();
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
            setResult('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <header>
                <h1>Simple String Calculator</h1>
            </header>
            <main>
                <form id="dataForm" onSubmit={handleSubmit}>
                    <label htmlFor="numbers">Enter the string:</label>
                    <input
                        type="text"
                        id="numbers"
                        name="numbers"
                        value={numbers}
                        onChange={(e) => setNumbers(e.target.value)}
                    /><br /><br />
                    <input type="submit" value="Submit" />
                </form>

                <div id="responseContainer">
                    {loading ? (
                        <div id="loading">Loading...</div>
                    ) : (
                        <div id="response">{result}</div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default StringCalculator;
