import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

const ContextImport = createContext();

// UseContext Basato sul wrap dei contenuti in maniera dinamica
function ContextCards({children}) {

  const [isList, SetList] = useState([]);
  const [isCount, setCount] = useState(0);
  const [isAnimation, setAnimation] = useState(false);

  async function CardsFetchImport(){
    const url = `https://dummyjson.com/posts?skip=${isCount}&limit=3`;
    const fetch = await axios.get(url);
    const data  = fetch.data.posts;
    console.log(fetch.data);
    SetList(data);
  }

  function handleIncrementCount() {
    if (isCount < 5) {
      setAnimation(true);
      return setCount(value => value + 1);
    }
  }

  function handleDecrementCount() {
    if (isCount > 0) {
      setAnimation(true);
      return setCount(value => value - 1);
    }
  }

  useEffect(() =>{ 
    setTimeout(() =>{
      CardsFetchImport()
      setAnimation(true);
    }, 80)
  setAnimation(false);
  },[isCount]);

  const values_export = { 
    isList, 
    SetList,
    handleDecrementCount,
    handleIncrementCount,
    isCount,
    isAnimation
  }

  return (
    <ContextImport.Provider value={values_export}>
      {children}
    </ContextImport.Provider>
  )
}

//Uso del Contesto in modo Esteso senza il bisogno della "useContext""
function useContextItems(){
  const context_import = useContext(ContextImport);
  return context_import
}

export { ContextCards, useContextItems }
