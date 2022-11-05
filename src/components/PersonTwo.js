function PersonTwo() {
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