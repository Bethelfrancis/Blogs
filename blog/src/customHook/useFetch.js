import { useState, useEffect } from "react";

const useFetch = url => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch the data. Or check ur Internet Connection')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                    setData(null)
                })
        }, 2000)
    }, [url])


    return { data, isPending, error };
}
 
export default useFetch;