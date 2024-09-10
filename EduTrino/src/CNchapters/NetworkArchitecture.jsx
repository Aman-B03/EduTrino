import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const NetworkArchitecture = () => {

    const questionArray = [
      {
        "question": "Which network architecture is characterized by a central server that provides resources and services to multiple client devices?",
        "options": [
          "Peer-to-peer network",
          "Client-server architecture",
          "Decentralized network",
          "Domain-based network"
        ],
        "correct": "Client-server architecture",
        "explain": "In a client-server architecture, a central server provides resources and services to client devices, which request and use these resources."
      },
      {
        "question": "What is a key advantage of a client-server network architecture?",
        "options": [
          "Increased risk of data loss",
          "Simpler network management",
          "Higher security due to central control",
          "More complex to set up"
        ],
        "correct": "Higher security due to central control",
        "explain": "Client-server architecture often provides better security because data and resources are managed centrally on the server, making it easier to implement and enforce security policies."
      },
      {
        "question": "Which network architecture allows each node to act as both a client and a server, providing resources and services to other nodes?",
        "options": [
          "Client-server architecture",
          "Peer-to-peer network",
          "Domain-based network",
          "Centralized network"
        ],
        "correct": "Peer-to-peer network",
        "explain": "In a peer-to-peer network, each node can act as both a client and a server, sharing resources and services directly with other nodes without relying on a central server."
      },
      {
        "question": "What is one major disadvantage of a peer-to-peer network?",
        "options": [
          "Higher cost of setup",
          "Centralized management",
          "Scalability issues",
          "Better security"
        ],
        "correct": "Scalability issues",
        "explain": "Peer-to-peer networks can face scalability issues because as more nodes are added, managing and sharing resources becomes more complex and less efficient."
      },
      {
        "question": "Which network architecture is known for having a single point of failure, affecting the entire network if the central node fails?",
        "options": [
          "Decentralized network",
          "Client-server architecture",
          "Peer-to-peer network",
          "Distributed network"
        ],
        "correct": "Client-server architecture",
        "explain": "In a client-server architecture, if the central server fails, it can disrupt the entire network since the server provides essential resources and services to the clients."
      },
      {
        "question": "What is the primary feature of a centralized network architecture?",
        "options": [
          "Decentralized control",
          "Single central node for management",
          "Equal distribution of resources",
          "Dynamic resource allocation"
        ],
        "correct": "Single central node for management",
        "explain": "In a centralized network architecture, a single central node manages and controls resources and services, making it the hub of the network."
      },
      {
        "question": "Which type of network architecture is designed to handle large-scale networks with high redundancy and fault tolerance?",
        "options": [
          "Client-server architecture",
          "Peer-to-peer network",
          "Domain-based network",
          "Distributed network"
        ],
        "correct": "Distributed network",
        "explain": "A distributed network architecture is designed to handle large-scale networks by distributing resources and services across multiple nodes, providing high redundancy and fault tolerance."
      },
      {
        "question": "What distinguishes a domain-based client-server architecture from a traditional client-server network?",
        "options": [
          "Use of multiple servers for different functions",
          "Centralized authentication and policy management",
          "Peer-to-peer resource sharing",
          "Lack of a central management system"
        ],
        "correct": "Centralized authentication and policy management",
        "explain": "A domain-based client-server architecture centralizes authentication and policy management, allowing for more efficient and controlled access to network resources."
      }
    ];

    const subjective = [
      {
        "no": "1",
        "question": "Describe the key features and applications of network architecture in modern computing environments.",
        "answer": "Network architecture refers to the design and structure of a network, including its components and how they interact. Key features include the layout of network devices, protocols used for communication, and the management of data flow. Applications of network architecture include: <br><br><b>1. Data Management:</b> Efficient organization and retrieval of data in large networks. <br><b>2. Resource Sharing:</b> Allows multiple users to access and share resources such as printers and files. <br><b>3. Scalability:</b> Ability to expand the network to accommodate more users or devices. <br><b>4. Security:</b> Implementing measures to protect data and resources from unauthorized access. <br><br>Modern computing environments use network architecture to build robust, scalable, and secure networks for various applications including business operations, educational institutions, and public services."
      },
      {
        "no": "2",
        "question": "Compare and contrast domain-based client-server architecture with peer-to-peer network architecture in terms of their advantages and disadvantages.",
        "answer": "Domain-based client-server architecture and peer-to-peer network architecture each have distinct characteristics: <br><br><b>Domain-Based Client-Server Architecture:</b> <br><b>Advantages:</b> <br>1. Centralized management and control. <br>2. Enhanced security with centralized authentication. <br>3. Scalable to support a large number of users. <br><b>Disadvantages:</b> <br>1. Higher cost due to server maintenance. <br>2. Single point of failure; if the server fails, the entire network is affected. <br><br><b>Peer-to-Peer Network Architecture:</b> <br><b>Advantages:</b> <br>1. Lower cost as there is no need for a dedicated server. <br>2. Simplified setup and configuration. <br>3. Better fault tolerance as each node can operate independently. <br><b>Disadvantages:</b> <br>1. Less control and security compared to client-server architecture. <br>2. Scalability issues as the network grows. <br><br>Choosing between these architectures depends on factors such as network size, required security, and budget constraints."
      },
      {
        "no": "3",
        "question": "Explain the concept of centralized and decentralized networks with examples of each. What are the advantages and disadvantages of each type?",
        "answer": "Centralized and decentralized networks represent different approaches to network management: <br><br><b>Centralized Network:</b> <br><b>Concept:</b> All network resources and services are managed from a single central point. <br><b>Example:</b> A traditional domain-based client-server network where a central server controls resources and user access. <br><b>Advantages:</b> <br>1. Easier to manage and control. <br>2. Centralized security and data backup. <br><b>Disadvantages:</b> <br>1. Single point of failure; if the central server fails, the network is affected. <br>2. Higher cost for server maintenance. <br><br><b>Decentralized Network:</b> <br><b>Concept:</b> Network resources and services are distributed across multiple nodes without a central point of control. <br><b>Example:</b> A peer-to-peer network where each device can act as both a client and a server. <br><b>Advantages:</b> <br>1. More resilient to failures as there is no single point of failure. <br>2. Potentially lower cost as there is no need for a central server. <br><b>Disadvantages:</b> <br>1. More complex to manage and secure. <br>2. Less efficient in handling large-scale networks. <br><br>Both types have their specific use cases and should be chosen based on network requirements and goals."
      },
      {
        "no": "4",
        "question": "What are the key components of a domain-based client-server architecture, and how do they interact to provide network services?",
        "answer": "In a domain-based client-server architecture, the key components include: <br><br><b>1. Server:</b> Provides resources, services, and manages network security and user access. <br><b>2. Client:</b> Requests resources and services from the server. <br><b>3. Domain Controller:</b> Manages user authentication and access control within a domain. <br><b>4. Network Devices:</b> Routers, switches, and hubs that facilitate data transmission between clients and servers. <br><br><b>Interaction:</b> Clients send requests to the server for resources or services. The server processes these requests and provides the necessary resources. The domain controller handles user authentication and authorization, ensuring that only authorized users can access network resources. Network devices ensure that data is transmitted efficiently between clients and servers."
      },
      {
        "no": "5",
        "question": "Discuss the impact of network architecture on network performance and security. How does the choice of architecture influence these aspects?",
        "answer": "Network architecture significantly affects both performance and security: <br><br><b>1. Performance:</b> <br>Different architectures can impact network speed and efficiency. For example, a centralized architecture might experience bottlenecks if the central server is overloaded, while a decentralized architecture may have better performance as tasks are distributed across multiple nodes. <br><b>2. Security:</b> <br>Centralized architectures typically offer better security management as control and monitoring are centralized, making it easier to enforce security policies. In contrast, decentralized architectures can be more challenging to secure as there are multiple points of access and less centralized control. <br><br>The choice of architecture should balance performance and security needs, considering factors such as network size, security requirements, and budget constraints."
      }
    ];

  return (
    <div>
      <QuestDisplay title = "CN - Network Architecture" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default NetworkArchitecture
