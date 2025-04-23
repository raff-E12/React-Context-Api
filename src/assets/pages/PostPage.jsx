import React from 'react'
import PostsList from '../components/PostsList'
import { Link } from 'react-router'

export default function PostPage() {
  return (
    <>
     <section className="cards-section">
      <div className="container">
        <h2 className="section-title">Our Representations</h2>
        <PostsList />
      </div>
      <Link to={"/"} className='btn btn-secondary marg-top-gap'>To HomePage</Link>
    </section>
    </>
  )
}
