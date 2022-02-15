import { useState,useEffect } from "react";

const useFetch = (url) => {

    const [data,setData]=useState(null);
    const [isPending,setPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url,{signal:abortController.signal})
        .then((res)=>{
            if(!res.ok)
            {
                throw Error('failed to fetch data');
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch((err)=>{
            if(err.name==='AbortError')
            {
                console.log('Fetch Aborted');
            }
            else{
                setPending(false);
                setError(err.message);
            }
        })
        return () => {abortController.abort()};
    }, [url])

    return { data , isPending , error };
}
 
export default useFetch;