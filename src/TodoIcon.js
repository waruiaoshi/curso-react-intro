import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import './TodoIcon.css'

function TodoIcon({ type, color, onClick }) {
    const iconSet = {
        "check": (color) => <CheckSVG fill={color} />,
        "delete": (color) => <DeleteSVG fill={color} />
    }

    return (
        <span
            className={`Icon Icon-svg Icon-${type} `} onClick={onClick}
        >
            {iconSet[type](color)}
        </span >
    );
}

export { TodoIcon }