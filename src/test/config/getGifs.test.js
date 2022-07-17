import { getGifs } from "../../config/getGifs"

describe('Test en getGifs', () => { 
    
    test('Debe retornar el arreglo de gifs', async () => { 
     
        const gifs = await getGifs('Luffy');
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    })

 })