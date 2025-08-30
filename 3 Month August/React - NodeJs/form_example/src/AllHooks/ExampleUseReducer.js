import React, { useReducer } from 'react'

const ExampleUseReducer = () => {

    const reducer = (currentValue, payload) => {
        console.log(currentValue, "currentValue ==>");
        console.log(payload, "payload ==>");

        if (payload.type === "add"){
            return currentValue + 5;
        }else{
         return currentValue - 5;
    }
            return currentValue;
    }

    const [count, dispatch] = useReducer(reducer, 0)

    const handleAdd = () => {
        try {
            dispatch({type : "add"});
        
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubstraction = () => {
        try {
            dispatch({type : "substraction"});

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h2>count : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <br/>
            <br/>
            <button onClick={handleSubstraction}>Substraction</button>
        </div>
    );
};

export default ExampleUseReducer;