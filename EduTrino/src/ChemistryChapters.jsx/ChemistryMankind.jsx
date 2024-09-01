import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const ChemistryMankind = () => {

    const questArray = [
        {
            "question": "The synthesis of which of the following polymers involves the repeated loss of small molecules?",
            "explain": "The synthesis of Nylon-6,6 involves a condensation polymerization reaction, where small molecules like water are repeatedly lost during the formation of the polymer chain. This is different from addition polymers like polythene, where no small molecules are lost.",
            "options": [
              "Polythene",
              "Polyester",
              "Polycarbonate",
              "Nylon-6,6"
            ],
            "correct": "Nylon-6,6"
          },
          {
            "question": "Which of the following is an example of an addition polymer?",
            "explain": "Addition polymers are formed by the repeated addition of monomer units without the loss of any small molecules. Polythene is a classic example of an addition polymer.",
            "options": [
              "Polythene",
              "Nylon-6,6",
              "Bakelite",
              "Teflon"
            ],
            "correct": "Polythene"
          },
          {
            "question": "Which synthetic polymer is known for its resistance to heat and chemical reactivity?",
            "explain": "Teflon is a synthetic polymer that is well-known for its exceptional resistance to heat and chemical reactions, making it ideal for non-stick coatings and other high-performance applications.",
            "options": [
              "Polythene",
              "PVC",
              "Teflon",
              "Nylon-6,6"
            ],
            "correct": "Teflon"
          },
          {
            "question": "Which of the following is an example of a synthetic elastomer?",
            "explain": "Elastomers are polymers that have elasticity. Buna-S, a type of synthetic rubber, is an example of a synthetic elastomer.",
            "options": [
              "Nylon-6,6",
              "Polystyrene",
              "Bakelite",
              "Buna-S"
            ],
            "correct": "Buna-S"
          },
          {
            "question": "Which of the following statements is true about natural and synthetic drugs?",
            "explain": "Natural drugs are derived from natural sources such as plants and animals, while synthetic drugs are man-made chemicals. Aspirin is an example of a synthetic drug.",
            "options": [
              "Natural drugs are synthesized in the laboratory.",
              "Synthetic drugs are obtained from natural sources.",
              "Natural drugs are derived from plants and animals.",
              "Synthetic drugs are always less effective than natural drugs."
            ],
            "correct": "Natural drugs are derived from plants and animals."
          },
          {
            "question": "Habit-forming drugs that lead to addiction often belong to which category?",
            "explain": "Habit-forming drugs, such as opioids and benzodiazepines, have a high potential for addiction and are classified as narcotics.",
            "options": [
              "Antibiotics",
              "Narcotics",
              "Antipyretics",
              "Antihistamines"
            ],
            "correct": "Narcotics"
          },
          {
            "question": "Which of the following is a characteristic of an ideal drug?",
            "explain": "An ideal drug should have minimal side effects, be effective at low doses, and target specific areas in the body.",
            "options": [
              "Should have severe side effects",
              "Should require a high dose to be effective",
              "Should be effective at low doses",
              "Should be effective in all parts of the body"
            ],
            "correct": "Should be effective at low doses"
          },
          {
            "question": "Which class of pesticides is specifically designed to target insects?",
            "explain": "Insecticides are a class of pesticides specifically formulated to kill or repel insects. They are commonly used in agriculture to protect crops from insect pests.",
            "options": [
              "Herbicides",
              "Fungicides",
              "Insecticides",
              "Rodenticides"
            ],
            "correct": "Insecticides"
          },
          {
            "question": "Which of the following polymers is an example of a condensation polymer?",
            "explain": "Nylon-6,6 is a condensation polymer formed by the reaction between adipic acid and hexamethylene diamine, with the elimination of water.",
            "options": [
              "Polythene",
              "Nylon-6,6",
              "Polystyrene",
              "PVC"
            ],
            "correct": "Nylon-6,6"
          }
    ];

    const subjective = [
      {
        "no": "1",
        "question": "Why are synthetic polymers like PVC and nylon preferred over natural polymers for industrial applications?",
        "answer": "Synthetic polymers are preferred because they offer consistent quality, durability, and resistance to chemicals, which are essential for industrial uses. Natural polymers vary in quality and are less durable."
      },
      {
        "no": "2",
        "question": "How do the structures of addition polymers differ from condensation polymers, and how does this difference affect their properties?",
        "answer": "Addition polymers form without the loss of small molecules, resulting in long chains, whereas condensation polymers release small molecules during formation. This gives condensation polymers stronger intermolecular forces and higher melting points."
      },
      {
        "no": "3",
        "question": "What makes certain drugs habit-forming, and how does this impact their classification and regulation?",
        "answer": "Habit-forming drugs interact with the brain's reward system, leading to dependence. This makes them controlled substances, requiring strict regulation to prevent misuse and addiction."
      },
      {
        "no": "4",
        "question": "Why is the use of pesticides like insecticides, herbicides, and fungicides both beneficial and potentially harmful to the environment?",
        "answer": "Pesticides protect crops, increasing productivity, but can harm the environment by contaminating water, affecting non-target organisms, and leading to resistant species."
      },
      {
        "no": "5",
        "question": "How does the elasticity of elastomers, such as natural rubber, relate to their molecular structure?",
        "answer": "Elastomers have a coiled molecular structure that allows them to stretch and return to their original shape, making them ideal for products requiring flexibility like tires and elastic bands."
      }
    ];

  return (
    <div>
      <QuestDisplay sub="Chemistry" title="Chemistry - Chemistry in the Service of Mankind" subjective={subjective} question={questArray} />
    </div>
  )
}

export default ChemistryMankind
