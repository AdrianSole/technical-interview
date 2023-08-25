import FavUnClicked from "../assets/favunclicked.png";
import FavClicked from "../assets/favclicked.png";

/** Devuelve la imagen de favorito o no favorito dependiendo del valor booleano que se le pasa como parametro */
export const getStar = (fav: boolean) => {
    if (fav) {
        return FavClicked;
    } else {
        return FavUnClicked;
    }
}
