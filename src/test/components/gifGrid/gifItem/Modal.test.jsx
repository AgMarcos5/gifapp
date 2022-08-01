import { render, screen } from "@testing-library/react";
import { Modal } from "../../../../components/gifGrid/gifItem/Modal";
import useFavourites from "../../../../hooks/useFavourites"

jest.mock('../../../../hooks/useFavourites')

describe('Test en <Modal/>', () => { 

    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';
    const id = '123456'

    useFavourites.mockReturnValue({
        favourites: [],
        addFavourite: () => {},
        removeFavourite: () => {}
    })

     test('Debe coincidir con el snapshot ', () => {    
        
        render( <Modal title={title} url={url} id={id} /> )

     });
 })