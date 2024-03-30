import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData]=useState({}) // Assigning empty object if API doesnot work
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json#`)
        .then((res)=>res.json())  // Converting to JSON
        .then((res)=>setData(res[currency]))  // Accessing object with square bracket []
    }, [currency])
    return data;
}

export default useCurrencyInfo;