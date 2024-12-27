import React from 'react'

const Offer = ({ src, link, index }) => {
  return (
    <a href={link} className="offerItem">
      <img src={src} alt={`${index} offer`} className="offerImage" />
    </a>
  )
}

export default Offer

