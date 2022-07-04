export const getGifs = async (name) =>{
        const giphyApiKey = 'Uk7iNWW57YIwncgQxWRfzXxnd9KgnQDZ'
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${name}&limit=50`
      
        const resp = await fetch(url);
        const { data } = await resp.json()
        const gifs = data.map(img => (
          {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
          }
        ))
      
          return gifs;
      }