import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const ReferenceModel = () => {

    const questionArray = [
        {
            "question": "Which layer of the OSI model is responsible for end-to-end communication and error recovery?",
            "options": [
              "Physical layer",
              "Data link layer",
              "Network layer",
              "Transport layer"
            ],
            "correct": "Transport layer",
            "explain": "The Transport layer (Layer 4) is responsible for end-to-end communication, error recovery, and flow control between hosts."
          },
          {
            "question": "Which protocol is used at the Application layer of the TCP/IP model to transfer files?",
            "options": [
              "TCP",
              "UDP",
              "FTP",
              "IP"
            ],
            "correct": "FTP",
            "explain": "File Transfer Protocol (FTP) operates at the Application layer of the TCP/IP model and is used for transferring files between systems."
          },
          {
            "question": "Which OSI layer is concerned with routing packets across networks?",
            "options": [
              "Application layer",
              "Transport layer",
              "Network layer",
              "Data link layer"
            ],
            "correct": "Network layer",
            "explain": "The Network layer (Layer 3) is responsible for routing packets across networks and logical addressing, such as IP addresses."
          },
          {
            "question": "What is the primary difference between IPv4 and IPv6 addressing?",
            "options": [
              "IPv6 uses a 32-bit address space while IPv4 uses a 128-bit address space.",
              "IPv4 addresses are longer than IPv6 addresses.",
              "IPv6 addresses are 128 bits long compared to 32 bits in IPv4.",
              "IPv4 supports more devices than IPv6."
            ],
            "correct": "IPv6 addresses are 128 bits long compared to 32 bits in IPv4.",
            "explain": "IPv6 uses a 128-bit address space, allowing for a vastly larger number of addresses compared to the 32-bit address space of IPv4."
          },
          {
            "question": "In subnetting, what does the subnet mask of 255.255.255.0 indicate?",
            "options": [
              "A network with 256 hosts",
              "A network with 65,536 hosts",
              "A network with 1,024 hosts",
              "A network with 254 usable hosts"
            ],
            "correct": "A network with 254 usable hosts",
            "explain": "A subnet mask of 255.255.255.0 provides 256 IP addresses, with 254 usable addresses (subtracting the network and broadcast addresses)."
          },
          {
            "question": "Which of the following is a feature of IPv6 that is not present in IPv4?",
            "options": [
              "Network Address Translation (NAT)",
              "Address Resolution Protocol (ARP)",
              "Larger address space",
              "Header checksum"
            ],
            "correct": "Larger address space",
            "explain": "IPv6 offers a much larger address space (128-bit addresses) compared to IPv4 (32-bit addresses), which allows for a greater number of unique IP addresses."
          },
          {
            "question": "Which layer of the OSI model is responsible for converting data into electrical or optical signals?",
            "options": [
              "Application layer",
              "Transport layer",
              "Physical layer",
              "Network layer"
            ],
            "correct": "Physical layer",
            "explain": "The Physical layer (Layer 1) is responsible for the transmission of raw bits over a communication channel, converting data into electrical or optical signals."
          },
          {
            "question": "What is the primary purpose of Network Address Translation (NAT)?",
            "options": [
              "To provide security by hiding internal IP addresses",
              "To route packets across different networks",
              "To encrypt data for secure transmission",
              "To manage network congestion"
            ],
            "correct": "To provide security by hiding internal IP addresses",
            "explain": "NAT is primarily used to hide internal IP addresses from the external network, providing a layer of security and allowing multiple devices to share a single public IP address."
          },
          {
            "question": "What is a key benefit of using CIDR (Classless Inter-Domain Routing) in IP addressing?",
            "options": [
              "It simplifies routing by grouping IP addresses into classes.",
              "It provides more efficient use of IP address space by allowing variable-length subnet masks.",
              "It enforces strict address class boundaries.",
              "It eliminates the need for subnet masks."
            ],
            "correct": "It provides more efficient use of IP address space by allowing variable-length subnet masks.",
            "explain": "CIDR allows for variable-length subnet masks, which helps in efficiently using the IP address space and reducing the number of routing entries."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Explain the OSI model and its layers. How does it provide a framework for network communication?",
            "answer": "The OSI (Open Systems Interconnection) model is a conceptual framework used to understand and implement network communication. It consists of seven layers: <br><br><b>1. Physical Layer:</b> Deals with the physical connection between devices. <br><b>2. Data Link Layer:</b> Handles error detection and correction, and data framing. <br><b>3. Network Layer:</b> Manages routing of data packets and logical addressing. <br><b>4. Transport Layer:</b> Ensures reliable data transfer and flow control. <br><b>5. Session Layer:</b> Manages sessions and controls the dialog between applications. <br><b>6. Presentation Layer:</b> Translates data formats and encryption/decryption. <br><b>7. Application Layer:</b> Provides network services to end-user applications. <br><br>Each layer has specific functions and interacts with the layers above and below it, providing a structured approach to network communication."
          },
          {
            "no": "2",
            "question": "What are the key differences between the OSI model and the TCP/IP model?",
            "answer": "<table style='border-collapse: collapse; width: 100%;'><thead><tr><th style='border: 1px solid black; padding: 2px;'>Aspect</th><th style='border: 1px solid black; padding: 2px;'>OSI Model</th><th style='border: 1px solid black; padding: 2px;'>TCP/IP Model</th></tr></thead><tbody><tr><td style='border: 1px solid black; padding: 2px;'>Layers</td><td style='border: 1px solid black; padding: 2px;'>It has 7 layers</td><td style='border: 1px solid black; padding: 2px;'>It has 4 layers</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Usage</td><td style='border: 1px solid black; padding: 2px;'>It is low in usage</td><td style='border: 1px solid black; padding: 2px;'>It is mostly used</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Approach</td><td style='border: 1px solid black; padding: 2px;'>It is vertically approached</td><td style='border: 1px solid black; padding: 2px;'>It is horizontally approached</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Delivery</td><td style='border: 1px solid black; padding: 2px;'>Delivery of the package is guaranteed in OSI Model</td><td style='border: 1px solid black; padding: 2px;'>Delivery of the package is not guaranteed in TCP/IP Model</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Replacement</td><td style='border: 1px solid black; padding: 2px;'>Replacement of tools and changes can easily be done in this model</td><td style='border: 1px solid black; padding: 2px;'>Replacing the tools is not easy as it is in OSI Model</td></tr><tr><td style='border: 1px solid black; padding: 2px;'>Reliability</td><td style='border: 1px solid black; padding: 2px;'>It is less reliable than TCP/IP Model</td><td style='border: 1px solid black; padding: 2px;'>It is more reliable than OSI Model</td></tr></tbody></table>"
          },
          {
            "no": "3",
            "question": "Describe the different classes of IPv4 addresses and their uses. How do they influence network design?",
            "answer": "IPv4 addresses are classified into five classes based on their range and purpose: <br><br><b>1. Class A:</b> Ranges from 0.0.0.0 to 127.255.255.255. Used for large networks with many hosts. <br><b>2. Class B:</b> Ranges from 128.0.0.0 to 191.255.255.255. Used for medium-sized networks. <br><b>3. Class C:</b> Ranges from 192.0.0.0 to 223.255.255.255. Used for smaller networks. <br><b>4. Class D:</b> Ranges from 224.0.0.0 to 239.255.255.255. Used for multicast groups. <br><b>5. Class E:</b> Ranges from 240.0.0.0 to 255.255.255.255. Reserved for experimental purposes. <br><br>These classes influence network design by determining the number of available addresses and the size of the network segments."
          },
          {
            "no": "4",
            "question": "What are the key differences between IPv4 and IPv6? How do these differences impact network operations?",
            "answer": "IPv4 and IPv6 differ in several key aspects: <br><br><b>1. Address Length:</b> IPv4 uses 32-bit addresses (e.g., 192.168.1.1), while IPv6 uses 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). <br><b>2. Address Space:</b> IPv4 has approximately 4.3 billion addresses, whereas IPv6 provides a vastly larger address space, accommodating 3.4 x 10<sup>38</sup> addresses. <br><b>3. Header Complexity:</b> IPv6 headers are simpler and more efficient compared to IPv4, which helps in faster processing. <br><b>4. Support for Autoconfiguration:</b> IPv6 supports stateless address autoconfiguration, simplifying network setup. <br><br>These differences impact network operations by addressing IPv4 address exhaustion, improving network efficiency, and facilitating future expansion."
          },
          {
            "no": "5",
            "question": "Explain the concept of subnetting in IPv4. How does subnetting enhance network management and efficiency?",
            "answer": "Subnetting is the process of dividing a larger network into smaller, manageable sub-networks or subnets. This is achieved by manipulating the subnet mask to allocate a portion of the IP address space to each subnet. <br><br><b>Advantages of Subnetting:</b> <br>1. <b>Improved Network Management:</b> Smaller subnets are easier to manage and troubleshoot. <br>2. <b>Efficient IP Address Usage:</b> Subnetting optimizes the use of available IP addresses by allocating addresses based on actual needs. <br>3. <b>Enhanced Security:</b> Subnets can be used to isolate sensitive areas of the network, reducing the risk of unauthorized access. <br>4. <b>Reduced Broadcast Traffic:</b> Limiting broadcast traffic to specific subnets improves overall network performance. <br><br>Subnetting enhances network management by creating a hierarchical structure that improves efficiency and control."
          }
    ];

  return (
    <div>
      <QuestDisplay title = "CN - Reference Model and IP Addressing" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default ReferenceModel
