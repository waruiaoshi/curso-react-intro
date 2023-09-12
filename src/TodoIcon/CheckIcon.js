import React from "react";
import { TodoIcon } from "./index.js"

function CheckIcon(props) {
    return (
        <TodoIcon
            type='check'
            color={props.completed ? 'gray' : 'green'}
            onClick={props.onClick}

        />
    );
}

export { CheckIcon }