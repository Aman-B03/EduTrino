import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const IntroductionCN = () => {

    const questionArray = [
        {
            "question": "Which of the following best describes a computer network?",
            "options": [
              "A group of computers linked together to share resources",
              "A single computer running multiple programs",
              "A collection of software applications",
              "A method for encrypting data"
            ],
            "correct": "A group of computers linked together to share resources",
            "explain": "A computer network allows multiple computers to connect and share resources like files, printers, and internet access."
          },
          {
            "question": "Which of the following is an advantage of computer networks?",
            "options": [
              "High maintenance costs",
              "Data can be easily shared between connected devices",
              "Requires constant manual data transfer",
              "Increased power consumption"
            ],
            "correct": "Data can be easily shared between connected devices",
            "explain": "One of the primary advantages of a computer network is that it enables the easy sharing of data and resources among connected devices."
          },
          {
            "question": "Which type of network is most commonly used in homes and small businesses?",
            "options": [
              "Local Area Network (LAN)",
              "Wide Area Network (WAN)",
              "Metropolitan Area Network (MAN)",
              "Global Network (GN)"
            ],
            "correct": "Local Area Network (LAN)",
            "explain": "LAN is typically used in small geographic areas, such as homes or offices, to connect computers and share resources like printers or internet access."
          },
          {
            "question": "What is one major disadvantage of computer networks?",
            "options": [
              "Increased data security",
              "Faster access to data",
              "Risk of data breaches and hacking",
              "Reduced need for physical storage devices"
            ],
            "correct": "Risk of data breaches and hacking",
            "explain": "One disadvantage of computer networks is the increased vulnerability to data breaches and hacking due to interconnected systems."
          },
          {
            "question": "Which of the following protocols is most commonly used to transfer data over the internet?",
            "options": [
              "HTTP",
              "FTP",
              "SMTP",
              "TCP/IP"
            ],
            "correct": "TCP/IP",
            "explain": "TCP/IP (Transmission Control Protocol/Internet Protocol) is the core protocol for internet communication and data transfer."
          },
          {
            "question": "What is the main function of a router in a network?",
            "options": [
              "To connect multiple devices within the same local network",
              "To encrypt all data within the network",
              "To manage and direct traffic between different networks",
              "To act as a firewall to prevent attacks"
            ],
            "correct": "To manage and direct traffic between different networks",
            "explain": "A router is responsible for directing data packets between different networks and ensuring efficient communication across them."
          },
          {
            "question": "Which network topology arranges all nodes in a single line where data flows in one direction?",
            "options": [
              "Star topology",
              "Ring topology",
              "Bus topology",
              "Mesh topology"
            ],
            "correct": "Bus topology",
            "explain": "In bus topology, all devices are connected to a single cable (the bus), and data is transmitted in one direction."
          },
          {
            "question": "Which of the following is NOT an example of a network application?",
            "options": [
              "Email",
              "File sharing",
              "Word processing",
              "Remote desktop"
            ],
            "correct": "Word processing",
            "explain": "Word processing is a standalone software application and is not inherently related to networking, unlike email, file sharing, and remote desktop applications."
          }
    ];

    const subjective = [
        {
            "no": "1",
            "question": "What are the key features of a computer network, and how do they improve communication and data sharing?",
            "answer": "A computer network allows multiple devices to communicate and share data with each other. Key features include:<br><br><b>1. Connectivity:</b> Ensures different devices can connect and share data.<br><b>2. Scalability:</b> Networks can grow to include more devices.<br><b>3. Resource sharing:</b> Printers, files, and software can be shared among users.<br><b>4. Security:</b> Protects data from unauthorized access.<br><b>5. Reliability:</b> Ensures consistent data transmission with backup systems."
          },
          {
            "no": "2",
            "question": "Discuss the advantages and disadvantages of computer networks. How do they influence the way we work and study?",
            "answer": "<b>Advantages:</b><br>1. Resource sharing<br>2. Easy communication and collaboration<br>3. Centralized data management<br>4. Data backup and recovery<br>5. Cost savings in the long run<br><br><b>Disadvantages:</b><br>1. Security concerns due to data breaches<br>2. Maintenance and management complexities<br>3. Dependence on a stable internet connection<br>4. Initial setup costs<br><br>Networks allow for easier remote work and online education but pose challenges like cybersecurity threats."
          },
          {
            "no": "3",
            "question": "Explain how computer networks have transformed daily learning and education. Provide examples from real-life scenarios.",
            "answer": "Computer networks have revolutionized education by enabling online courses, virtual classrooms, and collaboration tools. For instance, platforms like Google Classroom and Zoom allow students and teachers to interact remotely. Educational resources like e-books and research papers are accessible globally, making knowledge-sharing instantaneous and widespread."
          },
          {
            "no": "4",
            "question": "How does a computer network ensure secure communication between users, and what methods are used to protect data transmission?",
            "answer": "Computer networks ensure secure communication through encryption, firewalls, and authentication methods. Encryption encodes the data, making it unreadable to unauthorized users. Firewalls act as barriers, controlling incoming and outgoing traffic, while authentication methods like passwords and two-factor authentication verify the identities of users before granting access."
          },
          {
            "no": "5",
            "question": "What role does bandwidth play in the efficiency of a computer network? How does it affect the performance of daily tasks such as video conferencing or file downloads?",
            "answer": "Bandwidth refers to the maximum amount of data that can be transmitted over a network in a given time. Higher bandwidth allows more data to be transmitted quickly, improving performance for tasks like video conferencing, streaming, and large file downloads. Insufficient bandwidth can result in lag, buffering, and slower performance."
          }

    ];

  return (
    <div>
     <QuestDisplay title = "CN - Introduction to Computer Network" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default IntroductionCN
