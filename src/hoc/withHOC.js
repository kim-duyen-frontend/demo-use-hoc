import React, { useState } from 'react';

function withHOC(WrappedComponent) {
    function IncrementMoney() {
        const [number, setNumber] = useState(10);

        const handleIncrementMoney = () => {
            setNumber((prev) => prev * 2);
        }
        return <WrappedComponent
            number={number}
            handleIncrementMoney={handleIncrementMoney}
        />
    }
    return IncrementMoney;
}

export default withHOC;