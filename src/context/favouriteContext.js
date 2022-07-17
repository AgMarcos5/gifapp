import {createContext, useState, useEffect} from 'react'

export const contextFavs = createContext();

export default function FavouriteContext ({children}) {

    const [favourites, setFavourites] = useState([]);

    // local storage
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('favourites'));
        if(storage){
            setFavourites(storage);
        }
    }, [])
    
    useEffect(() => {
        if(favourites != null){
            localStorage.setItem('favourites', JSON.stringify(favourites))
        }
    }, [favourites])
    

    const handleAddFav = (value) => {
            setFavourites([value,...favourites])
    }

    const handleRemoveFav = (value) => {
        setFavourites( favourites => {
            const filteredFavourites = favourites.filter(fav => fav.id !== value.id)
            localStorage.setItem('favourites', JSON.stringify(filteredFavourites))
            return filteredFavourites;
        })
    }
    

    const state = {
        favourites
    }
    const actions = {
        addFavourite: handleAddFav,
        removeFavourite: handleRemoveFav
    }

    return (
        <contextFavs.Provider value={{
            state,
            actions
        }}>
            {children}
        </contextFavs.Provider>
    )
}