import React from 'react'
import PostCard from './PostCard'
import { ContextCards } from '../context/ContextCards'

export default function PostsList() {
  return (
    <>
     <div className="cards">
    <ContextCards>
      <PostCard/>
    </ContextCards>
    </div>
    </>
  )
}
