import React from 'react'
import SubjectContent from './SubjectContent'

const CN = () => {
  return (
    <div>
      <SubjectContent subject = "Computer Network" chapters = {[
        "Introduction to Computer Network",
        "Network Types and Topologies",
        "Networking",
        "Devices and Transmission Media",
        "Network Architecture",
        "Reference Model and IP Addressing",
        "Workgroup Computing",
        "Network Security"
      ]} />
    </div>
  )
}

export default CN
