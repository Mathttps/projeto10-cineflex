import { Link } from "react-router-dom";

export default function BotaoSessao({sessionID, time}) {
    return (
        <Link to={"/assentos/" + sessionID}>
            <div data-test="showtime">{time}</div>
        </Link>
    )
}
