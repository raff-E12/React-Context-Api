import React, { useContext } from 'react'
import PostsList from '../components/PostsList'
import { Link } from 'react-router'
import { useContextItems } from '../context/ContextCards'

export default function PostPage() {
  const { handleDecrementCount, handleIncrementCount } = useContextItems();

  return (
    <>
     <section className="cards-section">
      <div className="container">
        <h2 className="section-title">Our Representations</h2>
        <PostsList />
      </div>
      <div className='container btns-containers'>
        <button className='btn btn-success' onClick={() => handleDecrementCount()}>Prev Posts</button>
        <button className='btn btn-success' onClick={() => handleIncrementCount()}>Next Posts</button>
      </div>
      <Link to={"/"} className='btn btn-secondary marg-top-gap'>To HomePage</Link>
    </section>
    </>
  )
}
