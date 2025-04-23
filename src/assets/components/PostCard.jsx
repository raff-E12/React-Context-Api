import React from 'react'
import DummyImgs from "../../../public/dummy_img.png"
import { useContextItems } from '../context/ContextCards';

export default function PostCard({list}) {
  const { isList, SetList } = useContextItems();

  return (
    <>
    {isList.map((items, index) =>{
      return(
        <>
      <div className="card" key={index}>
        <img src={DummyImgs} alt="Placeholder" className="card-image"/>
        <h3 className="card-title">{items.title}</h3>
        <p className="card-description">{String(items.body).slice(0, 90)}...</p>
        <button className="card-button">Learn More</button>
      </div>
        </>
      )
    })}
    </>
  )
}
