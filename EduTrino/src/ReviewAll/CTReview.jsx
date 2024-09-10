import React from 'react'
import Review from '../components/Review'

const CTReview = () => {
    const chapters = [
        "Introduction to Contemporary Technology",
        "E-Commerce",
        "E-Governance",
        "Cloud Computing and IOT",
        "Artificial Intelligence",
        "Multimedia",
        "Big Data"
    ]
  return (
    <div>
        <Review subject = "CT" chapters = {chapters}/>
     
    </div>
  )
}

export default CTReview
