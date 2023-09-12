import '../TodoIcon/check.svg'
import { CheckIcon } from "../TodoIcon/CheckIcon.js";
import { DeleteIcon } from "../TodoIcon/DeleteIcon.js";


function TodoItem(props) {

    return (
        <li>
            <CheckIcon completed={props.completed}
                onClick={props.onComplete}

            />


            <p className={`${props.completed && "text-done"}`}>{props.text}</p>

            <DeleteIcon onClick={props.onDelete} />

        </li>
    );
}
export { TodoItem };