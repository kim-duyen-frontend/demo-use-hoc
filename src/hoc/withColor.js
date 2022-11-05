import React from 'react';

const GetRandomColors = () => {
    const listColors = ["red", "pink", "orange", "blue", 'green', "yellow", "purple"];
    const randomColors = listColors[Math.floor(Math.random() * 5)];
    return randomColors;
}
const withColor = (WrappedComponent) => {
    const color = GetRandomColors();
    return (props) => (
        <div style={{ color: color }}>
            <WrappedComponent {...props} />
        </div>
    )
};

export default withColor;