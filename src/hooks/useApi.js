import { useEffect, useState } from "react";
import { getGifs } from "../config/getGifs";

const useApi = (category) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pages,setPages] = useState(1);
    const maxGifs = 16;
  
    const getData = async () => {     
      const res = await getGifs(category);
      const maxPages = Math.ceil(res.length / maxGifs);
      setData(res);      
      setPages(maxPages);
      setLoading(false);
    }  
     
    useEffect( () => {
         getData()
    }, [category])  

    return {data, loading, pages, maxGifs}

}

export default useApi;

