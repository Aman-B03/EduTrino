import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const DevicesAndTransmission = () => {

    const questionArray = [
        {
            "question": "Which type of transmission media uses physical cables or wires to transmit data?",
            "options": [
              "Bounded media",
              "Unbounded media",
              "Wireless media",
              "Optical media"
            ],
            "correct": "Bounded media",
            "explain": "Bounded media, also known as wired or guided media, involves physical cables such as twisted pair, coaxial cables, and fiber optics to transmit data."
          },
          {
            "question": "Which of the following is a type of bounded transmission media?",
            "options": [
              "Radio waves",
              "Microwaves",
              "Fiber optic cables",
              "Infrared"
            ],
            "correct": "Fiber optic cables",
            "explain": "Fiber optic cables are a type of bounded transmission media that use light to transmit data over long distances with high speed and low attenuation."
          },
          {
            "question": "What is one main disadvantage of using coaxial cables as a transmission medium?",
            "options": [
              "High susceptibility to electromagnetic interference",
              "High cost of installation",
              "Limited bandwidth compared to fiber optics",
              "Lack of flexibility"
            ],
            "correct": "Limited bandwidth compared to fiber optics",
            "explain": "Coaxial cables have a lower bandwidth and data transmission rate compared to fiber optic cables, making them less suitable for high-speed applications."
          },
          {
            "question": "Which transmission medium uses electromagnetic waves to transmit data without physical cables?",
            "options": [
              "Bounded media",
              "Unbounded media",
              "Wired media",
              "Guided media"
            ],
            "correct": "Unbounded media",
            "explain": "Unbounded media, also known as unguided media, uses electromagnetic waves (e.g., radio waves, microwaves) to transmit data through the air or space without physical cables."
          },
          {
            "question": "Which type of unbounded transmission media is commonly used for short-range communication between devices?",
            "options": [
              "Microwave transmission",
              "Infrared",
              "Satellite communication",
              "Fiber optics"
            ],
            "correct": "Infrared",
            "explain": "Infrared communication is used for short-range wireless data transmission between devices, such as remote controls and some wireless peripherals."
          },
          {
            "question": "What is a significant advantage of using fiber optic cables compared to traditional copper cables?",
            "options": [
              "Higher susceptibility to interference",
              "Lower bandwidth",
              "Higher data transmission speed and capacity",
              "Lower cost"
            ],
            "correct": "Higher data transmission speed and capacity",
            "explain": "Fiber optic cables provide higher data transmission speeds and greater capacity compared to traditional copper cables, and are less susceptible to electromagnetic interference."
          },
          {
            "question": "Which of the following is an advantage of unbounded transmission media?",
            "options": [
              "Requires physical cabling",
              "Higher installation cost",
              "Flexibility and ease of installation",
              "Lower data transmission speed"
            ],
            "correct": "Flexibility and ease of installation",
            "explain": "Unbounded media, such as wireless communication, offers flexibility and ease of installation as it does not require physical cables and can cover large areas."
          },
          {
            "question": "What is a major disadvantage of using microwave transmission for long-distance communication?",
            "options": [
              "Limited bandwidth",
              "High susceptibility to interference from physical obstacles",
              "Low data transmission speed",
              "High cost of equipment"
            ],
            "correct": "High susceptibility to interference from physical obstacles",
            "explain": "Microwave transmission can be disrupted by physical obstacles such as buildings or terrain, which can limit its effectiveness for long-distance communication."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "Compare and contrast the advantages and disadvantages of bounded and unbounded transmission media.",
            "answer": "Bounded transmission media, such as twisted pair cables and coaxial cables, have the advantage of providing higher data transfer rates and less susceptibility to external interference compared to unbounded media. However, they can be more expensive and less flexible to install. Unbounded media, like radio waves and microwaves, offer greater mobility and easier installation but are more susceptible to interference and generally provide lower bandwidth. <br><br><b>Advantages of Bounded Media:</b> <br>1. Less interference and better security. <br>2. Higher data transfer rates. <br><br><b>Disadvantages of Bounded Media:</b> <br>1. Higher installation cost. <br>2. Limited flexibility and mobility. <br><br><b>Advantages of Unbounded Media:</b> <br>1. Greater mobility and flexibility. <br>2. Easier to install and deploy. <br><br><b>Disadvantages of Unbounded Media:</b> <br>1. Higher susceptibility to interference. <br>2. Lower data transfer rates."
          },
          {
            "no": "2",
            "question": "What factors should be considered when choosing between twisted pair cables and coaxial cables for a new network installation?",
            "answer": "When choosing between twisted pair cables and coaxial cables, consider the following factors: <br><br><b>1. Data Transfer Rate:</b> Coaxial cables typically offer higher bandwidth and faster data transfer rates compared to twisted pair cables. <br><b>2. Cost:</b> Twisted pair cables are generally more cost-effective than coaxial cables. <br><b>3. Interference:</b> Coaxial cables provide better shielding against electromagnetic interference compared to twisted pair cables. <br><b>4. Installation:</b> Twisted pair cables are easier and more flexible to install than coaxial cables. <br><br>In summary, coaxial cables are suitable for applications requiring higher bandwidth and better shielding, while twisted pair cables are ideal for cost-effective and flexible installations."
          },
          {
            "no": "3",
            "question": "Explain the role of network devices such as routers and switches in managing network traffic.",
            "answer": "Network devices like routers and switches play crucial roles in managing network traffic: <br><br><b>1. Routers:</b> Routers connect different networks and manage traffic between them by determining the best path for data to travel from the source to the destination. They handle traffic between local networks and the internet, and they often include features for managing network security and address assignment (e.g., DHCP). <br><br><b>2. Switches:</b> Switches operate within a single network and manage traffic between devices on that network. They use MAC addresses to forward data only to the specific device that needs it, reducing network congestion and improving efficiency. <br><br>Both devices are essential for efficient network operation and for maintaining network performance and security."
          },
          {
            "no": "4",
            "question": "Discuss the importance of understanding different transmission media for designing a network.",
            "answer": "Understanding different transmission media is critical for designing an effective network. The choice of transmission media affects network performance, cost, and scalability. <br><br><b>1. Performance:</b> Different media have varying bandwidth capacities and susceptibility to interference. For instance, fiber optic cables offer high bandwidth and minimal interference, while copper cables may be more prone to signal degradation. <br><br><b>2. Cost:</b> The cost of installation and maintenance varies between media types. Bounded media like twisted pair cables may be less expensive but could require more infrastructure compared to unbounded media like wireless technologies. <br><br><b>3. Scalability:</b> Some media types are better suited for scaling networks to accommodate more users and higher data loads. Fiber optics are ideal for high-demand applications, whereas wireless solutions offer flexibility in expanding coverage areas. <br><br>Choosing the appropriate transmission media based on these factors ensures a network that meets performance requirements and budget constraints while allowing for future growth."
          }
    ];

  return (
    <div>
      <QuestDisplay title = "CN - Devices and Transmission Media" question = {questionArray} subjective = {subjective} sub = "CN" /> 
    </div>
  )
}

export default DevicesAndTransmission
