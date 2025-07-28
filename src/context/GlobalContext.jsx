import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext()


function GlobalProvider({children}){

      const url = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    return(
        <GlobalContext.Provider value={{products, setProducts}}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext(){
    return useContext(GlobalContext)
}

export {GlobalProvider, useGlobalContext}