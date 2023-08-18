import Alive from "../assets/alive.png";
import Dead from "../assets/dead.png";
import unknown from "../assets/unknown.png";

export const getStatusImg = (status: string | undefined) => {
    if (status === "Alive") {
        return Alive;
    }
    if (status === "Dead") {
        return Dead;
    }
    return unknown;
};