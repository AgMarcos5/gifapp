import { useContext} from "react";
import { context } from "../context/categoryContext";

const useCategories = () => {
    const {
        state : {categories, selectedCategory},
        actions: {addCategory,removeCategory,resetCategories,changeCategory}
      } = useContext(context);

    return {categories, selectedCategory, addCategory, removeCategory, resetCategories, changeCategory}

}

export default useCategories;