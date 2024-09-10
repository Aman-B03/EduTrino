import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const BigData = () => {

    const questionArray = [
        {
            "question": "Which characteristic of Big Data refers to the vast volume of data generated every second?",
            "options": [
              "Velocity",
              "Volume",
              "Variety",
              "Veracity"
            ],
            "correct": "Volume",
            "explain": "Volume refers to the sheer amount of data generated and stored. It highlights the scale and size of Big Data."
          },
          {
            "question": "What is a primary challenge associated with Big Data that involves the accuracy and trustworthiness of data?",
            "options": [
              "Variety",
              "Velocity",
              "Veracity",
              "Volume"
            ],
            "correct": "Veracity",
            "explain": "Veracity deals with the quality, accuracy, and trustworthiness of the data, which is crucial for making reliable decisions."
          },
          {
            "question": "Which of the following is NOT considered an advantage of Big Data?",
            "options": [
              "Improved decision-making",
              "Enhanced customer experiences",
              "Reduced data storage costs",
              "Increased data processing speed"
            ],
            "correct": "Reduced data storage costs",
            "explain": "While Big Data offers numerous benefits, such as improved decision-making and enhanced customer experiences, it often results in increased data storage costs rather than reduced."
          },
          {
            "question": "Which type of Big Data describes data that is structured and stored in traditional databases?",
            "options": [
              "Unstructured Data",
              "Semi-structured Data",
              "Structured Data",
              "Metadata"
            ],
            "correct": "Structured Data",
            "explain": "Structured Data is highly organized and easily searchable within traditional databases, unlike unstructured or semi-structured data."
          },
          {
            "question": "What is a primary function of Hadoop in managing Big Data?",
            "options": [
              "Data visualization",
              "Data warehousing",
              "Data processing and storage",
              "Data encryption"
            ],
            "correct": "Data processing and storage",
            "explain": "Hadoop is an open-source framework that enables the distributed processing and storage of large data sets across clusters of computers."
          },
          {
            "question": "Which characteristic of Big Data describes the need to process data in real-time or near-real-time?",
            "options": [
              "Velocity",
              "Volume",
              "Variety",
              "Veracity"
            ],
            "correct": "Velocity",
            "explain": "Velocity refers to the speed at which data is generated and needs to be processed, which is crucial for real-time or near-real-time analytics."
          },
          {
            "question": "Which example best illustrates the use of Big Data in the healthcare industry?",
            "options": [
              "Predictive analytics for patient outcomes",
              "Basic patient record management",
              "Simple appointment scheduling",
              "Traditional medical billing"
            ],
            "correct": "Predictive analytics for patient outcomes",
            "explain": "Predictive analytics using Big Data helps in forecasting patient outcomes and improving healthcare services, as opposed to more basic or traditional processes."
          },
          {
            "question": "Which Big Data challenge involves integrating and analyzing data from diverse sources?",
            "options": [
              "Volume",
              "Veracity",
              "Variety",
              "Velocity"
            ],
            "correct": "Variety",
            "explain": "Variety refers to the different types of data (structured, semi-structured, unstructured) and the challenge of integrating and analyzing them effectively."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "How does Big Data transform decision-making processes in organizations?",
            "answer": "Big Data transforms decision-making processes in organizations in the following ways: <br><br> <b>1. Enhanced Insights:</b> Analyzes large volumes of data to uncover trends and patterns that were previously hidden, providing deeper insights into business operations and customer behavior. <br> <b>2. Data-Driven Decisions:</b> Supports evidence-based decision-making by providing comprehensive data analysis, reducing reliance on intuition and guesswork. <br> <b>3. Predictive Analytics:</b> Uses predictive models to forecast future trends and outcomes, allowing organizations to make proactive decisions and stay ahead of competitors. <br> <b>4. Real-Time Analysis:</b> Enables real-time data processing and analysis, allowing organizations to respond quickly to emerging issues and opportunities. <br> <b>5. Improved Efficiency:</b> Identifies inefficiencies and optimization opportunities through detailed data analysis, leading to more efficient business processes and resource utilization."
          },
          
          {
            "no": "2",
            "question": "What are the primary characteristics of Big Data that distinguish it from traditional data management?",
            "answer": "The primary characteristics of Big Data that distinguish it from traditional data management include: <br><br> <b>1. Volume:</b> Refers to the massive amount of data generated from various sources, including social media, sensors, and transactional systems. <br> <b>2. Velocity:</b> Describes the speed at which data is generated and processed, often in real-time or near-real-time. <br> <b>3. Variety:</b> Indicates the diverse types of data, including structured, semi-structured, and unstructured formats, such as text, images, and video. <br> <b>4. Veracity:</b> Refers to the accuracy and trustworthiness of the data, addressing issues related to data quality and reliability. <br> <b>5. Value:</b> Focuses on the importance and usefulness of the data, emphasizing its potential to provide actionable insights and drive business value."
          },
          
          {
            "no": "3",
            "question": "What are the major challenges associated with managing and analyzing Big Data, and how can they be addressed?",
            "answer": "The major challenges associated with managing and analyzing Big Data include: <br><br> <b>1. Data Quality:</b> Ensuring the accuracy, consistency, and completeness of data, which can be addressed through data cleaning and validation techniques. <br> <b>2. Data Integration:</b> Combining data from diverse sources and formats, which can be managed using data integration tools and platforms. <br> <b>3. Scalability:</b> Handling the growing volume of data efficiently, which requires scalable storage and processing solutions. <br> <b>4. Security and Privacy:</b> Protecting sensitive data from unauthorized access and breaches, which involves implementing robust security measures and compliance with privacy regulations. <br> <b>5. Skill Shortage:</b> Addressing the lack of skilled professionals in Big Data analytics, which can be mitigated through training programs and hiring data science experts."
          },
          
          {
            "no": "4",
            "question": "What are the key advantages of utilizing Big Data technologies in business operations?",
            "answer": "The key advantages of utilizing Big Data technologies in business operations include: <br><br> <b>1. Enhanced Customer Insights:</b> Provides a deeper understanding of customer preferences and behaviors, leading to more targeted marketing and personalized services. <br> <b>2. Improved Operational Efficiency:</b> Optimizes business processes and resource allocation through detailed data analysis and insights. <br> <b>3. Competitive Advantage:</b> Enables organizations to identify market trends and opportunities earlier than competitors, gaining a strategic edge. <br> <b>4. Innovation and Product Development:</b> Facilitates the development of new products and services by analyzing customer feedback and market needs. <br> <b>5. Risk Management:</b> Helps in predicting and mitigating potential risks by analyzing historical data and identifying risk factors."
          },
          
          {
            "no": "5",
            "question": "What are the different types of Big Data, and how are they utilized in various applications?",
            "answer": "The different types of Big Data and their utilization in various applications are: <br><br> <b>1. Structured Data:</b> Organized in a fixed format such as databases and spreadsheets, used in traditional business applications like CRM and ERP systems. <br> <b>2. Semi-Structured Data:</b> Contains tags and markers to separate data elements, such as JSON or XML files, utilized in web data, and log files. <br> <b>3. Unstructured Data:</b> Lacks a predefined format, including text documents, emails, and multimedia files, used in content analysis and social media monitoring. <br> <b>4. Real-Time Data:</b> Continuously generated and processed data, such as streaming data from sensors or social media feeds, used in live analytics and monitoring applications. <br> <b>5. Historical Data:</b> Data accumulated over time, used for trend analysis and forecasting in areas like financial analysis and research."
          
          },
          {
            "no": "6",
            "question": "What is Hadoop, and how does it support Big Data processing?",
            "answer": "Hadoop is an open-source framework that supports Big Data processing through its key components: <br><br> <b>1. Hadoop Distributed File System (HDFS):</b> Provides scalable and reliable storage for large datasets across multiple machines. <br> <b>2. MapReduce:</b> A programming model for processing large datasets in parallel across a Hadoop cluster, enabling efficient data processing. <br> <b>3. YARN (Yet Another Resource Negotiator):</b> Manages and allocates resources for applications running on the Hadoop cluster, optimizing resource utilization. <br> <b>4. Hadoop Ecosystem:</b> Includes tools and frameworks such as Hive, Pig, and HBase that enhance data processing, querying, and storage capabilities. <br> <b>5. Scalability:</b> Allows for the addition of more nodes to the cluster as data volume grows, providing a scalable solution for Big Data processing."
          }
    ];

  return (
    <div>
      <QuestDisplay title="CT - Big Data" question={questionArray} subjective={subjective} sub="CT" />
    </div>
  )
}

export default BigData
