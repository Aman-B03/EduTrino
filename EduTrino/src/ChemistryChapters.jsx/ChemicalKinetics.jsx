import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const ChemicalKinetics = () => {

    const questArray = [
        {
            "question": "For a second-order reaction, what is the unit of the rate of the reaction?",
            "explain": "For a second-order reaction, the rate of reaction is given by the rate law:<br><br><b>Rate = k[A]<sup>2</sup></b><br><br>Here, 'k' is the rate constant, and '[A]' is the concentration of the reactant. The units of rate are generally expressed as <b>mol L<sup>-1</sup> s<sup>-1</sup></b>. Since the reaction is second-order, the concentration term is squared. Therefore, the units of 'k' must adjust to give the correct overall unit of the rate:<br><br><b>[k] = (mol L<sup>-1</sup> s<sup>-1</sup>) / (mol L<sup>-1</sup>)<sup>2</sup> = mol<sup>-1</sup> L s<sup>-1</sup></b>",
            "options": [
              "s<sup>-1</sup>",
              "mol L<sup>-1</sup> s<sup>-1</sup>",
              "mol<sup>-1</sup> L s<sup>-1</sup>",
              "mol<sup>-2</sup> L<sup>2</sup> s<sup>-1</sup>"
            ],
            "correct": "mol<sup>-1</sup> L s<sup>-1</sup>"
          },
          {
            "question": "For a second-order reaction, what is the unit of the rate of the reaction?",
            "explain": "The unit of the rate constant for a reaction depends on the order of the reaction. For a reaction of order 'n', the unit of the rate constant 'k' can be expressed as:<br><br><b>[k] = mol<sup>1-n</sup> L<sup>n-1</sup> s<sup>-1</sup></b><br><br>For a second-order reaction (n = 2), substitute the value into the formula:<br><br><b>[k] = mol<sup>1-2</sup> L<sup>2-1</sup> s<sup>-1</sup> = mol<sup>-1</sup> L s<sup>-1</sup></b><br><br>Thus, the unit of the rate for a second-order reaction is <b>mol<sup>-1</sup> L s<sup>-1</sup></b>.",
            "options": [
              "s<sup>-1</sup>",
              "mol L<sup>-1</sup> s<sup>-1</sup>",
              "mol<sup>-1</sup> L s<sup>-1</sup>",
              "mol<sup>-2</sup> L<sup>2</sup> s<sup>-1</sup>"
            ],
            "correct": "mol<sup>-1</sup> L s<sup>-1</sup>"
          },
          {
            "question": "The reaction NO2 + CO → NO + CO2 takes place in two steps. Find the rate law.",
            "explain": "The given reaction takes place in two steps:<br><br>Step 1: 2NO<sub>2</sub> → NO + NO<sub>3</sub> (slow)<br>Step 2: NO<sub>3</sub> + CO → CO<sub>2</sub> + NO<sub>2</sub> (fast)<br><br>Since the first step is the slow step, it determines the rate of the reaction. The rate law depends on the concentration of the reactants involved in the slow step. Thus, the rate law is:<br><br><b>R = k<sub>1</sub> [NO<sub>2</sub>]<sup>2</sup></b>",
            "options": [
              "R = k<sub>1</sub> [NO<sub>2</sub>]<sup>3</sup>",
              "R = k<sub>2</sub> [NO<sub>3</sub>] [CO]",
              "R = k<sub>1</sub> [NO<sub>2</sub>]",
              "R = k<sub>1</sub> [NO<sub>2</sub>]<sup>2</sup>"
            ],
            "correct": "R = k<sub>1</sub> [NO<sub>2</sub>]<sup>2</sup>"
          },
          {
            "question": "How many times will the rate of the elementary reaction 3X + Y → X<sub>2</sub>Y change if the concentration of the substance X is doubled and that of Y is halved?",
            "explain": "The rate law for an elementary reaction is given by the expression:<br><br><b>r = k [X]<sup>m</sup> [Y]<sup>n</sup></b><br><br>For the given reaction, 3X + Y → X<sub>2</sub>Y, the rate law can be written as:<br><br><b>r<sub>1</sub> = k [X]<sup>3</sup> [Y]</b><br><br>When the concentration of X is doubled ([X] becomes 2[X]) and the concentration of Y is halved ([Y] becomes 0.5[Y]), the new rate r<sub>2</sub> becomes:<br><br><b>r<sub>2</sub> = k (2[X])<sup>3</sup> (0.5[Y])</b><br><br>Expanding and simplifying, we get:<br><br><b>r<sub>2</sub> = k (8[X]<sup>3</sup>) (0.5[Y]) = 4k [X]<sup>3</sup> [Y] = 4r<sub>1</sub></b><br><br>So, the rate increases by a factor of 4.",
            "options": [
              "r<sub>2</sub> = 4.5r<sub>1</sub>",
              "r<sub>2</sub> = 5r<sub>1</sub>",
              "r<sub>2</sub> = 2r<sub>1</sub>",
              "r<sub>2</sub> = 4r<sub>1</sub>"
            ],
            "correct": "r<sub>2</sub> = 4r<sub>1</sub>"
          },
          {
            "question": "A first-order reaction has a rate constant of 1.15 × 10<sup>-3</sup> s<sup>-1</sup>. How long will 5 g of this reactant take to reduce to 3 g?",
            "explain": "To solve this problem, we use the formula for a first-order reaction:<br><br><b>t = (2.303/k) log([R<sub>0</sub>]/[R])</b><br><br>Where:<br><ul><li><b>t</b> is the time required</li><li><b>k</b> is the rate constant</li><li><b>[R<sub>0</sub>]</b> is the initial concentration (5 g in this case)</li><li><b>[R]</b> is the final concentration (3 g in this case)</li></ul>Substituting the given values:<br><br><b>t = (2.303 / 1.15 × 10<sup>-3</sup> s<sup>-1</sup>) log(5/3)</b><br><br>Calculating this gives:<br><br><b>t ≈ 444 s</b>",
            "options": [
              "300 s",
              "444 s",
              "500 s",
              "600 s"
            ],
            "correct": "444 s"
          },
          {
            "question": "A zero-order reaction in A has a rate constant of 0.003 mol L<sup>-1</sup> sec<sup>-1</sup>. How long will it take for A’s initial concentration to fall from 0.10 M to 0.075 M?",
            "explain": "For a zero-order reaction, the concentration [A] at time t is given by:<br><br><b>[A] = [A<sub>0</sub>] - kt</b><br><br>Where:<br><ul><li><b>[A]</b> is the concentration at time t (0.075 M)</li><li><b>[A<sub>0</sub>]</b> is the initial concentration (0.10 M)</li><li><b>k</b> is the rate constant (0.003 mol L<sup>-1</sup> sec<sup>-1</sup>)</li></ul>Substituting the given values:<br><br><b>0.075 = 0.10 - 0.003t</b><br><br>Rearranging the equation to solve for t:<br><br><b>t = (0.10 - 0.075) / 0.003</b><br><br><b>t = 0.025 / 0.003 ≈ 8.33 s</b><br><br>Thus, the time required is approximately 8.33 seconds.",
            "options": [
              "5 s",
              "8.33 s",
              "10 s",
              "12 s"
            ],
            "correct": "8.33 s"
          },
          {
            "question": "A radioactive decay is always considered as:",
            "explain": "Radioactive decay is a process that follows first-order kinetics. This means that the rate of decay is directly proportional to the number of undecayed nuclei present at any time. The decay rate does not depend on the concentration of any other substance, which is why it is classified as a first-order reaction.",
            "options": [
              "Zero order reaction",
              "First order Reaction",
              "Both the above",
              "Second order reaction"
            ],
            "correct": "First order Reaction"
          },
          {
            "question": "The slope of the plot of log[A]<sub>t</sub> versus t for a first-order reaction is",
            "explain": "For a first-order reaction, the integrated rate law is given by:<br><br><b>log[A]<sub>t</sub> = log[A]<sub>0</sub> - (k/2.303) * t</b><br><br>Here, [A]<sub>t</sub> is the concentration at time t, [A]<sub>0</sub> is the initial concentration, and k is the rate constant. The equation is in the form of y = mx + c, where the slope (m) is <b>-k/2.303</b>.",
            "options": [
              "−k",
              "k/2.303",
              "−2.303/k",
              "−k/2.303"
            ],
            "correct": "−k/2.303"
          },

    ];

    const subjective = [
      {
        "no": "1",
        "question": "Why is the rate of a reaction higher at the beginning and tends to decrease over time?",
        "answer": "The rate of a reaction is typically higher at the beginning because the concentration of reactants is at its maximum, leading to more frequent collisions between molecules. As the reaction progresses, the concentration of reactants decreases, leading to fewer collisions and a slower reaction rate."
    },
    {
        "no": "2",
        "question": "Explain the significance of the rate constant in a chemical reaction. How does it differ between reactions of different orders?",
        "answer": "The rate constant (k) provides a quantitative measure of the speed of a reaction for a given set of conditions. Its value is unique for each reaction and depends on factors such as temperature. For different orders of reactions, the rate constant has different units: for a first-order reaction, it is s<sup>-1</sup>, while for a second-order reaction, it is L mol<sup>-1</sup> s<sup>-1</sup>."
    },
    {
        "no": "3",
        "question": "How does the activation energy affect the rate of a chemical reaction?",
        "answer": "Activation energy is the minimum energy required for reactants to form the transition state and proceed to products. A higher activation energy means that fewer molecules have enough energy to react, leading to a slower reaction rate. Conversely, a lower activation energy increases the rate of the reaction."
    },
    {
        "no": "4",
        "question": "Describe how temperature influences the rate of a chemical reaction according to the Arrhenius equation.",
        "answer": "According to the Arrhenius equation, the rate of a chemical reaction increases with temperature because higher temperatures provide more energy to the reactant molecules, increasing the number of collisions with sufficient energy to overcome the activation energy barrier."
    },
    {
        "no": "5",
        "question": "Why does a catalyst increase the rate of a reaction, and how is this represented in an energy profile diagram?",
        "answer": "A catalyst increases the rate of a reaction by providing an alternative pathway with a lower activation energy, allowing more reactant molecules to participate in the reaction. In an energy profile diagram, this is represented by a lower peak (activation energy) compared to the uncatalyzed reaction, resulting in a faster reaction rate."
    }
    ]

  return (
    <div>
       <QuestDisplay sub="Chemistry" title="Chemistry - Chemical Kinetics" subjective={subjective} question={questArray} />
    </div>
  )
}

export default ChemicalKinetics
