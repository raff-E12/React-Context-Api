import React from 'react'
import { Link } from 'react-router'

export default function CreditPage() {
  return (
    <>
      <section className="credits">
      <div className="container">
         <h2>Credits</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos soluta iusto odit ipsa possimus repellat, blanditiis, illum sint cumque, 
            necessitatibus recusandae consectetur.
             Recusandae, quis! Repellendus, tenetur quibusdam. Eligendi, nesciunt veritatis.</p>
         <Link to={"/"} className='btn btn-secondary marg-top-gap'>To Hompage</Link>
      </div>
    </section>
    </>
  )
}
