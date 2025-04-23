import React, { useContext } from 'react'
import PostsList from '../components/PostsList'
import { Link } from 'react-router'
import { useContextFun } from '../../App';

export default function PostPage() {
  const useImport = useContext(useContextFun);
  console.log(useImport)
  return (
    <>
     <section className="cards-section">
      <div className="container">
        <h2 className="section-title">Our Representations</h2>
        <PostsList listImport={useImport} />
      </div>
      <Link to={"/"} className='btn btn-secondary marg-top-gap'>To HomePage</Link>
    </section>
    </>
  )
}
