import React from 'react'
import SubjectContent from './SubjectContent'

const VP = () => {
  return (
    <div>
      <SubjectContent subject = "Visual Programming" chapters = {[
        "Introduction to C# .NET",
        "Control Statements",
        "Arrays",
        "Strings",
        "Structures",
        "Pointers",
        "Working with Database"
      ]}/>
    </div>
  )
}

export default VP
