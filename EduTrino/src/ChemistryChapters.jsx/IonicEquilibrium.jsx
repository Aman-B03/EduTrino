import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const IonicEquilibrium = () => {

    const questArray = [
        {
            "question": "Which of the following option is false?",
            "explain": "Understanding the relationship between acids and bases and their conjugates is key to answering this question. Strong acids have weak conjugate bases, and weak bases have strong conjugate acids. Strong bases have weak conjugate acids, which helps in determining the false statements.",
            "options": [
              "Strong acid has a weak conjugate base.",
              "Weak base has strong conjugate acid.",
              "Strong base has strong conjugate acid.",
              "None of the above."
            ],
            "correct": "Strong base has strong conjugate acid."
          },
          {
            "question": "If pH = −log[H<sub>3</sub>O<sup>+</sup>] and pOH = −log[OH<sup>−</sup>], then at 25°C, pH + pOH is:",
            "explain": "To determine pH + pOH, use the following steps:<br><br>Recall the ion product constant for water (K<sub>w</sub>):<br>   K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>] × [OH<sup>−</sup>] = 1 × 10<sup>−14</n><br><br>Take the logarithm of both sides to find pH and pOH:<br>   log K<sub>w</sub> = log ([H<sub>3</sub>O<sup>+</sup>] × [OH<sup>−</sup>])<br>   = log [H<sub>3</sub>O<sup>+</sup>] + log [OH<sup>−</sup>]<br><br>Since pH = −log [H<sub>3</sub>O<sup>+</sup>] and pOH = −log [OH<sup>−</sup>],<br><br>   log K<sub>w</sub> = −pH + −pOH<br><br>Given K<sub>w</sub> = 1 × 10<sup>−14</sup>,<br>   log K<sub>w</sub> = −14<br><br> **Therefore, pH + pOH = 14.**",
            "options": [
              "14",
              "≥ 14",
              "≤ 14",
              "≠ 14"
            ],
            "correct": "14"
          },
          {
            "question": "Sugar solution __________ electricity.",
            "explain": "Sugar solutions do not conduct electricity because sugar does not dissociate into ions in water. Conductivity requires the presence of free ions, which sugar solutions lack.",
            "options": [
              "do not conduct",
              "conducts",
              "depends on the type of sugar",
              "cannot say"
            ],
            "correct": "do not conduct"
          },
          {
            "question": "What is the degree of dissociation for strong electrolytes?",
            "explain": "Strong electrolytes dissociate completely into ions in solution. Therefore, their degree of dissociation is 1, meaning they dissociate fully.",
            "options": [
              "1",
              "0",
              "less than 1",
              "greater than 1"
            ],
            "correct": "1"
          },
          {
            "question": "Calculate the pH of a solution obtained by mixing equal volumes of 0.1N NaOH and 0.05N HCl.",
            "explain": "When equal volumes of 0.1N NaOH and 0.05N HCl are mixed, the resultant solution will have a leftover concentration of NaOH since it is in excess. The resultant concentration of NaOH can be calculated using the formula:<br><br><b>N<sub>final</sub> = (V<sub>1</sub>N<sub>1</sub> - V<sub>2</sub>N<sub>2</sub>) / (V<sub>1</sub> + V<sub>2</sub>)</b><br><br>Substituting the values:<br><br><b>N<sub>final</sub> = (0.1N - 0.05N) / 2 = 0.025N</b><br><br>Since NaOH is in excess, its concentration is 0.025M. As NaOH is a strong base, it dissociates completely, giving [OH<sup>-</sup>] = 0.025M.<br><br>The pOH is calculated as:<br><br><b>pOH = -log[OH<sup>-</sup>] ≈ 1.6</b><br><br>The pH is then calculated as:<br><br><b>pH = 14 - pOH = 14 - 1.6 = 12.4</b>",
            "options": [
              "12.4",
              "7.0",
              "1.6",
              "2.4"
            ],
            "correct": "12.4"
          },
          {
            "question": "10 ml of NaOH solution with a pH of 12.5 requires 0.02 g of a dibasic acid for complete neutralization. Find the molecular mass of the acid.",
            "explain": "Given the pH of the NaOH solution is 12.5, we can find the pOH as:<br><br><b>pOH = 14 - pH = 14 - 12.5 = 1.5</b><br><br>The concentration of OH<sup>-</sup> ions is calculated as:<br><br><b>[OH<sup>-</sup>] = 10<sup>-pOH</sup> = 10<sup>-1.5</sup> ≈ 0.0316 M</b><br><br>Since NaOH is a monobasic strong base, its molarity equals its normality:<br><br><b>Normality (N) of NaOH = 0.0316 N</b><br><br>Using the formula for the molecular mass of the acid:<br><br><b>Molecular Mass = (Weight of Acid × Basicity × 1000) / (Volume of NaOH × Normality of NaOH)</b><br><br>Substituting the given values:<br><br><b>Molecular Mass = (0.02 g × 2 × 1000) / (10 ml × 0.0316 N) ≈ 126.5 g/mol</b>",
            "options": [
              "126.5 g/mol",
              "63.25 g/mol",
              "253 g/mol",
              "31.625 g/mol"
            ],
            "correct": "126.5 g/mol"
          },
          {
            "question": "The solubility product of silver chromate (Ag₂CrO₄) in water is 2 × 10<sup>-12</sup> at 25°C. Calculate its solubility at the given temperature.",
            "explain": "Given the solubility product (K<sub>sp</sub>) of silver chromate, the dissociation reaction is:<br><br><b>Ag₂CrO₄ ⇌ 2Ag<sup>+</sup> + CrO₄<sup>2-</sup></b><br><br>If the solubility of Ag₂CrO₄ is 's' mol/L, then the concentrations of the ions at equilibrium will be:<br><br><b>[Ag<sup>+</sup>] = 2s mol/L</b><br><b>[CrO₄<sup>2-</sup>] = s mol/L</b><br><br>Substituting these into the expression for K<sub>sp</sub>:<br><br><b>K<sub>sp</sub> = [Ag<sup>+</sup>]<sup>2</sup> × [CrO₄<sup>2-</sup>]</b><br><br>Substituting the values, we get:<br><br><b>2 × 10<sup>-12</sup> = (2s)<sup>2</sup> × s</b><br><b>2 × 10<sup>-12</sup> = 4s<sup>3</sup></b><br><br>Solving for 's':<br><br><b>s = (2 × 10<sup>-12</sup> / 4)<sup>1/3</sup> ≈ 7.93 × 10<sup>-5</sup> mol/L</b>",
            "options": [
              "7.93 × 10<sup>-5</sup> mol/L",
              "1.58 × 10<sup>-5</sup> mol/L",
              "3.97 × 10<sup>-6</sup> mol/L",
              "None of the above"
            ],
            "correct": "7.93 × 10<sup>-5</sup> mol/L"
          },

    ];

    const subjective = [
      {
        "no": "1",
        "question": "Why does the Arrhenius concept of acids and bases fail to explain the acidic or basic nature of substances in non-aqueous solutions?",
        "answer": "The Arrhenius concept is limited because it defines acids and bases only in terms of their ability to produce H<sub>3</sub>O<sup>+</sup> and OH<sup>-</sup> ions in water, respectively. It fails to account for substances that exhibit acidic or basic properties in non-aqueous solutions or solvents that do not involve H<sub>2</sub>O, such as ammonia or sulfur dioxide."
    },
    {
        "no": "2",
        "question": "Explain how the Bronsted-Lowry concept extends the definition of acids and bases compared to the Arrhenius concept.",
        "answer": "The Bronsted-Lowry concept extends the definition of acids and bases by focusing on proton transfer. It defines acids as proton donors and bases as proton acceptors, regardless of the presence of water. This concept includes a broader range of substances, including those in non-aqueous solutions."
    },
    {
        "no": "3",
        "question": "How does the common ion effect influence the solubility of salts, and what is its significance in precipitation reactions?",
        "answer": "The common ion effect decreases the solubility of a salt when a common ion is added to the solution. This principle is significant in precipitation reactions because it can be used to control the formation of precipitates by manipulating ion concentrations, thereby facilitating the selective precipitation of one ion over another."
    },
    {
        "no": "4",
        "question": "Explain the working of a buffer solution and its importance in maintaining pH in biological systems.",
        "answer": "A buffer solution works by neutralizing small amounts of added acid or base, maintaining a relatively constant pH. It is important in biological systems because many biochemical processes are pH-sensitive, and buffers help to maintain the optimal pH required for these processes to occur effectively."
    },
    {
        "no": "5",
        "question": "Describe how Lewis acids and bases differ from Bronsted-Lowry acids and bases, and provide an example of a Lewis acid-base reaction.",
        "answer": "Lewis acids are electron pair acceptors, while Lewis bases are electron pair donors, which is a broader definition compared to Bronsted-Lowry acids and bases that involve proton transfer. An example of a Lewis acid-base reaction is the formation of a coordinate bond between BF<sub>3</sub> (Lewis acid) and NH<sub>3</sub> (Lewis base), resulting in the adduct F<sub>3</sub>B-NH<sub>3</sub>."
    }
    ];

  return (
    <div>
       <QuestDisplay sub="Chemistry" title="Chemistry - Ionic Equilibrium" subjective={subjective} question={questArray} />
    </div>
  )
}

export default IonicEquilibrium
