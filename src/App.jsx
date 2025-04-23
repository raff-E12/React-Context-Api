import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import CreditPage from './assets/pages/CreditPage'
import PostPage from './assets/pages/PostPage'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const useContextFun = createContext();

function App() {
  const [isList, SetList] = useState();

  async function CardsFetchImport(){
    const url = 'https://dummyjson.com/carts/1';
    const fetch = await axios.get(url);
    const data  = fetch.data.products;
    // console.log(data);
    SetList(data);
  }

  useEffect(() =>{ CardsFetchImport() },[]);

  return (
    <>
  <div className='main-sc'>
    <Header />
  <main className="main">
    <useContextFun.Provider value={isList}>
      <BrowserRouter >
        <Routes>
          <Route index element={<Main />}/>
          <Route path='/credits' element={<CreditPage />}/>
          <Route path='/posts' element={<PostPage />}/>
        </Routes>
      </BrowserRouter>
    </useContextFun.Provider>
  </main>
  <footer className="footer">
    <div className="container">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </footer>
  </div>
    </>
  )
}

export default App
