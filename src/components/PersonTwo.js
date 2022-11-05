import React, { useState } from 'react';

function PersonTwo() {
    const [number, setNumber] = useState(10);

    const handleIncrementMoney = () => {
        setNumber((prev) => prev * 2);
    }
    return (
        <div>
            <h1>Hello Jimmy</h1>
            <p>
                <span>${number}</span> &nbsp;
                <button onClick={handleIncrementMoney}>Increment</button>
            </p>
        </div>
    );
}

export default PersonTwo;