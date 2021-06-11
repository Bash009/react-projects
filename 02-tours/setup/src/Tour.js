import React, { useState } from 'react'
import { useContext } from 'react'
import { sap } from './App'
const Tour = ({ id, image, info, price, name }) => {
  const { removeTour } = useContext(sap)
  const [readMore, setReadMore] = useState(false)
  console.log(removeTour)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore)
            }}
          >
            {readMore ? 'show less' : 'show more'}
          </button>
        </p>
        <button
          className='delete-btn'
          onClick={() => {
            removeTour(id)
          }}
        >
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
