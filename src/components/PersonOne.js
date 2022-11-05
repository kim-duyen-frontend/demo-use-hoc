import withHOC from "../hoc/withHOC";

function PersonOne({ number, handleIncrementMoney }) {
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

export default withHOC(PersonOne);