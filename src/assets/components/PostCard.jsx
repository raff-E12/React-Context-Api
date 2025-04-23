import React from 'react'
import DummyImgs from "../../../public/dummy_img.png"

export default function PostCard({list}) {
  const export_list = list;
  console.log(export_list)

  return (
    <>
    {export_list.map((items, index) =>{
      return(
        <>
      <div className="card" key={index}>
        <img src={DummyImgs} alt="Placeholder" className="card-image"/>
        <h3 className="card-title">{items.title}</h3>
        <p className="card-description"><b>Price:</b>{items.price}</p>
        <button className="card-button">Learn More</button>
      </div>
        </>
      )
    })}
    </>
  )
}


/*

    <div className="card">
        <img src={DummyImgs} alt="Placeholder 2" className="card-image"/>
        <h3 className="card-title">Card Title 1</h3>
        <p className="card-description">This is a placeholder description for the first card.</p>
        <button className="card-button">Learn More</button>
    </div>

    <div className="card">
      <img src={DummyImgs} alt="Placeholder 2" className="card-image"/>
      <h3 className="card-title">Card Title 2</h3>
      <p className="card-description">This is a placeholder description for the second card.</p>
      <button className="card-button">Learn More</button>
    </div>

    <div className="card">
      <img  src={DummyImgs} alt="Placeholder 2" className="card-image"/>
      <h3 className="card-title">Card Title 3</h3>
      <p className="card-description">This is a placeholder description for the third card.</p>
      <button className="card-button">Learn More</button>
   </div>

*/