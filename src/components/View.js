import React from 'react'

export const View = ({img1,name,title,amount}) => {
  return (
      <div className='Viewgallery'>
    <img className="image" alt="logo" src={img1} />
    <h3>{name}</h3>
    <h4>{amount}</h4>
    <h3>{title}</h3>
    </div>
    
  )
}
