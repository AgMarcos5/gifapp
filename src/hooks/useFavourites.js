import { useContext} from "react";
import { contextFavs } from "../context/favouriteContext";

const useFavourites = () => {
    const {
        state : {favourites},
        actions: {addFavourite,removeFavourite}
      } = useContext(contextFavs);

    return {favourites,addFavourite,removeFavourite}

}

export default useFavourites;