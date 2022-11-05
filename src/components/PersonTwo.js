import withHOC from "../hoc/withHOC";

function PersonTwo({ number, handleIncrementMoney }) {
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

export default withHOC(PersonTwo);