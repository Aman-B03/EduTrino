import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Alcohols = () => {

    const questArray = [
        {
            "question": "What is the common name of Butan-2-ol?",
            "explain": "Butan-2-ol is commonly known as sec-Butyl alcohol. This designation arises because the hydroxyl group (-OH) is attached to the second carbon of the butane chain. In chemical reactions, the structure of Butan-2-ol can be represented as follows:\n\nCH3-CH(OH)-CH2-CH3\n\nWhen Butan-2-ol reacts with hydrochloric acid (HCl), it forms sec-butyl chloride:\n\nCH3-CH(OH)-CH2-CH3 + HCl → CH3-CH(Cl)-CH2-CH3 + H2O",
            "options": [
              "a) n-Butyl alcohol",
              "b) sec-Butyl alcohol",
              "c) Isobutyl alcohol",
              "d) tert-Butyl alcohol"
            ],
            "correct": "b) sec-Butyl alcohol"
          },
          {
            "question": "Glycerol is a _________ alcohol.",
            "explain": "Glycerol, also known as glycerin, is a trihydric alcohol. It has three hydroxyl groups (-OH) attached to its three carbon atoms. The chemical structure of glycerol is represented as:<br><br>CH2OH-CHOH-CH2OH<br><br>nIn reactions, glycerol can participate in esterification, forming esters with acids:<br><br>CH2OH-CHOH-CH2OH + 3 RCOOH → CH2OCO-R + CHOHCOR + CH2OCO-R + 3 H2O",
            "options": [
              "a) monohydric",
              "b) dihydric",
              "c) trihydric",
              "d) tetrahydric"
            ],
            "correct": "c) trihydric"
          },
          {
            "question": "Name a functional isomer of alcohol.",
            "explain": "A functional isomer of alcohol is an ether. Functional isomers have the same molecular formula but different functional groups. For example, ethanol (an alcohol) and dimethyl ether (an ether) both have the molecular formula C2H6O. The reaction below illustrates the formation of an ether from alcohols:<br><br>2 R-OH → R-O-R' + H2O<br><br>where R and R' are alkyl groups. In this reaction, two alcohol molecules react to form an ether and water.",
            "options": [
              "a) phenol",
              "b) ether",
              "c) ester",
              "d) aldehyde"
            ],
            "correct": "b) ether"
          },
          {
            "question": "15% pure ethyl alcohol (wash) on fractional distillation gives 95% ethyl alcohol by weight which is commonly known as which of the following terms?",
            "explain": "The 95% ethyl alcohol obtained by fractional distillation is commonly known as Rectified Spirit. It is a concentrated form of ethanol obtained by removing most of the water from ethanol through distillation. The reaction involved in this process is:<br><br>C2H5OH + H2O → C2H5OH (95%) + H2O (remaining)<br><br>where the ethyl alcohol is purified to a high degree.",
            "options": [
              "a) Wash",
              "b) Absolute alcohol",
              "c) Rectified spirit",
              "d) Methylated spirit"
            ],
            "correct": "c) Rectified spirit"
          },
          {
            "question": "Acid catalysed hydration of alkenes except ethene leads to the formation of which of the following?",
            "explain": "In the acid-catalyzed hydration of alkenes (except ethene), the reaction typically results in the formation of secondary or tertiary alcohols. This is because the reaction follows Markovnikov's rule, where the more substituted carbon of the alkene receives the hydroxyl group, resulting in more stable alcohols. The general reaction can be represented as:<br><br> R-CH=CH2 + H2O → R-CH(OH)-CH3<br><br>For example, hydration of propene (CH3-CH=CH2) yields 2-propanol (CH3-CH(OH)-CH3), a secondary alcohol.<br><br>The reaction mechanism involves:<br>1. Protonation of the double bond to form a carbocation.<br>2. Nucleophilic attack by water on the carbocation to form the alcohol.\n\nIn the case of ethene, the hydration yields ethanol, which is a primary alcohol, but for alkenes with more substituents, the product will be secondary or tertiary alcohols.",
            "options": [
              "a) Mixture of secondary and tertiary alcohols",
              "b) Secondary or tertiary alcohol",
              "c) Primary alcohol",
              "d) None of the above"
            ],
            "correct": "b) Secondary or tertiary alcohol"
          },
          {
            "question": "Which of the following alcohols would have the lowest boiling point?",
            "explain": "The boiling point of alcohols generally increases with the length of the carbon chain and the number of hydroxyl groups due to stronger hydrogen bonding. Among the given options:<br><br>1. **Butanol**: A primary alcohol with a longer carbon chain, leading to a higher boiling point.<br>2. **2-methyl-2-butanol**: A tertiary alcohol with a bulky structure, which can lower the boiling point compared to primary alcohols.<br>3. **Propanol**: A primary alcohol with a shorter carbon chain than butanol, so it has a lower boiling point than butanol but higher than ethanol.<br>4. **Ethanol**: A smaller alcohol with a shorter carbon chain and strong hydrogen bonding, but overall has the lowest boiling point among these options.<br><br>Thus, ethanol has the lowest boiling point.",
            "options": [
              "butanol",
              "2-methyl-2-butanol",
              "propanol",
              "ethanol"
            ],
            "correct": "ethanol"
          },
          {
            "question": "Which of the following alcohols would be most soluble in water?",
            "explain": "The solubility of alcohols in water is primarily determined by the size of the hydrocarbon chain and the ability to form hydrogen bonds with water. Smaller alcohols are more soluble in water due to their ability to form more hydrogen bonds relative to their size.<br><br>1. **Butanol**: A longer carbon chain than propanol, leading to lower solubility in water.<br>2. **Hexanol**: An even longer carbon chain, making it less soluble in water.<br>3. **Pentanol**: Slightly longer than butanol and still less soluble than smaller alcohols.<br>4. **Propanol**: Has the shortest carbon chain among the options and can form more hydrogen bonds with water, making it the most soluble.<br><br>Thus, propanol is the most soluble in water.",
            "options": [
              "butanol",
              "hexanol",
              "pentanol",
              "propanol"
            ],
            "correct": "propanol"
          },
          {
            "question": "How are alcohols prepared from haloalkanes?",
            "explain": "Alcohols can be prepared from haloalkanes via nucleophilic substitution reactions. Specifically, haloalkanes are treated with aqueous NaOH, which acts as a nucleophile and displaces the halogen atom to form alcohol. For example:<br><br>R-X + NaOH → R-OH + NaX<br>where R-X is a haloalkane and R-OH is the corresponding alcohol. In this reaction, the hydroxide ion (OH<sup>-</sup>) replaces the halogen atom.",
            "options": [
              "By treating with concentrated H<sub>2</sub>SO<sub>4</sub>",
              "By heating with aqueous NaOH",
              "By treating with a strong reducing agent",
              "By treating with Mg metal"
            ],
            "correct": "By heating with aqueous NaOH"
          },
          {
            "question": "Propene when reacted with water in the presence of H<sub>2</sub>SO<sub>4</sub> gives _________",
            "explain": "When propene (CH<sub>3</sub>CH=CH<sub>2</sub>) reacts with water in the presence of sulfuric acid (H<sub>2</sub>SO<sub>4</sub>), the reaction follows Markovnikov's rule. The sulfuric acid protonates the double bond, leading to the formation of a carbocation. Water then attacks the more stable carbocation to give propan-2-ol.<br><br>The reaction is:<br>CH<sub>3</sub>CH=CH<sub>2</sub> + H<sub>2</sub>O → CH<sub>3</sub>CH(OH)CH<sub>3</sub>",
            "options": [
              "Propan-1-ol",
              "Propan-2-ol",
              "2-Methylpropan-1-ol",
              "2-Methylpropan-2-ol"
            ],
            "correct": "Propan-2-ol"
          },
          {
            "question": "Which carbonyl compound yields secondary alcohols when treated with LiAlH<sub>4</sub>?",
            "explain": "When LiAlH<sub>4</sub> (lithium aluminium hydride) is used as a reducing agent, it reduces carbonyl compounds to alcohols. Among the given options:<br><br>- **Aldehydes** are reduced to primary alcohols.<br>- **Esters** are reduced to primary alcohols and a corresponding alcohol.<br>- **Carboxylic acids** are reduced to primary alcohols.<br>- **Ketones** are reduced to secondary alcohols.<br><br>Thus, ketones are the carbonyl compounds that yield secondary alcohols when treated with LiAlH<sub>4</sub>.<br><br>The reaction is:<br>R<sub>2</sub>C=O + 2[H] → R<sub>2</sub>CHOH",
            "options": [
              "Aldehyde",
              "Ester",
              "Carboxylic acid",
              "Ketone"
            ],
            "correct": "Ketone"
          },


    ];
    const subjective = [
        {
            no: "1",
            question: "Why are primary alcohols more easily oxidized compared to secondary and tertiary alcohols?",
            answer: "Primary alcohols are more easily oxidized because they have one alkyl group attached to the hydroxyl group. This allows the oxidation to proceed to form aldehydes and further to carboxylic acids. In contrast, secondary alcohols form ketones, and tertiary alcohols do not easily oxidize due to the lack of hydrogen atoms on the carbon bearing the hydroxyl group."
        },
        {
            no: "2",
            question: "Why are monohydric alcohols classified into primary, secondary, and tertiary based on the carbon bearing the hydroxyl group?",
            answer: "Monohydric alcohols are classified based on the number of carbon atoms directly attached to the carbon bearing the hydroxyl group. Primary alcohols have one alkyl group, secondary alcohols have two, and tertiary alcohols have three. This classification affects their reactivity and the types of reactions they undergo."
        },
        {
            no: "3",
            question: "Why is ethanol used as a solvent in industrial processes and not methanol?",
            answer: "Ethanol is used as a solvent in industrial processes because it is less toxic and more effective for dissolving various substances compared to methanol. Methanol is toxic and can be harmful if ingested or inhaled, making ethanol a safer choice for many applications."
        },
        {
            no: "4",
            question: "Why does alcohol undergo different reactions when prepared from esters compared to haloalkanes?",
            answer: "Alcohols prepared from esters typically involve a reduction process, which results in the formation of alcohols with a longer carbon chain. In contrast, alcohols prepared from haloalkanes involve a substitution reaction where the halogen atom is replaced by a hydroxyl group, resulting in different products based on the starting material."
        },
        {
            no: "5",
            question: "Why does the formation of a primary alcohol from a primary amine require the presence of nitrous acid?",
            answer: "The formation of a primary alcohol from a primary amine requires nitrous acid because it reacts with the amine to form an intermediate diazonium salt, which then decomposes to yield the alcohol. Nitrous acid provides the necessary nitrosyl group for this reaction to occur."
        }
    ];

    return (
        <div>
            <QuestDisplay sub="Chemistry" title="Chemistry - Alcohols" subjective={subjective} question={questArray} />

        </div>
    )
}

export default Alcohols
