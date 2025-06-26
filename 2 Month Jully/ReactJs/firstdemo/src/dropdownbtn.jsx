import React from 'react';

const dropdownbtn = ({dropdownbtn}) => {
    return (
        <div classname="dropdown">
            <h2 class="dropdown-title">{dropdownbutton}</h2>
            <button classname="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button-1
            </button>
            <div classname="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a classname="dropdown-item" href="#">Action</a>
                <a classname="dropdown-item" href="#">Another action</a>
                <a classname="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
    )
}

export default dropdownbtn