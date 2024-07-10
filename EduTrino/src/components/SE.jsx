import React from 'react'
import SubjectContent from './SubjectContent'


const SE = () => {
  return (
    <div>
      <SubjectContent subject = "Software Engineering" chapters = {[
        "Introduction to Software Engineering",
        "Project Management Techniques",
        "Software Development Life Cycle",
        "Software Development Model",
        "Software Analysis and Design Tools",
        "Project Work"
      ]} />
    </div>
  )
}

export default SE
