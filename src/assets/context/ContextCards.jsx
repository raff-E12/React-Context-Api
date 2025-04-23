import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

const ContextImport = createContext();

// UseContext Basato sul wrap dei contenuti in maniera dinamica
function ContextCards({children}) {

  const [isList, SetList] = useState([]);
  const [isCount, setCount] = useState(0);

  async function CardsFetchImport(){
    const url = 'https://dummyjson.com/posts?skip=0&limit=3';
    const fetch = await axios.get(url);
    const data  = fetch.data.posts;
    console.log(fetch.data);
    SetList(data);
  }

  useEffect(() =>{ CardsFetchImport() },[]);

  const values_export = { 
    isList, 
    SetList
  }

  return (
    <ContextImport.Provider value={values_export}>
      {children}
    </ContextImport.Provider>
  )
}

//Uso del Contesto in modo Omogeneo
function useContextItems(){
  const context_import = useContext(ContextImport);
  return context_import
}

export { ContextCards, useContextItems }
