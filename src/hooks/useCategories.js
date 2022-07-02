import { useContext} from "react";
import { context } from "../context/categoryContext";

const useCategories = () => {
    const {
        state : {categories, selectedCategory},
        actions: {addCategory,removeCategory,changeCategory}
      } = useContext(context);

    return {categories, selectedCategory, addCategory, removeCategory, changeCategory}

}

export default useCategories;