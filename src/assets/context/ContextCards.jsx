import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

const ContextImport = createContext();

function ContextCards({children}) {

  const [isList, SetList] = useState([]);

  async function CardsFetchImport(){
    const url = 'https://dummyjson.com/posts';
    const fetch = await axios.get(url);
    const data  = fetch.data.posts;
    // console.log(data);
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

function useContextItems(){
  const context_import = useContext(ContextImport);
  return context_import
}

export { ContextCards, useContextItems }
