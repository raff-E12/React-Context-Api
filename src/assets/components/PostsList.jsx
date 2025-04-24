import React from 'react'
import PostCard from './PostCard'
import { useContextItems } from '../context/ContextCards';

export default function PostsList() {
  const { isList } = useContextItems();

  return (
    <>
     <div className={`cards ${isList.length !== 0 ? "" : "empty"}`}>
      {isList.length !== 0 ? <PostCard/> : <>
      <div className='loading-sc'><h4>Loading...</h4></div>
      </>}
    </div>
    </>
  )
}
