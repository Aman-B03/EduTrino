import React from 'react'
import SubjectContent from './SubjectContent'


const CT = () => {
  return (
    <div>
      <SubjectContent subject = "Contemporary Technology" chapters = {[
        "Introduction to Contemporary Technology",
        "E-Commerce",
        "E-Governance",
        "Cloud Computing and IOT",
        "AI",
        "Multimedia",
        "Big Data"
      ]} />
    </div>
  )
}

export default CT
