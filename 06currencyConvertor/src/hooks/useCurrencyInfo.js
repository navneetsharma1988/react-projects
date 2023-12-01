import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => { 
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then(res => res.json())
            .then(data => setCurrencyInfo(data[currency]))
    }, [currency]);
    return currencyInfo;

}

export default useCurrencyInfo;
