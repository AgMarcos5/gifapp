import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import './addCategory.scss'

export const AddCategory = () => {

    const navigate = useNavigate(); 

    const {addCategory} = useCategories();

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if(value < 1) return;
        addCategory(value);
        setInputValue('');
        navigate("/");
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="search"
        type="text" 
        placeholder="Buscar gif..." 
        value={inputValue} 
        onChange={handleInputChange}
        />
    </form>
  );
};
