import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const WorkgroupComputing = () => {

    const questionArray = [
        {
            "question": "What is a key characteristic of workgroup computing?",
            "options": [
              "Centralized management of resources",
              "Decentralized sharing of resources among a group of users",
              "Exclusive use of cloud-based resources",
              "Automatic updates across all devices"
            ],
            "correct": "Decentralized sharing of resources among a group of users",
            "explain": "Workgroup computing involves decentralized sharing of resources, where multiple users or computers within a group collaborate and share resources like files and printers without centralized control."
          },
          {
            "question": "Which of the following is a component of a typical workgroup computing setup?",
            "options": [
              "Central server",
              "Domain controller",
              "File sharing service",
              "Network firewall"
            ],
            "correct": "File sharing service",
            "explain": "In workgroup computing, a common component is a file sharing service that allows users within the group to share files and folders among themselves."
          },
          {
            "question": "What is one of the main advantages of workgroup computing?",
            "options": [
              "Enhanced security through centralized management",
              "Simplified resource sharing among users",
              "Automatic backup of all data to a central server",
              "Reduced hardware costs by eliminating the need for individual devices"
            ],
            "correct": "Simplified resource sharing among users",
            "explain": "Workgroup computing simplifies resource sharing by allowing users within the same group to easily share files, printers, and other resources without requiring centralized management."
          },
          {
            "question": "What is a common disadvantage of workgroup computing?",
            "options": [
              "High cost of implementation",
              "Lack of scalability",
              "Complex centralized management",
              "Increased risk of data inconsistency and security issues"
            ],
            "correct": "Increased risk of data inconsistency and security issues",
            "explain": "One disadvantage of workgroup computing is the increased risk of data inconsistency and security issues due to the lack of centralized management and control."
          },
          {
            "question": "Which type of workgroup computing setup is typically used in a small office or home environment?",
            "options": [
              "Client-server network",
              "Peer-to-peer network",
              "Cloud-based network",
              "Hybrid network"
            ],
            "correct": "Peer-to-peer network",
            "explain": "In small office or home environments, a peer-to-peer network is commonly used for workgroup computing, where each computer can act as both a client and a server, allowing direct resource sharing among users."
          },
          {
            "question": "In workgroup computing, which of the following is NOT typically managed by a central server?",
            "options": [
              "User authentication",
              "Resource sharing",
              "Network configuration",
              "Local printer access"
            ],
            "correct": "Local printer access",
            "explain": "In workgroup computing, local printer access is generally managed by individual computers rather than a central server. Resource sharing and network configuration might be handled locally or with minimal centralized management."
          },
          {
            "question": "Which of the following applications would benefit most from a workgroup computing setup?",
            "options": [
              "Large enterprise resource planning systems",
              "Database management systems",
              "Team collaboration and document sharing",
              "High-performance computing clusters"
            ],
            "correct": "Team collaboration and document sharing",
            "explain": "Workgroup computing is well-suited for applications that involve team collaboration and document sharing among a small group of users, allowing easy access and resource sharing without the need for complex infrastructure."
          },
          {
            "question": "What is a typical method for managing user access in a workgroup computing environment?",
            "options": [
              "Centralized user directory",
              "Individual user account management on each machine",
              "Integrated security appliance",
              "Network-based user roles"
            ],
            "correct": "Individual user account management on each machine",
            "explain": "In a workgroup computing environment, user access is typically managed through individual user accounts on each machine, rather than a centralized directory or security appliance."
          },
          {
            "question": "Which of the following is NOT a feature of workgroup computing?",
            "options": [
              "Centralized file storage",
              "Direct resource sharing among peers",
              "Local user authentication",
              "Decentralized network management"
            ],
            "correct": "Centralized file storage",
            "explain": "Workgroup computing features decentralized network management and direct resource sharing among peers, rather than centralized file storage which is more typical of client-server networks."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "What is the difference between workgroup computing and computer network?",
            "answer": "<table style='border-collapse: collapse; width: 100%;'><thead><tr><th style='border: 1px solid black; padding: 2px;'>Aspect</th><th style='border: 1px solid black; padding: 2px;'>Workgroup Computing</th><th style='border: 1px solid black; padding: 2px;'>Computer Network</th></tr></thead><tbody><tr><td style='border: 1px solid black; padding: 2px;'>Definition</td><td style='border: 1px solid black; padding: 2px;'>A setup where multiple computers are connected for collaboration on tasks.</td><td style='border: 1px solid black; padding: 2px;'>A broader term encompassing any system where multiple computers are connected to share resources and communicate.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Scale</td><td style='border: 1px solid black; padding: 2px;'>Typically limited to a small group of computers.</td><td style='border: 1px solid black; padding: 2px;'>Can range from small local networks to extensive global networks.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Management</td><td style='border: 1px solid black; padding: 2px;'>Decentralized with each computer managing its own resources.</td><td style='border: 1px solid black; padding: 2px;'>Centralized or decentralized, often with specific network management systems.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Purpose</td><td style='border: 1px solid black; padding: 2px;'>To facilitate collaboration and resource sharing among a small group.</td><td style='border: 1px solid black; padding: 2px;'>To connect multiple systems for communication, resource sharing, and data exchange across various scales.</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Security</td><td style='border: 1px solid black; padding: 2px;'>Typically less secure due to the lack of centralized control.</td><td style='border: 1px solid black; padding: 2px;'>Security measures can be more robust due to centralized or controlled management.</td></tr></tbody></table>"
          },
          {
            "no": "2",
            "question": "Explain the components of a workgroup computing system.",
            "answer": "The main components of a workgroup computing system include:<br><br><b>1. Computers:</b> These are the primary devices used for performing tasks and accessing shared resources.<br><b>2. Network Interface Cards (NICs):</b> Hardware used to connect computers to the network.<br><b>3. File Servers:</b> Computers or devices that provide shared access to files and applications.<br><b>4. Printers and Peripherals:</b> Shared devices accessible to all computers within the workgroup.<br><b>5. Software:</b> Includes operating systems and applications that facilitate collaboration and resource sharing.</b>"
          },
          {
            "no": "3",
            "question": "What are the advantages and disadvantages of workgroup computing?",
            "answer": "<b>Advantages:</b><br><br><b>1. Cost-Effective:</b> Generally requires less investment in infrastructure compared to larger network setups.<br><b>2. Easy to Set Up:</b> Simple to configure and manage with minimal technical expertise.<br><b>3. Collaborative:</b> Facilitates sharing of resources and collaboration among users.<br><br><b>Disadvantages:</b><br><br><b>1. Limited Scalability:</b> Not suitable for large-scale or growing networks.<br><b>2. Security Risks:</b> Less secure due to the lack of centralized control and management.<br><b>3. Resource Management:</b> Resource allocation and management can be less efficient.</b>"
          },
          {
            "no": "4",
            "question": "Differentiate between centralized and decentralized workgroup computing.",
            "answer": "<b>Centralized Workgroup Computing:</b><br><br><b>1. Control:</b> A single central server manages resources and user access.<br><b>2. Management:</b> Easier to manage and maintain due to centralized control.<br><b>3. Security:</b> More secure as resources and access are controlled centrally.<br><br><b>Decentralized Workgroup Computing:</b><br><br><b>1. Control:</b> Each computer or node manages its own resources.<br><b>2. Management:</b> More complex to manage as each node operates independently.<br><b>3. Security:</b> Less secure as there is no central control over resources and access.</b>"
          },
          {
            "no": "5",
            "question": "Explain the application of workgroup computing in small businesses.",
            "answer": "In small businesses, workgroup computing can be applied in the following ways:<br><br><b>1. File Sharing:</b> Employees can share files and documents easily within a workgroup.<br><b>2. Resource Sharing:</b> Common resources such as printers and storage can be accessed by all users.<br><b>3. Collaboration:</b> Teams can collaborate on projects and communicate more effectively through shared applications and tools.<br><b>4. Cost Savings:</b> Reduces the need for expensive infrastructure by leveraging existing hardware and software.</b>"
          }
    ];

  return (
    <div>
      <QuestDisplay title = "CN - Workgroup Computing" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default WorkgroupComputing
