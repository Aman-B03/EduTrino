import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const HeavyMetals = () => {

    const questArray = [
        {
            "question": "In the thermite process, what is the reducing agent used?",
            "explain": "In the thermite process, aluminum (Al) is used as the reducing agent. The reaction involves aluminum reducing iron(III) oxide (Fe<sub>2</sub>O<sub>3</sub>) to produce iron and aluminum oxide. The reaction is:<br><br>Fe<sub>2</sub>O<sub>3</sub> + 2Al → 2Fe + Al<sub>2</sub>O<sub>3</sub>",
            "options": [
              "C",
              "Zn",
              "Na",
              "Al"
            ],
            "correct": "Al"
          },
          {
            "question": "Which of the following methods is used for the extraction of copper from its ore?",
            "explain": "Copper is extracted from its ore using a combination of processes, including smelting and leaching. One common method is the smelting process, where copper ore (usually copper sulfide) is heated with a reducing agent to obtain copper metal. The reaction is:<br><br>2Cu<sub>2</sub>S + 3O<sub>2</sub> → 2Cu<sub>2</sub>O + 2SO<sub>2</sub><br><br>Further reduction of Cu<sub>2</sub>O produces copper metal:<br>2Cu<sub>2</sub>O + C → 4Cu + CO<sub>2</sub>",
            "options": [
              "Electrolysis",
              "Smelting",
              "Hydrometallurgy",
              "All of the above"
            ],
            "correct": "Smelting"
          },
          {
            "question": "Which of the following statements correctly describes the preparation of blue vitriol (copper(II) sulfate)?",
            "explain": "Blue vitriol, or copper(II) sulfate (CuSO<sub>4</sub>·5H<sub>2</sub>O), is prepared by reacting copper metal with concentrated sulfuric acid. The reaction is:<br><br>Cu + 2H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + 2H<sub>2</sub>O + SO<sub>2</sub><br><br>Upon crystallization, the blue crystalline form of copper(II) sulfate is obtained.",
            "options": [
              "Reacting copper with concentrated sulfuric acid",
              "Heating copper(II) oxide with sulfur dioxide",
              "Reacting copper(II) chloride with sulfuric acid",
              "None of the above"
            ],
            "correct": "Reacting copper with concentrated sulfuric acid"
          },
          {
            "question": "What is the molecular formula of red oxide of copper, and what is its primary use?",
            "explain": "Red oxide of copper, also known as copper(I) oxide, has the molecular formula Cu<sub>2</sub>O. It is used as a pigment in ceramics and as a fungicide. The reaction for its preparation is:<br><br>2Cu + O<sub>2</sub> → 2Cu<sub>2</sub>O",
            "options": [
              "CuO; Used as a catalyst",
              "Cu<sub>2</sub>O; Used as a pigment",
              "CuO; Used as a pigment",
              "Cu<sub>2</sub>O; Used as a catalyst"
            ],
            "correct": "Cu<sub>2</sub>O; Used as a pigment"
          },
          {
            "question": "Which of the following reactions demonstrates the property of zinc reacting with an acid?",
            "explain": "Zinc reacts with acids to produce zinc salts and hydrogen gas. The reaction is:<br><br>Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub><br><br>Zinc is also used in galvanizing iron to prevent rusting.",
            "options": [
              "Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>",
              "Zn + O<sub>2</sub> → ZnO",
              "Zn + NaOH → Na<sub>2</sub>ZnO<sub>2</sub> + H<sub>2</sub>O",
              "Zn + H<sub>2</sub>O → ZnO + H<sub>2</sub>"
            ],
            "correct": "Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>"
          },
          {
            "question": "Which of the following statements about iron is correct?",
            "explain": "Iron reacts with air to form iron(III) oxide (rust) and with acids to produce iron salts and hydrogen gas. The reaction with air is:<br><br>4Fe + 3O<sub>2</sub> → 2Fe<sub>2</sub>O<sub>3</sub><br><br>Iron is used in construction and manufacturing, including the production of steel.",
            "options": [
              "Iron reacts with air to form iron(III) oxide",
              "Iron does not react with acids",
              "Iron is only used in making coins",
              "Iron reacts with water to form iron(III) oxide"
            ],
            "correct": "Iron reacts with air to form iron(III) oxide"
          },
          {
            "question": "Which of the following methods is used to prevent the corrosion of iron?",
            "explain": "To prevent the corrosion of iron, methods such as galvanizing (coating with zinc) and applying protective coatings are commonly used. The reaction for corrosion prevention by galvanizing is:<br><br>Zn (coating) + 2Fe (underneath) → 2Fe + Zn<sub>2</sub>O<sub>3</sub><br><br>The zinc coating protects the iron from rusting.",
            "options": [
              "Galvanizing",
              "Painting",
              "Applying an oil coating",
              "All of the above"
            ],
            "correct": "All of the above"
          },
          

    ];

    const subjective = [
        {
            "no": "1",
            "question": "What is the role of a stabilizer in the froth flotation process?",
            "answer": "In the froth flotation process, stabilizers enhance the stability of the froth layer, preventing it from collapsing too quickly. This helps maintain the structure of the froth, allowing for efficient separation of valuable minerals from gangue. Stabilizers prevent froth collapse, improve recovery of valuable minerals, and reduce the risk of froth overflow."
        },
        

    ];

    return (
        <div>
            <QuestDisplay sub="Chemistry" title="Chemistry - Study of Heavy Metals" subjective={subjective} question={questArray} />

        </div>
    )
}

export default HeavyMetals
