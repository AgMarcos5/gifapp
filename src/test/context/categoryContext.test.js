import { fireEvent, render,screen } from "@testing-library/react";
import { useContext } from "react";
import AppContext, { context } from "../../context/categoryContext"

describe('Test en category context', () => { 
    const TestComponent = ({category}) => {
        const {
            state : {categories},
            actions: {addCategory,removeCategory,resetCategories}
          } = useContext(context);
          return (
        <>
        <ul data-testid="list">{categories.join()}</ul>
        <button data-testid="add" onClick={()=>addCategory(category)}>add</button>
        <button data-testid="remove" onClick={()=>removeCategory(category)}>remove</button>
        <button data-testid="reset" onClick={()=>resetCategories()}>reset</button>
        </>
        )
    }
    
    test('Debe regresar el estado inicial', () => {        
        render(<AppContext><TestComponent/></AppContext>)
        // Espero array de categorías vacío
        expect(screen.getByTestId('list').innerHTML).toBe('')
    })

    test('Debe agregar la categoría', () =>{
        const category = 'Luffy'
        render(<AppContext><TestComponent category={category}/></AppContext>)
        
        // Espero lista de categorías vacía
        expect(screen.getByTestId('list').innerHTML).toBe('')

        // Disparo el evento de agregar categoría y luego verifico que se haya agregado
        fireEvent.click(screen.getByTestId('add'))
        expect(screen.getByTestId('list').innerHTML).toBe('Luffy')
    })

    test('Debe resetear el estado de categorias', () => {

        // Preparo el componente con el array ['Naruto','Luffy']
        const category = 'Naruto'
        render(<AppContext><TestComponent category={category}/></AppContext>)
        fireEvent.click(screen.getByTestId('add'))
        expect(screen.getByTestId('list').innerHTML).toBe('Naruto,Luffy')

        // Disparo el evento 'reset' y verifico que ahora el array esté vacío.
        fireEvent.click(screen.getByTestId('reset'))
        expect(screen.getByTestId('list').innerHTML).toBe('')        
    })

    test('Debe eliminar la categoria', () => {
        
        const category = 'Naruto'
        render(<AppContext><TestComponent category={category}/></AppContext>)
        
        // Agrego una nueva categoría
        fireEvent.click(screen.getByTestId('add'))
        expect(screen.getByTestId('list').innerHTML).toBe('Naruto')

        // Disparo el evento de eliminar categoría y verifico el resultado en el array
        fireEvent.click(screen.getByTestId('remove'))
        expect(screen.getByTestId('list').innerHTML).toBe('')

    })


 })