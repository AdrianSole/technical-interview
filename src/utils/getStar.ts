import FavUnClicked from "../assets/favunclicked.png";
import FavClicked from "../assets/favclicked.png";

export const getStar = (fav:boolean) => {
    if (fav) {
        return FavClicked;
    } else {
        return FavUnClicked;
    }
}