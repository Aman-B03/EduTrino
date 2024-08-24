import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Haloalkanes = () => {

    const questArray = [
        {
            "question": "Identify the correct common name for CH3CH2CH2CH2Cl.",
            "explain": "The structure CH3CH2CH2CH2Cl represents a straight-chain alkyl chloride with four carbon atoms, which is commonly known as n-Butyl chloride.",
            "options": [
              "a) Isobutyl chloride",
              "b) n-Butyl chloride",
              "c) sec-Butyl chloride",
              "d) tert-Butyl chloride"
            ],
            "correct": "b) n-Butyl chloride"
          },
          {
            "question": "The reaction of a primary alcohol with which of the following gives purely a haloalkane?",
            "explain": "Thionyl chloride (SOCl2) is the reagent that gives a haloalkane when reacted with a primary alcohol, and it also produces by-products that are gases (SO2 and HCl), which makes the reaction clean with no need for further purification.",
            "options": [
              "a) Phosphorus trichloride",
              "b) Phosphorus pentachloride",
              "c) Thionyl chloride",
              "d) Sulphuryl chloride"
            ],
            "correct": "c) Thionyl chloride"
          },
          {
            "question": "When two halogen atoms are attached to the same carbon atom, then it is:",
            "explain": "When two halogen atoms are attached to the same carbon atom, the compound is called a geminal dihalide or gem-dihalide. The term 'geminal' indicates that the two halogens are on the same carbon atom.",
            "options": [
              "a) vic-dihalide",
              "b) gem-dihalide",
              "c) α, ω -halide",
              "d) α, β -halide"
            ],
            "correct": "b) gem-dihalide"
          },
          {
            "question": "Benzene hexachloride is:",
            "explain": "Benzene hexachloride (BHC) is a chemical compound that consists of benzene with six chlorine atoms attached to a cyclohexane ring. The correct systematic name for this compound is 1,2,3,4,5,6-hexachlorocyclohexane.",
            "options": [
              "a) 1, 2, 3, 4, 5, 6 – hexachlorocyclohexane",
              "b) 1, 1, 1, 6, 6, 6 – hexachlorocyclohexane",
              "c) 1, 6 – phenyl – 1, 6 – chlorohexane",
              "d) 1, 1 – phenyl – 6, 6 -chlorohexane"
            ],
            "correct": "a) 1, 2, 3, 4, 5, 6 – hexachlorocyclohexane"
          },
          {
            "question": "What is the correct order of reactivity of alcohols with a given haloacid?",
            "explain": "The reactivity of alcohols with haloacids increases with the stability of the carbocation formed during the reaction. Tertiary (3°) alcohols form the most stable carbocations, making them the most reactive, followed by secondary (2°) and primary (1°) alcohols.",
            "options": [
              "a) 1° > 2° > 3°",
              "b) 3° > 2° > 1°",
              "c) 1° > 3° > 2°",
              "d) 2° > 1° > 3°"
            ],
            "correct": "b) 3° > 2° > 1°"
          },
          {
            "question": "What is the correct order of reactivity of the following haloacids with a given alcohol?",
            "explain": "The reactivity of haloacids with alcohols depends on the strength of the acid and the ease with which the halide ion can be released. Iodine (I-) is the best leaving group among halides, making HI the most reactive, followed by HBr and HCl.",
            "options": [
              "a) HCl > HBr > HI",
              "b) HI > HBr > HCl",
              "c) HBr > HCl > HI",
              "d) HI > HCl > HBr"
            ],
            "correct": "b) HI > HBr > HCl"
          },
          {
            "question": "What is the catalyst in the reaction of a primary alcohol with HCl to obtain a chloroalkane?",
            "explain": "The catalyst used in the reaction of a primary alcohol with HCl to form a chloroalkane is anhydrous ZnCl2. This is known as the Lucas reagent, which helps in the formation of a carbocation intermediate.",
            "options": [
              "a) anhydrous ZnCl2",
              "b) concentrated H2SO4",
              "c) red phosphorous",
              "d) pyridine"
            ],
            "correct": "a) anhydrous ZnCl2"
          },
          {
            "question": "Which chemical family does chloroform belong to?",
            "explain": "Chloroform (CHCl3) is a compound in which three hydrogen atoms of methane (CH4) are replaced by chlorine atoms, classifying it as a halogenated hydrocarbon.",
            "options": [
              "a) Alkanes",
              "b) Alkenes",
              "c) Alkynes",
              "d) Halogenated hydrocarbons"
            ],
            "correct": "d) Halogenated hydrocarbons"
          },
          {
            "question": "What is the odor of chloroform?",
            "explain": "Chloroform has a distinct sweet smell, which is often described as pleasant.",
            "options": [
              "a) Sweet",
              "b) Floral",
              "c) Fruity",
              "d) Pungent"
            ],
            "correct": "a) Sweet"
          },
          {
            "question": "What is the effect of contact with light and air on chloroform?",
            "explain": "Chloroform can undergo oxidation when exposed to light and air, forming phosgene (COCl<sub>2</sub>), which is highly toxic. The reaction is as follows:<br><br>CHCl<sub>3</sub> + O<sub>2</sub> → COCl<sub>2</sub> + HCl<br><br>Phosgene can cause severe health issues if inhaled or ingested.",
            "options": [
              "a) It becomes less toxic",
              "b) It forms phosgene, which is highly toxic",
              "c) It evaporates more quickly",
              "d) It becomes colorless"
            ],
            "correct": "b) It forms phosgene, which is highly toxic"
          },
          {
            "question": "How can the toxicity of chloroform due to oxidation be resolved?",
            "explain": "The toxicity of chloroform due to oxidation can be mitigated by adding 1% ethanol. Ethanol reacts with the phosgene formed, as shown in the following reaction:<br><br>COCl<sub>2</sub> + C<sub>2</sub>H<sub>5</sub>OH → C<sub>2</sub>H<sub>5</sub>OCOCl + HCl<br><br>This reaction helps neutralize the phosgene, making the chloroform safer to handle.",
            "options": [
              "a) By adding 1% ethanol",
              "b) By heating it",
              "c) By diluting with water",
              "d) By exposing it to sunlight"
            ],
            "correct": "a) By adding 1% ethanol"
          },

    ];

    const subjective = [
        {
            no: "1",
            question: "Why are monohaloalkanes classified into primary, secondary, and tertiary types?",
            answer: "Monohaloalkanes are classified based on the type of carbon atom bonded to the halogen: primary (one carbon), secondary (two carbons), and tertiary (three carbons). This classification affects their reactivity and physical properties."
        },
        {
            no: "2",
            question: "How can you prepare monohaloalkanes from alkenes?",
            answer: "Monohaloalkanes can be prepared from alkenes via electrophilic addition of halogens. For example, ethene reacts with bromine to form 1,2-dibromoethane, which can then be converted into monohaloalkanes through selective reactions."
        },
        {
            no: "3",
            question: "Why does trichloromethane (chloroform) react differently with silver powder compared to alcohols?",
            answer: "Trichloromethane reacts with silver powder to form methylene chloride and silver chloride: <br> CHCl<sub>3</sub> + 3 Ag → CH<sub>2</sub>Cl<sub>2</sub> + 3 AgCl. <br> Alcohols do not react similarly due to the absence of chlorine atoms, which makes chloroform more reactive towards nucleophiles."
        },
        {
            no: "4",
            question: "Describe how you can prepare trichloromethane from ethanol.",
            answer: "To prepare trichloromethane from ethanol: <br> 1. Oxidize ethanol to acetaldehyde: <br> C<sub>2</sub>H<sub>5</sub>OH + [O] → CH<sub>3</sub>CHO <br> 2. Chlorinate acetaldehyde to form chloral: <br> CH<sub>3</sub>CHO + 3 Cl<sub>2</sub> → CCl<sub>3</sub>CHO + 3 HCl <br> 3. Treat chloral with sodium hydroxide to produce trichloromethane: <br> CCl<sub>3</sub>CHO + 2 NaOH → CHCl<sub>3</sub> + Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O."
        },
        {
            no: "5",
            question: "Why are trichloromethane and chlorinated hydrocarbons used in cleaning and disinfecting agents?",
            answer: "Trichloromethane and chlorinated hydrocarbons are effective in cleaning and disinfecting due to their strong solvent properties and ability to dissolve organic substances. Their chemical stability and reactivity with pathogens also make them useful."
        }
    ];

  return (
    <div>
      <QuestDisplay sub = "Chemistry" title = "Chemistry - Haloalkanes" subjective = {subjective} question = {questArray}  />
    </div>
  )
}

export default Haloalkanes
