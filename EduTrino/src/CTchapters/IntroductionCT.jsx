import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const IntroductionCT = () => {

    const questionArray = [
        {
            "question": "Which of the following best illustrates the impact of Artificial Intelligence (AI) in contemporary technology?",
            "options": [
              "AI is solely used for automating manual labor tasks",
              "AI enables predictive analytics, driving decision-making in industries like healthcare and finance",
              "AI can only function with the integration of 5G networks",
              "AI replaces human intelligence in all fields"
            ],
            "correct": "AI enables predictive analytics, driving decision-making in industries like healthcare and finance",
            "explain": "The true power of AI lies in its ability to analyze vast amounts of data, provide insights, and make predictions that support decision-making in critical fields like healthcare and finance."
          },
          {
            "question": "Which contemporary technology has enabled the concept of decentralized applications (DApps) and smart contracts, especially in financial systems?",
            "options": [
              "Cloud Computing",
              "Blockchain Technology",
              "Quantum Computing",
              "Augmented Reality"
            ],
            "correct": "Blockchain Technology",
            "explain": "Blockchain technology, with its decentralized nature, underpins the creation of decentralized applications (DApps) and smart contracts, especially in financial systems such as cryptocurrency."
          },
          {
            "question": "Quantum computing is seen as the future of contemporary technology due to its potential to:",
            "options": [
              "Store an infinite amount of data with no energy consumption",
              "Break encryption methods like RSA, posing security threats to modern systems",
              "Replace traditional computing in personal devices",
              "Create perfect simulations of physical reality"
            ],
            "correct": "Break encryption methods like RSA, posing security threats to modern systems",
            "explain": "Quantum computers, by leveraging quantum mechanics, have the potential to solve complex problems much faster than classical computers, including breaking widely used encryption methods like RSA."
          },
          {
            "question": "Which of the following is a significant challenge faced in the mass adoption of 5G technology as a contemporary solution?",
            "options": [
              "High power consumption of 5G devices",
              "Incompatibility with cloud computing services",
              "Increased cybersecurity risks due to larger attack surfaces",
              "Lack of integration with IoT devices"
            ],
            "correct": "Increased cybersecurity risks due to larger attack surfaces",
            "explain": "While 5G promises high-speed connectivity, it also introduces greater cybersecurity risks due to the larger number of connected devices and a wider attack surface for potential threats."
          },
          {
            "question": "Which of the following best explains how <b>Edge Computing<b> is redefining data processing in contemporary technology?",
            "options": [
              "It centralizes data storage for better accessibility",
              "It processes data closer to where it is generated, reducing latency",
              "It solely focuses on AI and machine learning applications",
              "It replaces cloud computing as the main data storage solution"
            ],
            "correct": "It processes data closer to where it is generated, reducing latency",
            "explain": "Edge computing moves data processing closer to the source (e.g., IoT devices), thereby reducing latency and bandwidth usage, enhancing real-time data analysis."
          },
          {
            "question": "IPv6 was introduced as a solution to the limitations of IPv4, particularly:",
            "options": [
              "Improving encryption capabilities for secure communication",
              "Enabling a significantly larger address space to accommodate future device growth",
              "Reducing the overhead of routing algorithms in network infrastructure",
              "Optimizing data packet transmission for mobile networks"
            ],
            "correct": "Enabling a significantly larger address space to accommodate future device growth",
            "explain": "IPv6 offers a vastly larger address space (128-bit) compared to IPv4 (32-bit), addressing the issue of IP address exhaustion and accommodating the growing number of internet-connected devices."
          },
          {
            "question": "In the context of cybersecurity, which contemporary technology is considered crucial in detecting and mitigating zero-day vulnerabilities?",
            "options": [
              "Blockchain",
              "Quantum Computing",
              "Artificial Intelligence and Machine Learning",
              "Cloud Computing"
            ],
            "correct": "Artificial Intelligence and Machine Learning",
            "explain": "AI and machine learning models can be trained to detect anomalous patterns in network traffic, which is critical for identifying zero-day vulnerabilities before they are exploited."
          }
        
    ];
    const subjective = [
        {
            "no": "1",
            "question": "What is contemporary technology? Discuss its key features and how it differentiates from traditional technologies.",
            "answer": "Contemporary technology refers to the modern and innovative technologies that are currently being developed and adopted in various sectors. These technologies tend to evolve rapidly and include digital innovations like artificial intelligence, blockchain, IoT, and quantum computing. Unlike traditional technologies, which are often static and slow to change, contemporary technologies continuously evolve, pushing the boundaries of efficiency, speed, and connectivity."
          },
          {
            "no": "2",
            "question": "Why is there a need for contemporary technology in modern industries? Discuss the factors driving its adoption.",
            "answer": "The need for contemporary technology arises from the rapid pace of innovation and the demand for more efficient, scalable, and intelligent systems. Key factors driving its adoption include:<br><br>1. Increased demand for automation and efficiency.<br>2. Globalization, requiring faster communication and data transfer.<br>3. The need to manage large volumes of data (Big Data).<br>4. Competition driving innovation in products and services.<br>5. The demand for personalized customer experiences."
          },
          {
            "no": "3",
            "question": "Discuss five major applications of contemporary technologies in daily life and how they are transforming industries.",
            "answer": "Contemporary technologies are playing a transformative role across various industries. Five major applications include:<br><br>1. <b>Artificial Intelligence (AI)</b>: AI is revolutionizing industries like healthcare, finance, and customer service by enabling predictive analysis, automation, and personalization.<br>2. <b>Blockchain</b>: Blockchain is being used for secure, transparent transactions in financial services, supply chain management, and even voting systems.<br>3. <b>Internet of Things (IoT)</b>: IoT devices are enhancing smart homes, healthcare monitoring, and industrial automation.<br>4. <b>Cloud Computing</b>: Cloud technology is enabling businesses to store, process, and access data from anywhere, reducing the need for physical infrastructure.<br>5. <b>Quantum Computing</b>: Quantum computing holds the potential to solve complex problems in cryptography, chemistry, and material science, offering computational power beyond classical computers."
          },
          {
            "no": "4",
            "question": "What are the primary advantages of contemporary technology? Discuss how it positively impacts businesses and individuals.",
            "answer": "Contemporary technology offers numerous advantages that have a significant positive impact on both businesses and individuals. Some primary benefits include:<br><br>1. <b>Increased Efficiency</b>: Automation and AI enhance productivity by reducing manual work and human errors.<br>2. <b>Scalability</b>: Cloud computing and IoT allow businesses to scale operations globally without heavy infrastructure investments.<br>3. <b>Cost Savings</b>: Technologies like remote work tools, cloud storage, and virtual collaboration reduce costs associated with physical presence and resources.<br>4. <b>Data-Driven Decision Making</b>: Big data analytics enables more informed, evidence-based decision-making.<br>5. <b>Innovation and Personalization</b>: Contemporary technology fosters innovation, enabling the creation of personalized customer experiences."
          },
          {
            "no": "5",
            "question": "What are some of the currently used contemporary technologies, and how do they play a role in shaping the future?",
            "answer": "Some of the presently used contemporary technologies include:<br><br>1. <b>Artificial Intelligence (AI)</b>: AI is shaping industries by enabling automation, data analysis, and decision-making without human intervention.<br>2. <b>Blockchain</b>: Blockchain technology is redefining transparency and security in financial transactions, healthcare, and even government operations.<br>3. <b>5G Networks</b>: 5G technology is providing faster, more reliable internet connectivity, enabling advancements in IoT, augmented reality, and smart cities.<br>4. <b>Quantum Computing</b>: While still in its early stages, quantum computing is expected to revolutionize problem-solving in fields like cryptography and pharmaceutical research.<br>5. <b>Virtual and Augmented Reality (VR/AR)</b>: These technologies are being used in gaming, education, healthcare, and design, offering immersive, interactive experiences."
          }
    ];

    return (
        <div>
            <QuestDisplay title="CT - Introduction to Contemporary Technology" question={questionArray} subjective={subjective} sub="CT" />

        </div>
    )
}

export default IntroductionCT
