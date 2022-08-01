import { render, screen } from "@testing-library/react";
import { GifList } from "../../../components/gifGrid/GifList";
import useApi from "../../../hooks/useApi";
import useFavourites from "../../../hooks/useFavourites";

jest.mock("../../../hooks/useApi");
jest.mock('../../../hooks/useFavourites')

describe('test en <GifList />', () => { 
    
    const category = 'One Punch';

    test('Debe mostrar inicialmente el loading ', () => {

        useApi.mockReturnValue({
            data: [], 
            loading: true, 
            pages:4, 
            maxGifs:50
        })
        render( <GifList category={category} active={category} page={1} setPage={()=>{}} setLastPage={()=>{}} />)

        expect( screen.getByText( 'Cargando...' ).innerHTML ).toBe('Cargando...')
        
        // expect( screen.getByText( category ).innerHTML ).toBe(category)

        // expect( screen.getByText(category))
    })

    test('Debe mostrar items, cuando se cargan las imagnes en useApi', () => {

        useApi.mockReturnValue({
            data: [
                {id: 'ABC123', title:'Saitama', url:'https://onepunch/saitama.jpg'},
                {id: 'ABC1234', title:'Garou', url:'https://onepunch/garou.jpg'}
            ], 
            loading: false, 
            pages:4, 
            maxGifs:50
        })

        useFavourites.mockReturnValue({
            favourites: [],
            addFavourite: () => {},
            removeFavourite: () => {}
        })

        render( <GifList category={category} active={category} page={1} setPage={()=>{}} setLastPage={()=>{}} />)
        expect( screen.getAllByTestId('gif').length ).toBe(2)
    }) 

    test('Debe mostrar <NoGifs/> cuando data se encuentra vacío', () =>{
        useApi.mockReturnValue({
            data: [], 
            loading: false, 
        })
        render(<GifList category={category} active={category} page={1} setPage={()=>{}} setLastPage={()=>{}} />)
        const {getByTestId} = screen;
        expect(getByTestId('nogifs')).toBeTruthy()
    })

 })