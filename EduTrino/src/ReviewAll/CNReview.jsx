import React from 'react'
import Review from '../components/Review'

const CNReview = () => {

   const chapters = [
        "Introduction to Computer Network",
        "Network Types and Topologies",
        "Networking",
        "Devices and Transmission Media",
        "Network Architecture",
        "Reference Model and IP Addressing",
        "Workgroup Computing",
        "Network Security"
      ];

  return (
    <div>
       <Review subject = "CN" chapters = {chapters}/>
    </div>
  )
}

export default CNReview
