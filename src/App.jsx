import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import CreditPage from './assets/pages/CreditPage'
import PostPage from './assets/pages/PostPage'
import { ContextCards } from './assets/context/ContextCards'

function App() {
  return (
    <>
  <div className='main-sc'>
    <Header />
  <ContextCards>
  <main className="main">
      <BrowserRouter >
        <Routes>
          <Route index element={<Main />}/>
          <Route path='/credits' element={<CreditPage />}/>
          <Route path='/posts' element={<PostPage />}/>
        </Routes>
      </BrowserRouter>
  </main>
  </ContextCards>
  <footer className="footer">
    <div className="container">
      <p>&copy; 2025 React Company. All rights reserved.</p>
    </div>
  </footer>
  </div>
    </>
  )
}

export default App
