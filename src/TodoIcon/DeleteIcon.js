import React from "react";
import { TodoIcon } from "./index.js"

function DeleteIcon(props) {
    return (
        <TodoIcon
            type='delete'
            color='red'
            onClick={props.onClick}

        />
    );
}

export { DeleteIcon }