import React from 'react'
import QuestDisplay from '../components/QuestDisplay';

const NetworkingDevices = () => {

    const questionArray = [
        {
            "question": "Which device is used to connect multiple devices within a local area network (LAN) and uses MAC addresses to forward data to the correct destination?",
            "options": [
              "Router",
              "Switch",
              "Hub",
              "Modem"
            ],
            "correct": "Switch",
            "explain": "A switch operates at the Data Link layer and uses MAC addresses to forward data only to the intended recipient device within a LAN."
          },
          {
            "question": "What is the primary function of a router in a network?",
            "options": [
              "Forward data based on IP addresses",
              "Connect multiple networks and direct data packets between them",
              "Amplify network signals",
              "Create a wireless network"
            ],
            "correct": "Connect multiple networks and direct data packets between them",
            "explain": "Routers connect different networks (e.g., LANs and WANs) and use IP addresses to route data between them."
          },
          {
            "question": "Which device is primarily used to connect a network to the Internet and modulate/demodulate signals between digital and analog formats?",
            "options": [
              "Router",
              "Switch",
              "Hub",
              "Modem"
            ],
            "correct": "Modem",
            "explain": "A modem modulates and demodulates signals to connect a local network to the Internet, converting digital data into analog signals and vice versa."
          },
          {
            "question": "What is the main purpose of a network hub?",
            "options": [
              "To amplify network signals",
              "To forward data only to specific devices",
              "To broadcast data to all connected devices",
              "To route data between different networks"
            ],
            "correct": "To broadcast data to all connected devices",
            "explain": "A hub broadcasts incoming data to all connected devices, without regard to the destination device, making it less efficient than a switch."
          },
          {
            "question": "Which tool is used to analyze and troubleshoot network performance and issues?",
            "options": [
              "Network Interface Card (NIC)",
              "Network Scanner",
              "Protocol Analyzer",
              "Access Point"
            ],
            "correct": "Protocol Analyzer",
            "explain": "A protocol analyzer (or network analyzer) captures and analyzes network traffic to troubleshoot and monitor network performance."
          },
          {
            "question": "What device provides a secure connection to a remote network over the Internet, often used for connecting to corporate networks from home?",
            "options": [
              "Router",
              "Firewall",
              "VPN Gateway",
              "Access Point"
            ],
            "correct": "VPN Gateway",
            "explain": "A VPN Gateway establishes secure, encrypted connections over the Internet to connect remote users or networks to a corporate network."
          },
          {
            "question": "Which networking device is responsible for providing wireless connectivity to devices within a network?",
            "options": [
              "Switch",
              "Router",
              "Access Point",
              "Modem"
            ],
            "correct": "Access Point",
            "explain": "An access point provides wireless connectivity by allowing devices to connect to a wired network via Wi-Fi."
          },
          {
            "question": "What is the function of a firewall in a network?",
            "options": [
              "To route data between different networks",
              "To filter and control incoming and outgoing network traffic based on security rules",
              "To amplify network signals",
              "To provide a wireless network connection"
            ],
            "correct": "To filter and control incoming and outgoing network traffic based on security rules",
            "explain": "A firewall monitors and controls network traffic to protect the network from unauthorized access and threats."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Explain the role and functions of different networking devices used in a typical network setup.",
            "answer": "In a typical network setup, several networking devices play crucial roles in ensuring efficient communication and network management:<br><br><b>1. Router</b>: Directs data packets between different networks, such as between a local network and the internet. It uses IP addresses to determine the best path for data.<br><br><b>2. Switch</b>: Connects devices within the same network and uses MAC addresses to forward data only to the intended recipient device, improving network efficiency.<br><br><b>3. Hub</b>: A basic networking device that connects multiple devices in a network, broadcasting incoming data to all connected devices. It is less efficient compared to switches.<br><br><b>4. Modem</b>: Converts digital data from a computer into analog signals for transmission over telephone lines and vice versa. It enables internet access.<br><br><b>5. Access Point</b>: Allows wireless devices to connect to a wired network using Wi-Fi. It extends the network coverage and provides wireless connectivity.<br><br><b>6. Firewall</b>: Monitors and controls incoming and outgoing network traffic based on predetermined security rules. It protects the network from unauthorized access and cyber threats."
          }
    ];

  return (
    <div>
      <QuestDisplay title = "CN - Networking" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default NetworkingDevices
