import './StringCalculator.css';

const StringCalculator = () => {

    return (
        <div>
            <header>
                <h1>Simple String Calculator</h1>
            </header>
            <main>
                <form id="dataForm">
                    <label htmlFor="numbers">Enter the string:</label>
                    <input
                        type="text"
                        id="numbers"
                        name="numbers"
                    /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </main>
        </div>
    );
};

export default StringCalculator;
