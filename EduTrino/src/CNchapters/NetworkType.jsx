import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const NetworkType = () => {

    const questionArray = [
        {
            "question": "Which type of network typically covers a small geographical area like a home, office, or school?",
            "options": [
              "Wide Area Network (WAN)",
              "Local Area Network (LAN)",
              "Metropolitan Area Network (MAN)",
              "Global Area Network (GAN)"
            ],
            "correct": "Local Area Network (LAN)",
            "explain": "A LAN connects devices in a small geographical area, such as within a building or campus."
          },
          {
            "question": "Which of the following is a primary feature of a Wide Area Network (WAN)?",
            "options": [
              "High-speed connections between local devices",
              "Covers a large geographical area like countries or continents",
              "Low data transfer rates",
              "Limited to a single building"
            ],
            "correct": "Covers a large geographical area like countries or continents",
            "explain": "WANs span large distances and connect multiple smaller networks, such as LANs, across cities, countries, or even continents."
          },
          {
            "question": "What is the main characteristic of a Metropolitan Area Network (MAN)?",
            "options": [
              "It connects devices in a single room",
              "It spans across cities or large campuses",
              "It connects multiple countries",
              "It is typically used in rural areas"
            ],
            "correct": "It spans across cities or large campuses",
            "explain": "MANs are networks that cover a larger geographical area than a LAN, typically a city or a large campus."
          },
          {
            "question": "Which network topology arranges all devices in a circular loop where data travels in one direction?",
            "options": [
              "Star topology",
              "Bus topology",
              "Ring topology",
              "Mesh topology"
            ],
            "correct": "Ring topology",
            "explain": "In a ring topology, each device is connected to exactly two other devices, forming a circular data path."
          },
          {
            "question": "Which of the following is a disadvantage of bus topology?",
            "options": [
              "Difficult to implement",
              "Requires the most cabling",
              "Failure of the main cable can bring down the entire network",
              "Data transmission speed is faster than other topologies"
            ],
            "correct": "Failure of the main cable can bring down the entire network",
            "explain": "In bus topology, all devices are connected to a single central cable, and if that cable fails, the entire network goes down."
          },
          {
            "question": "In a star topology, what happens if the central hub or switch fails?",
            "options": [
              "Only the connected device will fail",
              "The entire network fails",
              "The network will continue to operate using backup connections",
              "The network performance slows down"
            ],
            "correct": "The entire network fails",
            "explain": "Star topology relies on a central hub or switch, and if it fails, all communication within the network stops."
          },
          {
            "question": "Which topology provides the highest level of redundancy and fault tolerance?",
            "options": [
              "Star topology",
              "Bus topology",
              "Ring topology",
              "Mesh topology"
            ],
            "correct": "Mesh topology",
            "explain": "In mesh topology, every device is connected to every other device, providing redundancy and fault tolerance since data can take multiple paths."
          },
          {
            "question": "Which of the following networks requires a high cost to implement but ensures high data privacy and security?",
            "options": [
              "Wide Area Network (WAN)",
              "Mesh topology",
              "Metropolitan Area Network (MAN)",
              "Bus topology"
            ],
            "correct": "Mesh topology",
            "explain": "Mesh topology provides the highest level of security and reliability but comes at a higher cost due to the need for multiple connections between devices."
          }
    ];

    const subjective = [
        {
            "no": "1",
            "question": "Can different topologies be combined in a single network? If so, how does combining topologies affect network performance and management?",
            "answer": "Yes, different topologies can be combined in a single network. This approach is known as a hybrid topology.<br> For example, a common combination is the star-bus topology, where multiple star-configured networks are connected to a central bus. This setup leverages the advantages of both topologies: the reliability of the star topology and the simplicity of the bus topology.<br> Combining topologies can enhance network performance by optimizing data flow and increasing fault tolerance. However, it can also complicate network management and increase costs. The hybrid topology allows for greater flexibility in network design, catering to various needs and scaling requirements. For instance, a company might use a star topology in its office building (to ensure high reliability) and connect several buildings using a bus topology (to reduce costs and simplify the overall structure)."
          },
          {
            "no": "2",
            "question": "Which topology is best for large networks and why?",
            "answer": "For large networks, the mesh topology is often considered the best choice. In a mesh topology, every device is connected to every other device. This extensive interconnection provides high redundancy and reliability.<br><br>The key advantages of mesh topology for large networks include:<br><br><b>Redundancy</b>: If one connection fails, data can still be routed through alternative paths, ensuring continuous network operation.<br><b>Reliability</b>: The multiple pathways between devices enhance fault tolerance, which is critical for large-scale operations where downtime must be minimized.<br><br>However, mesh topology can be complex and costly to implement due to the numerous connections required. For very large networks, a combination of mesh with other topologies, such as hierarchical or hybrid, may be used to balance performance, cost, and manageability."
          },

    ];

  return (
    <div>
      <QuestDisplay title = "CN - Network Types and Topologies" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default NetworkType
