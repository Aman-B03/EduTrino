import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const AldehydesAndKetones = () => {

  const questArray = [
    {
      "question": "Which of the following compounds is the most acidic?",
      "explain": "Butanal is slightly more acidic than the other compounds listed because the carbonyl group in aldehydes has a stronger electron-withdrawing effect when it is terminal, making the alpha hydrogen more acidic.",
      "options": [
        "butane",
        "2-butanone",
        "1-butanone",
        "butanal"
      ],
      "correct": "butanal"
    },
    {
      "question": "Which of the following has the highest boiling point?",
      "explain": "Butanol has the highest boiling point among the options because alcohols can form strong hydrogen bonds, and butanol has a longer carbon chain than propanol, leading to stronger London dispersion forces. Aldehydes like propanal and butanal have lower boiling points due to the lack of hydrogen bonding.",
      "options": [
        "Butanol",
        "Propanal",
        "Propanol",
        "Butanal"
      ],
      "correct": "Butanol"
    },
    {
      "question": "Which of the following methods cannot produce aldehydes?",
      "explain": "Dehydrogenation of secondary alcohols (b) cannot produce aldehydes. Secondary alcohols are oxidized to ketones rather than aldehydes. For example:<br><br>R<sub>2</sub>CHOH → R<sub>2</sub>CO + H<sub>2</sub>",
      "options": [
        "Oxidation of primary alcohols",
        "Dehydrogenation of secondary alcohols",
        "Ozonolysis of alkenes",
        "Hydration of ethyne with acid"
      ],
      "correct": "Dehydrogenation of secondary alcohols"
    },
    {
      "question": "What is the catalyst used in the hydrogenation of acetyl chloride to produce ethanal?",
      "explain": "The hydrogenation of acetyl chloride to produce ethanal is catalyzed by palladium (Pd) on barium sulfate (BaSO<sub>4</sub>). The reaction is:<br><br>CH<sub>3</sub>COCl + H<sub>2</sub> → CH<sub>3</sub>CHO + HCl<br><br>Here, Pd over BaSO<sub>4</sub> is used as the catalyst.",
      "options": [
        "Pt over BaSO4",
        "Pt over CuSO4",
        "Pd over BaSO4",
        "Pd over CuSO4"
      ],
      "correct": "Pd over BaSO4"
    },
    {
      "question": "How are aldehydes prepared from acid chlorides?",
      "explain": "Acid chlorides can be reduced to aldehydes using lithium aluminium hydride (LiAlH<sub>4</sub>) under controlled conditions. The reaction is:<br><br>RCOCl + LiAlH<sub>4</sub> → RCHO + LiAlCl<sub>4</sub><br><br>For example, if the acid chloride is acetyl chloride (CH<sub>3</sub>COCl):<br>CH<sub>3</sub>COCl + LiAlH<sub>4</sub> → CH<sub>3</sub>CHO + LiAlCl<sub>4</sub>",
      "options": [
        "By reacting with water",
        "By reacting with lithium aluminium hydride (LiAlH<sub>4</sub>)",
        "By reacting with sodium borohydride (NaBH<sub>4</sub>)",
        "By reacting with sodium in dry ether"
      ],
      "correct": "By reacting with lithium aluminium hydride (LiAlH<sub>4</sub>)"
    },
    {
      "question": "How does Fehling's solution help in distinguishing between aliphatic aldehydes and ketones?",
      "explain": "Fehling's solution can distinguish between aliphatic aldehydes and ketones based on their ability to react with the solution. Aldehydes reduce Fehling's solution, resulting in a red precipitate of copper(I) oxide. The reaction is:<br><br>RCHO + 2[Cu<sup>2+</sup>] + 2OH<sup>−</sup> → RCOOH + Cu<sub>2</sub>O (red precipitate) + H<sub>2</sub>O<br><br>Ketones do not react with Fehling's solution and thus do not form the red precipitate.",
      "options": [
        "Fehling's solution oxidizes ketones to form a red precipitate.",
        "Fehling's solution reduces aldehydes to form a blue solution.",
        "Fehling's solution oxidizes aldehydes to form a red precipitate, while ketones do not react.",
        "Fehling's solution reacts with both aldehydes and ketones to form a green precipitate."
      ],
      "correct": "Fehling's solution oxidizes aldehydes to form a red precipitate, while ketones do not react."
    },
    {
      "question": "How are ketones prepared using the ozonolysis of alkenes?",
      "explain": "Alkenes undergo ozonolysis to form ketones (and/or aldehydes) when reacted with ozone (O<sub>3</sub>) followed by reduction with zinc (Zn). The reaction is:<br><br>RCH=CH<sub>2</sub> + O<sub>3</sub> → RCHO + RCOOH (reduced to ketones)<br><br>For example, if the alkene is propene (CH<sub>3</sub>CH=CH<sub>2</sub>):<br>CH<sub>3</sub>CH=CH<sub>2</sub> + O<sub>3</sub> → CH<sub>3</sub>CHO + CH<sub>3</sub>COOH",
      "options": [
        "By reacting with Fehling's solution",
        "By reacting with ozone and then reducing with Zn",
        "By reacting with Tollen's reagent",
        "By reacting with H<sub>2</sub> and Pd"
      ],
      "correct": "By reacting with ozone and then reducing with Zn"
    },

  ];

  const subjective = [

    {
      no: "1",
      question: "Why is there a significant difference in the boiling points of butanal and butanol?",
      answer: "Butanol has a higher boiling point than butanal because butanol has a polar O-H bond, leading to intermolecular hydrogen bonding. This is absent in butanal, resulting in a higher boiling point for butanol."
    },
    {
      no: "2",
      question: "Write a test to differentiate between pentan-2-one and pentan-3-one.",
      answer: "The iodoform test can distinguish pentan-2-one from pentan-3-one. <br/><br/> Iodoform test: <br/> Pentan-2-one, a methyl ketone, responds to the iodoform test. <br/> CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COCH<sub>3</sub> + 3NaOI → CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>COONa + CHI<sub>3</sub> (Yellow ppt of Iodoform) + 2NaOH <br/><br/> Pentan-3-one, not being a methyl ketone, does not respond to the iodoform test. <br/> CH<sub>3</sub>CH<sub>2</sub>COCH<sub>2</sub>CH<sub>3</sub> + NaOI → No yellow ppt of iodoform"
    },
    {
      no: "3",
      question: "Why are carboxylic acids more acidic than alcohols or phenols, although they all have hydrogen atoms attached to an oxygen atom (—O—H)?",
      answer: "Carboxylic acids are more acidic than alcohols or phenols because the conjugate base of carboxylic acids (carboxylate ion) is stabilized by resonance. <br/><br/> In carboxylic acids: <br/> R-COOH → R-COO<sup>-</sup> + H<sup>+</sup> <br/><br/> The negative charge on the carboxylate ion is delocalized between the two oxygen atoms, which stabilizes the ion. <br/><br/> In alcohols and phenols: <br/> R-OH → R-O<sup>-</sup> + H<sup>+</sup> <br/><br/> The negative charge is localized on the single oxygen atom, making it less stable compared to the carboxylate ion. <br/><br/> Therefore, carboxylic acids can more easily release protons than alcohols or phenols."
    },

  ];

  return (
    <div>
      <QuestDisplay sub="Chemistry" title="Chemistry - Aliphatic Aldehydes and Ketones" subjective={subjective} question={questArray} />

    </div>
  )
}

export default AldehydesAndKetones
