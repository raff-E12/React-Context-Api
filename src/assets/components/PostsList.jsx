import React from 'react'
import PostCard from './PostCard'

export default function PostsList({listImport}) {
  console.log(listImport)
  return (
    <>
     <div className="cards">
     <PostCard list={listImport}/>
    </div>
    </>
  )
}
