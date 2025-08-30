import React, { useReducer } from 'react'

const ExampleUseReducer = () => {

    const reducer = (currentValue, payload) => {
        console.log(currentValue, "currentValue ==>");
        console.log(payload, "payload ==>");

        if (payload.type === "multiply"){
            return currentValue * 5;
        }else{
         return currentValue / 5;
    }
            return currentValue;
    }

    const [count, dispatch] = useReducer(reducer, 10) // make initial value zero

    const handleMultiply = () => {
        try {
            dispatch({type : "multiply"});
        
        } catch (error) {
            console.log(error)
        }
    }

    const handleDivision = () => {
        try {
            dispatch({type : "division"});

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h2>count : {count}</h2>
            <button onClick={handleMultiply}>Multiply</button>
            <br/>
            <br/>
            <button onClick={handleDivision}>Division</button>
        </div>
    );
};

export default ExampleUseReducer;