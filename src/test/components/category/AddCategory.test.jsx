
import { AddCategory } from "../../../components/category/AddCategory"
import { fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import useCategories from "../../../hooks/useCategories";

jest.mock('../../../hooks/useCategories')

describe('Test en <AddCategory/>', () => { 
    
    test('Debe cambiar el valor del input', () => { 
        useCategories.mockReturnValue({addCategory: () => {}})
        render(<Router><AddCategory/></Router>)
        const input = screen.getByRole("textbox");
        fireEvent.change(input, {target: {value:"Luffy"}})
        expect(input.value).toBe("Luffy")
        //screen.debug();
    })

    test('Debe llamar la función addCategory si el input tiene valor', () => { 

        const inputValue = 'Luffy';
        useCategories.mockReturnValue({addCategory: () => {}})
        
        
        render(<Router><AddCategory/></Router>)
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        
        fireEvent.change(input, {target: {value:inputValue}})
        fireEvent.submit(form);
        //expect(addCategory).toHaveBeenCalled();
        // https://jestjs.io/docs/jest-object#jestspyonobject-methodname
        //screen.debug();
     })

 })