import './TodoCounter.css';
function TodoCounter({ total, completed }) {
    return (
        <h1>
            Completaste {completed} de {total} TODOs
        </h1>
    );

}
export { TodoCounter };