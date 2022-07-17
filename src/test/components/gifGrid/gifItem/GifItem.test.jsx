

import { render, screen} from "@testing-library/react";
import { GifItem } from "../../../../components/gifGrid/gifItem/GifItem";
import useFavourites from "../../../../hooks/useFavourites";

jest.mock('../../../../hooks/useFavourites')

describe('Test en <GifItem/>', () => {
    
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';
    const id = '123456'

    useFavourites.mockReturnValue({
        favourites: [],
        addFavourite: () => {},
        removeFavourite: () => {}
    })

    test('Debe coincidir con el snapshot ', () => {        
       const {container} = render( <GifItem title={title} url={url} id={id} /> );
       expect( container ).toMatchSnapshot();   
    });

    
    test('Debe mostrar URL y ALT', () => {
        render( <GifItem title={title} url={url} id={id} /> )
        //screen.debug();
        const {getByTestId} = screen;
        expect( getByTestId('gif').src ).toContain(url);
        expect( getByTestId('gif').alt ).toContain(title);  
    });

});