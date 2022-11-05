function PersonOne() {
    return (
        <div>
            <h1>Hello John</h1>
            <p>
                <span>${number}</span> &nbsp;
                <button onClick={handleIncrementMoney}>Increment</button>
            </p>
        </div>
    );
}

export default PersonOne;