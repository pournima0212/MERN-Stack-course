
import React from 'react';

const Buttons = ({ title }) => {
    return (
        <div>
            <h5 class="Button-title">{title}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Left</button>
                <button type="button" class="btn btn-secondary">Middle</button>
                <button type="button" class="btn btn-secondary">Right</button>
            </div>
        </div>
    )
}

export default Card
