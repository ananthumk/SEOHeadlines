import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

const RatingStar = ({rating}) => {
  
  const stars = []
  const rounded = Math.floor(rating)
  const hasHalf = rating - rounded >= 0.5
  
  for (let i = 0; i < 5; i++){
    if (i < rounded){
        stars.push(<FontAwesomeIcon icon={solidStar} key={i} style={{color: '#f6b01e'}} />)
    } else if (i === rounded && hasHalf) {
        stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} style={{color: '#f6b01e'}} />)
    } else {
        stars.push(<FontAwesomeIcon icon={regularStar} key={i} style={{color: '#f6b01e'}} />)
    }
  }

  return (
    <div>{stars}</div>
  )
}

export default RatingStar