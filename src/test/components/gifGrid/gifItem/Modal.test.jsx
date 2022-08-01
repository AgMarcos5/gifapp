import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
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

     test('Botón cerrar debe cambiar el modalState', () => {    
        const setModalState = jest.fn()
        const modalState = true;

        render( <Modal title={title} url={url} id={id} modalState={modalState} setModalState={setModalState}/> )
        fireEvent.click(screen.getByTestId('close'))
        expect(setModalState).toHaveBeenCalledTimes(1)
     });

     
     test('Modal desplegado debe mostrar el gif', () => {    
        const setModalState = jest.fn()
        const modalState = true;

        render( <Modal title={title} url={url} id={id} modalState={modalState} setModalState={setModalState}/> )
        const {getByTestId} = screen;
        expect( getByTestId('gif').src ).toContain(url);
        expect( getByTestId('gif').alt ).toContain(title);  
     });
 })