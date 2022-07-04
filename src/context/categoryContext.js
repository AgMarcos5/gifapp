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
        if(!categories.includes(value)){
            if(categories.length === 3){
                setCategories(categories => {
                    const sliceCategories = categories.slice(0,-1); 
                    return [value,...sliceCategories];
                })
            }
            else{
                setCategories([value,...categories])
            }
        }        
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

    const handleResetCategories = () => {
        setCategories(() => {
            let empty = [];
            localStorage.setItem('categories', JSON.stringify(empty))
            setSelectedCategory(empty[0])
            return empty;
        });
    }

    const state = {
        categories,
        selectedCategory,
    }
    const actions = {
        addCategory: handleAddCategory,
        removeCategory: handleRemoveCategory,
        resetCategories: handleResetCategories,
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