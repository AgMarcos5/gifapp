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
        if(categories.length === 3){
            console.log("hay 3 categorias",categories)
            setCategories(categories => {
                const sliceCategories = categories.slice(0,-1); 
                console.log("slice",sliceCategories)

                return [value,...sliceCategories];
            })
            console.log("despues del slice",categories)
        }
        else{
            setCategories([value,...categories])
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
        setCategories( categories => {
            const filteredCategories = categories.filter(ca => ca !== ca)
            localStorage.setItem('categories', JSON.stringify(filteredCategories))
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