import useApi from "../../hooks/useApi"
import {renderHook, waitFor} from "@testing-library/react";

describe('Test en hook useApi', () => { 

    test('Debe regresar el estado inicial', () => { 
        const {result} = renderHook( () => useApi("Luffy"))
        const { data, loading, pages, maxGifs} = result.current;
        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();
        expect(pages).toBe(1);
        expect(maxGifs).toBe(16);
    })

    test('Debe retornar un arreglo de imágenes y el loading en false', async () => {
        const {result} = renderHook( () => useApi("Luffy"))
        await waitFor( () => expect(result.current.data.length).toBeGreaterThan(0))

        const { data, loading, pages, maxGifs} = result.current;
        expect(data.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
        expect(pages).toBe(4);
        expect(maxGifs).toBe(16);
    })

 })