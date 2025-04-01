import React from 'react'
import './Cards.css'
import mern from '../../assets/mern.png'

const Cards = ({title,image}) => {
  return (
    <div className="card">
        <h1>{title}</h1>
        <div className="hover-card">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Cards
