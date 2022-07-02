import {createContext, useState, useEffect} from 'react'

export const context = createContext();

export default function AppContext ({children}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);  

    // local storage
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('categories'));
        if(storage){
            setCategories(storage);
            setSelectedCategory(storage[0])
        }
    }, [])
    
    useEffect(() => {
        if(selectedCategory != null){
            localStorage.setItem('categories', JSON.stringify(categories))
        }
    }, [selectedCategory])
    

    const handleAddCategory = (value) => {
        setCategories([value,...categories])
        setSelectedCategory(value)
    }

    const handleRemoveCategory = (value) => {
        setCategories( categories => {
            const filteredCategories = categories.filter(ca => ca !== value)
            localStorage.setItem('categories', JSON.stringify(filteredCategories))
            if(value === selectedCategory)
                setSelectedCategory(filteredCategories[0])
            return filteredCategories;
        })
    }

    const state = {
        categories,
        selectedCategory,
    }
    const actions = {
        addCategory: handleAddCategory,
        removeCategory: handleRemoveCategory,
        changeCategory: setSelectedCategory
    }

    return (
        <context.Provider value={{
            state,
            actions
        }}>
            {children}
        </context.Provider>
    )
}