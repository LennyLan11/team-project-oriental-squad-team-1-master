import React from 'react'
import './PosterCard.css'

const PosterCard = ({movie}) => {
  
  return (
    <div className='card' key={movie._id}>
      <img
        src={movie.picture} alt={movie.title}
        className='card'
        />
        <p>{movie.title}</p>
    </div>
  )
}

export default PosterCard;