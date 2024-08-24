import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Phenols = () => {
    const questArray = [
        {
            "question": "On heating an aqueous solution of benzene diazonium chloride, which of the following is formed?",
            "explain": "When benzene diazonium chloride is heated in an aqueous solution, it undergoes a decomposition reaction known as the 'Diazotization Reaction' where the diazonium group is lost and replaced by a hydroxyl group.<br><br>The reaction is:<br><br>C<sub>6</sub>H<sub>5</sub>–N<sub>2</sub>Cl + H<sub>2</sub>O → C<sub>6</sub>H<sub>5</sub>–OH + N<sub>2</sub> + HCl<br><br>This forms phenol, as the diazonium ion is replaced by a hydroxyl group.",
            "options": [
              "benzene",
              "chlorobenzene",
              "phenol",
              "aniline"
            ],
            "correct": "phenol"
          },
          {
            "question": "What is the reagent which will react with cumene to give phenol?",
            "explain": "Cumene (isopropylbenzene) undergoes a reaction known as the 'Cumene Process' to produce phenol and acetone. In this process, cumene is first oxidized to cumene hydroperoxide, which is then decomposed in the presence of an acid catalyst to form phenol and acetone.<br><br>The reaction is:<br><br>C<sub>6</sub>H<sub>5</sub>–CH(CH<sub>3</sub>)<sub>2</sub> + O<sub>2</sub> → C<sub>6</sub>H<sub>5</sub>–OH + (CH<sub>3</sub>)<sub>2</sub>CO",
            "options": [
              "Oxygen",
              "Hydrogen",
              "Nitrogen",
              "Ozone"
            ],
            "correct": "Oxygen"
          },
          {
            "question": "Phenol is obtained by heating aqueous solution of which of the following?",
            "explain": "Phenol is commonly obtained by heating an aqueous solution of benzene diazonium chloride. This reaction, known as the 'Diazotization Reaction,' involves the conversion of benzene diazonium chloride into phenol.<br><br>The reaction is:<br><br>C<sub>6</sub>H<sub>5</sub>–N<sub>2</sub>Cl + H<sub>2</sub>O → C<sub>6</sub>H<sub>5</sub>–OH + N<sub>2</sub> + HCl",
            "options": [
              "Aniline",
              "Benzene diazonium chloride",
              "Benzoic acid",
              "Benzyl alcohol"
            ],
            "correct": "Benzene diazonium chloride"
          },
          {
            "question": "Phenol can be a solid at room temperature while benzene is a liquid. What explains this difference?",
            "explain": "The difference in physical states at room temperature between phenol and benzene is due to the types of intermolecular forces they exhibit.<br><br>1. **Phenol**: Phenol molecules can form hydrogen bonds due to the presence of an -OH group. These hydrogen bonds are strong intermolecular forces, leading to a higher melting point and making phenol a solid at room temperature.<br>2. **Benzene**: Benzene does not have hydrogen bonding but only exhibits London dispersion forces, which are weaker compared to hydrogen bonds. This makes benzene a liquid at room temperature.<br><br>Thus, the correct explanation is that phenol demonstrates hydrogen bonding.",
            "options": [
              "Phenol has greater London dispersion forces than benzene.",
              "Phenol demonstrates hydrogen bonding.",
              "Benzene has greater London dispersion forces than phenol.",
              "Benzene demonstrates hydrogen bonding."
            ],
            "correct": "Phenol demonstrates hydrogen bonding."
          },
          {
            "question": "Which reagent is used to convert phenol to chlorobenzene?",
            "explain": "To convert phenol to chlorobenzene, phenol undergoes chlorination in the presence of chlorine gas and a catalyst like iron(III) chloride.<br><br>**Reaction:**<br>C₆H₅OH (phenol) + Cl₂ (chlorine) → C₆H₅Cl (chlorobenzene) + HCl",
            "options": [
              "Hydrochloric acid",
              "Sulfuric acid",
              "Iron(III) chloride",
              "Sodium hydroxide"
            ],
            "correct": "Iron(III) chloride"
          },
          {
            "question": "What is the product formed when phenol is treated with zinc dust?",
            "explain": "When phenol is treated with zinc dust, it undergoes reduction to form benzene. This reaction is known as the reduction of phenol.<br><br>**Reaction:**<br>C₆H₅OH (phenol) + Zn (zinc dust) → C₆H₆ (benzene) + ZnO",
            "options": [
              "Benzene",
              "Cyclohexane",
              "Toluene",
              "Benzaldehyde"
            ],
            "correct": "Benzene"
          },
          {
            "question": "What product is formed when phenol reacts with sodium hydroxide?",
            "explain": "When phenol reacts with sodium hydroxide, it forms sodium phenoxide and water. This is a neutralization reaction.<br><br>**Reaction:**<br>C₆H₅OH (phenol) + NaOH (sodium hydroxide) → C₆H₅O⁻Na⁺ (sodium phenoxide) + H₂O",
            "options": [
              "Phenol",
              "Sodium phenoxide",
              "Sodium chloride",
              "Benzene"
            ],
            "correct": "Sodium phenoxide"
          },
          {
            "question": "How does phenol react with bromine water, and what is the product formed?",
            "explain": "Phenol reacts with bromine water to form 2,4,6-tribromophenol. This is a bromination reaction.<br><br>**Reaction:**<br>C₆H₅OH (phenol) + 3Br₂ (bromine water) → C₆H₂Br₃OH (2,4,6-tribromophenol) + 3HBr",
            "options": [
              "2-Bromophenol",
              "4-Bromophenol",
              "2,4-Dibromophenol",
              "2,4,6-Tribromophenol"
            ],
            "correct": "2,4,6-Tribromophenol"
          }



    ];

    const subjective = [
        {
            no: "1",
            question: "Why is phenol named differently compared to other alcohols?",
            answer: "Phenol is named differently because its hydroxyl group is directly attached to an aromatic benzene ring. This aromatic hydroxyl group has a distinct influence on the molecule's properties compared to aliphatic alcohols. For example, phenol's structure is denoted as C<sub>6</sub>H<sub>5</sub>OH, reflecting its position on the benzene ring."
        },
        {
            no: "2",
            question: "Why is phenol prepared from chlorobenzene using sodium hydroxide solution?",
            answer: "Phenol is prepared from chlorobenzene using sodium hydroxide in a reaction known as the hydrolysis of chlorobenzene. The reaction is: <br/> C<sub>6</sub>H<sub>5</sub>Cl + 2NaOH → C<sub>6</sub>H<sub>5</sub>ONa + NaCl + H<sub>2</sub>O <br/> Upon acidification of the phenoxide ion (C<sub>6</sub>H<sub>5</sub>ONa), phenol is obtained."
        },
        {
            no: "3",
            question: "Why does phenol have higher boiling and melting points compared to aliphatic alcohols of similar molecular weight?",
            answer: "Phenol has higher boiling and melting points due to strong intermolecular hydrogen bonding between phenol molecules. For example, phenol (C<sub>6</sub>H<sub>5</sub>OH) forms extensive hydrogen bonds, whereas aliphatic alcohols have less pronounced hydrogen bonding."
        },
        {
            no: "4",
            question: "Why is phenol used in the manufacture of antiseptics and disinfectants?",
            answer: "Phenol is used in the manufacture of antiseptics and disinfectants due to its strong antimicrobial properties. For example, phenol is used in the following reaction to form phenolic disinfectants: <br/> C<sub>6</sub>H<sub>5</sub>OH + CH<sub>3</sub>COOH → C<sub>6</sub>H<sub>5</sub>OCOCH<sub>3</sub> + H<sub>2</sub>O <br/> This reaction shows phenol's use in forming disinfectants like phenolic compounds."
        },
        {
            no: "5",
            question: "Why is phenol prepared from diazonium salt via a diazotization reaction?",
            answer: "Phenol is prepared from diazonium salt via diazotization because the reaction is effective for producing phenol directly from aromatic amines. The reaction is: <br/> C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + NaNO<sub>2</sub> + HCl → C<sub>6</sub>H<sub>5</sub>OH + N<sub>2</sub> + NaCl + H<sub>2</sub>O <br/> This method ensures the formation of phenol from diazonium salts under controlled conditions."
        }
    ];

    return (
        <div>
            <QuestDisplay sub="Chemistry" title="Chemistry - Phenols" subjective={subjective} question={questArray} />

        </div>
    )
}

export default Phenols
