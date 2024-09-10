import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const ECommerce = () => {

    const questionArray = [
        {
            "question": "Which of the following is a critical component in an e-commerce system?",
            "options": [
              "Email Marketing",
              "Digital Payment Systems",
              "Television Advertising",
              "Physical Retail Stores"
            ],
            "correct": "Digital Payment Systems",
            "explain": "Digital payment systems, including online wallets, credit cards, and mobile banking, are crucial components that facilitate transactions in e-commerce systems."
          },
          {
            "question": "Which type of e-commerce focuses primarily on transactions between businesses and consumers?",
            "options": [
              "B2B (Business-to-Business)",
              "C2C (Consumer-to-Consumer)",
              "B2C (Business-to-Consumer)",
              "C2B (Consumer-to-Business)"
            ],
            "correct": "B2C (Business-to-Consumer)",
            "explain": "B2C refers to businesses selling products or services directly to consumers, such as online retail stores like Amazon or Flipkart."
          },
          {
            "question": "In the context of Nepal, which of the following is a significant challenge to the growth of e-commerce?",
            "options": [
              "Limited access to mobile phones",
              "Poor internet infrastructure",
              "Excessive digital payment adoption",
              "High literacy rates"
            ],
            "correct": "Poor internet infrastructure",
            "explain": "While Nepal has seen growth in e-commerce, the lack of reliable internet infrastructure remains a key challenge to its further development."
          },
          {
            "question": "What is one major advantage of e-commerce for businesses?",
            "options": [
              "Limited access to customer data",
              "Reduced operational costs",
              "Decreased market competition",
              "Reduced delivery time for physical goods"
            ],
            "correct": "Reduced operational costs",
            "explain": "E-commerce platforms allow businesses to reduce operational costs by eliminating the need for physical storefronts and reaching customers directly online."
          },
          {
            "question": "The scope of e-commerce in Nepal can be expanded significantly by:",
            "options": [
              "Increasing the number of physical stores",
              "Improving mobile banking infrastructure and digital literacy",
              "Limiting internet access to major cities",
              "Reducing the role of government in digital policy"
            ],
            "correct": "Improving mobile banking infrastructure and digital literacy",
            "explain": "The growth of e-commerce in Nepal heavily depends on improved mobile banking, internet access, and digital literacy, allowing more citizens to engage in online transactions."
          },
          {
            "question": "Which of the following steps has the Nepal government taken to promote e-commerce in the country?",
            "options": [
              "Banning foreign e-commerce platforms",
              "Introducing digital payment policies and fostering startups",
              "Limiting internet access in rural areas",
              "Encouraging only cash-on-delivery systems"
            ],
            "correct": "Introducing digital payment policies and fostering startups",
            "explain": "Nepal's government has taken steps to promote e-commerce by encouraging the use of digital payment systems and supporting local startups to embrace online business models."
          },
          {
            "question": "Which of the following is an example of C2C e-commerce?",
            "options": [
              "An online marketplace where consumers buy from businesses",
              "A platform where consumers sell directly to other consumers",
              "A company's internal portal for managing sales",
              "A business outsourcing tasks to consumers"
            ],
            "correct": "A platform where consumers sell directly to other consumers",
            "explain": "C2C e-commerce refers to platforms such as eBay or OLX, where consumers can sell products directly to other consumers without involving businesses."
          },
          {
            "question": "How does e-commerce benefit the Nepali economy?",
            "options": [
              "It reduces the need for businesses to go online",
              "It creates jobs and opens global markets for Nepali products",
              "It discourages digital payments and modern infrastructure",
              "It limits the competition in the local market"
            ],
            "correct": "It creates jobs and opens global markets for Nepali products",
            "explain": "E-commerce allows Nepali businesses to access international markets, creating job opportunities and increasing the reach of Nepali products globally."
          },
          {
            "question": "Which of the following is NOT an advantage of e-commerce?",
            "options": [
              "Global reach and access to a broader audience",
              "Limited scalability due to technological constraints",
              "Reduced operational costs compared to physical stores",
              "Faster and more convenient shopping experience for consumers"
            ],
            "correct": "Limited scalability due to technological constraints",
            "explain": "E-commerce actually enables greater scalability compared to physical stores, allowing businesses to grow and reach more customers online."
          }
    ];
    const subjective = [
        {
            "no": "1",
            "question": "How does E-Commerce transform traditional business models, and what future trends could reshape it?",
            "answer": "E-Commerce transforms traditional business models in several significant ways: <br><br> <b>1. Global Reach:</b> E-Commerce removes geographical barriers, allowing businesses to reach customers worldwide. Traditional brick-and-mortar stores are limited to their local areas, but online stores can attract and serve international customers, expanding their market significantly. <br> <b>2. Operational Efficiency:</b> Online businesses can reduce overhead costs such as rent, utilities, and staffing associated with physical stores. Automating processes like inventory management and sales transactions streamlines operations and reduces labor costs. <br> <b>3. Direct Interaction:</b> E-Commerce platforms facilitate direct communication between businesses and customers through online chats, reviews, and feedback forms. This direct interaction helps businesses better understand customer needs and improve their products and services. <br> <b>4. 24/7 Operations:</b> Online stores operate round the clock, providing customers with the convenience of shopping at any time, unlike traditional stores that have fixed hours. This continuous availability increases sales opportunities and customer satisfaction. <br> <b>5. Future Trends:</b> The future of E-Commerce includes advancements like Artificial Intelligence (AI) for personalized shopping experiences, blockchain technology for secure transactions, and Virtual Reality (VR) or Augmented Reality (AR) to offer immersive product experiences. These innovations will further enhance the convenience and engagement of online shopping.",
          },
          
          {
            "no": "2",
            "question": "Analyze how E-Commerce can contribute to economic development in countries like Nepal.",
            "answer": "E-Commerce contributes to economic development in several impactful ways: <br><br> <b>1. Market Access:</b> E-Commerce platforms enable small and medium-sized enterprises (SMEs) to access a broader market beyond their local areas. This global reach helps local businesses grow by tapping into international markets, boosting their sales and revenue. <br> <b>2. Job Creation:</b> The growth of E-Commerce leads to job creation in various sectors, including IT, logistics, digital marketing, and customer service. This employment boost helps reduce unemployment rates and supports economic stability. <br> <b>3. Increased Revenue:</b> E-Commerce facilitates an increase in revenue for businesses by offering a new sales channel. Businesses can reach more customers and generate more sales through online transactions compared to traditional methods. <br> <b>4. Entrepreneurial Growth:</b> E-Commerce lowers the barriers to entry for new businesses, enabling entrepreneurs to start and grow their ventures with relatively low initial investment. This encourages innovation and fosters a thriving entrepreneurial ecosystem. <br> <b>5. Infrastructure Development:</b> The expansion of E-Commerce drives improvements in digital infrastructure, such as internet connectivity and payment systems. Enhanced infrastructure benefits other sectors of the economy and contributes to overall development.",
          },
          
          {
            "no": "3",
            "question": "What are the key components of E-Commerce, and how do they interact to facilitate online transactions?",
            "answer": "Key components of E-Commerce include: <br><br> <b>1. Online Storefront:</b> The online storefront is the digital equivalent of a physical store. It includes product listings, shopping carts, and checkout systems, providing customers with a platform to browse and purchase products or services online. <br> <b>2. Payment Gateway:</b> The payment gateway is a secure service that processes online transactions by facilitating communication between the customer’s bank and the merchant’s account. It ensures that payments are processed accurately and securely. <br> <b>3. Inventory Management:</b> Inventory management systems track product availability and manage stock levels. These systems help businesses maintain adequate inventory, prevent stockouts or overstocking, and streamline order fulfillment. <br> <b>4. Customer Relationship Management (CRM):</b> CRM tools manage customer interactions, track purchase history, and analyze customer data to improve relationships and marketing strategies. Effective CRM systems enhance customer satisfaction and loyalty. <br> <b>5. Logistics and Supply Chain:</b> Logistics and supply chain management ensure timely delivery of products from warehouses to customers. Efficient logistics processes, including shipping, warehousing, and handling, are crucial for successful online transactions and customer satisfaction.",
          },
          
          {
            "no": "4",
            "question": "What are the advantages and disadvantages of E-Commerce for consumers and businesses?",
            "answer": "Advantages of E-Commerce: <br><br> <b>1. Convenience:</b> Consumers can shop from anywhere and at any time without the need to visit physical stores, saving time and effort. For businesses, E-Commerce allows for 24/7 operations and eliminates the need for physical retail space. <br> <b>2. Cost Savings:</b> Businesses save on costs associated with maintaining physical stores, such as rent and utilities. Consumers may also benefit from better prices and deals due to reduced operational costs for online retailers. <br> <b>3. Access to Information:</b> Online platforms provide detailed product information, customer reviews, and comparisons, helping consumers make informed purchasing decisions. Businesses can use this data to better understand market trends and customer preferences. <br> <b>4. Scalability:</b> E-Commerce platforms can easily scale to accommodate increased traffic and sales volume. Businesses can expand their product range and reach a larger audience without significant additional investment. <br> <b>5. Personalization:</b> E-Commerce sites can use data analytics to offer personalized recommendations and targeted marketing, enhancing the shopping experience for consumers and increasing conversion rates for businesses. <br><br> Disadvantages of E-Commerce: <br><br> <b>1. Security Concerns:</b> E-Commerce involves risks such as data breaches, fraud, and identity theft. Ensuring robust security measures is essential to protect both consumers and businesses from these threats. <br> <b>2. Limited Physical Interaction:</b> Consumers cannot touch or try products before purchasing, which can lead to dissatisfaction or returns. Businesses miss out on the personal touch of in-store customer service. <br> <b>3. Dependence on Technology:</b> E-Commerce relies heavily on technology, including stable internet access and functional websites. Technical issues or outages can disrupt operations and affect sales. <br> <b>4. Competition:</b> The proliferation of online stores increases competition, making it challenging for individual businesses to stand out. Consumers may face an overwhelming number of choices, making it difficult to decide. <br> <b>5. Return and Refund Challenges:</b> Managing returns and refunds can be more complex for online purchases compared to in-store transactions. Businesses must establish clear policies and procedures to handle these situations effectively.",
          },
          
          {
            "no": "5",
            "question": "Discuss the scope of E-Commerce in Nepal and the government’s steps towards its implementation.",
            "answer": "The scope of E-Commerce in Nepal includes: <br><br> <b>1. Market Growth:</b> E-Commerce provides opportunities for local businesses to reach broader markets within Nepal and internationally, promoting economic growth and expansion. <br> <b>2. Digital Payment Adoption:</b> The rise in digital payment methods and online banking helps facilitate E-Commerce transactions, making it easier for consumers to make purchases and for businesses to receive payments. <br> <b>3. Consumer Convenience:</b> E-Commerce offers consumers the convenience of shopping from home, which is increasingly important in urban and rural areas alike. <br> <b>4. Business Innovation:</b> The growing E-Commerce sector encourages innovation among businesses, leading to improved services and new business models. <br> <b>5. Job Creation:</b> E-Commerce contributes to job creation in areas such as digital marketing, logistics, and IT support. <br><br> The government’s steps towards implementing E-Commerce in Nepal include: <br><br> <b>1. Infrastructure Development:</b> Investing in digital infrastructure to improve internet connectivity and support E-Commerce growth. <br> <b>2. Regulatory Framework:</b> Developing regulations to ensure secure and fair online transactions, protecting both consumers and businesses. <br> <b>3. Support for Startups:</b> Providing grants, incentives, and support to E-Commerce startups to encourage innovation and business development. <br> <b>4. Digital Literacy Programs:</b> Implementing programs to enhance digital literacy and educate consumers and businesses about E-Commerce practices. <br> <b>5. Collaboration with Private Sector:</b> Partnering with private companies to create a conducive environment for E-Commerce through public-private initiatives."
          }
    ];

  return (
    <div>
      <QuestDisplay title="CT - E Commerce" question={questionArray} subjective={subjective} sub="CT" />
    </div>
  )
}

export default ECommerce
