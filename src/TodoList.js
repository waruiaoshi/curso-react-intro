import './TodoList.css';

function TodoList(props) {

    return (
        <ul className="task-list">
            {props.children}

        </ul>
    );


}
export { TodoList };