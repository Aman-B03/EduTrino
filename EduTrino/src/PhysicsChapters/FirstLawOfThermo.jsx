import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const FirstLawOfThermo = () => {

        const questionArray =  [
            {
                question: "Which among the following laws is the basis of the first law of thermodynamics?",
                options: [
                    "Law of conservation of mass",
                    "Law of conservation of energy",
                    "Law of conservation of work",
                    "Law of conservation of momentum"
                ],
                correct: "Law of conservation of energy",
                explain: "The first law of thermodynamics is essentially a restatement of the law of conservation of energy, which states that energy cannot be created or destroyed, only transformed from one form to another. The first law of thermodynamics expresses this principle in the context of thermodynamic systems, where the change in internal energy of a system is equal to the heat added to the system minus the work done by the system."
            },
            {
                question: "Find the change in internal energy of a system if 415 cal of heat is given to the system, and the system does 35 cal of work.",
                options: [
                    "290 cal",
                    "380 cal",
                    "0 cal",
                    "200 J"
                ],
                correct: "380 cal",
                explain: "According to the first law of thermodynamics:<br><br><code>ΔU = ΔQ – ΔW</code><br><br>Where:<br>- ΔU is the change in internal energy<br>- ΔQ is the heat added to the system<br>- ΔW is the work done by the system<br><br>Substitute the given values:<br><br><code>ΔU = 415 cal – 35 cal<br>ΔU = 380 cal</code><br><br>Thus, the change in internal energy of the system is 380 cal."
            },
            {
                question: "During the process of photosynthesis, which reaction takes place?",
                options: [
                    "Chemical reaction",
                    "Endothermic reaction",
                    "Exothermic reaction",
                    "Redox reaction"
                ],
                correct: "Endothermic reaction",
                explain: "Photosynthesis is an endothermic reaction because it requires the absorption of energy (from sunlight) to convert carbon dioxide and water into glucose and oxygen. The overall reaction can be summarized as:<br><br><code>6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></code><br><br>In this process, light energy is absorbed and stored in the form of chemical energy in glucose molecules."
            },
            {
                question: "A sample of ideal gas in a cylinder loses 250 J of heat while the gas molecules gain 264 J of internal energy in the process. What is the work done by the gas molecules?",
                options: [
                    "-514 J",
                    "14 J",
                    "250 J",
                    "264 J"
                ],
                correct: "-514 J",
                explain: "According to the first law of thermodynamics:<br><br><code>ΔU = Q - W</code><br><br>Where:<br>- ΔU is the change in internal energy<br>- Q is the heat added to the system (negative if heat is lost)<br>- W is the work done by the gas<br><br>Given:<br>- Heat lost, Q = -250 J<br>- Change in internal energy, ΔU = 264 J<br><br>Rearranging the first law equation to solve for work done, W:<br><br><code>ΔU = Q - W<br>264 = -250 - W<br>W = -250 - 264<br>W = -514 J</code><br><br>The negative sign indicates that the work is done on the gas (compression) rather than by the gas."
            },           
            {
                question: "In a thermodynamic process, a gas releases 55 J of heat as 12 J of work is done on it. The initial internal energy of the gas is 130 J. Find the final internal energy of the gas.",
                options: [
                    "87 J",
                    "143 J",
                    "175 J",
                    "55 J"
                ],
                correct: "87 J",
                explain: "According to the first law of thermodynamics:<br><br><code>Q = ΔU + W</code><br><br>Where:<br>- Q is the heat added to the system (negative if heat is released)<br>- ΔU is the change in internal energy<br>- W is the work done by the gas (negative if work is done on the gas)<br><br>Given:<br>- Heat released, Q = -55 J<br>- Work done on the gas, W = -12 J<br>- Initial internal energy, U<sub>i</sub> = 130 J<br><br>Using the first law:<br><br><code>-55 = (U<sub>f</sub> - 130) - 12<br>-55 + 12 = U<sub>f</sub> - 130<br>-43 = U<sub>f</sub> - 130<br>U<sub>f</sub> = 87 J</code><br><br>The final internal energy of the gas is 87 J."
            },
            {
                question: "An ideal gas absorbs 3 × 10<sup>4</sup> J of heat and does 9 × 10<sup>4</sup> J of work to go from an initial to a final state. The transition from this initial to final state can also be achieved through a second process where the gas releases 10<sup>4</sup> J of heat. What work needs to be done by the gas in the second process?",
                options: [
                    "5 × 10<sup>4</sup> J",
                    "6 × 10<sup>4</sup> J",
                    "7 × 10<sup>4</sup> J",
                    "8 × 10<sup>4</sup> J"
                ],
                correct: "5 × 10<sup>4</sup> J",
                explain: "To find the work done in the second process, use the first law of thermodynamics:<br><br><code>Q = ΔU + W</code><br><br>For the first process:<br><br><code>Q = 3 × 10<sup>4</sup> J<br>W = 9 × 10<sup>4</sup> J<br>ΔU = Q - W<br>ΔU = 3 × 10<sup>4</sup> J - 9 × 10<sup>4</sup> J<br>ΔU = -6 × 10<sup>4</sup> J</code><br><br>In the second process, the gas releases 10 × 10<sup>4</sup> J of heat, so Q is negative:<br><br><code>Q = -10 × 10<sup>4</sup> J<br>ΔU = -6 × 10<sup>4</sup> J<br>-10 × 10<sup>4</sup> J = -6 × 10<sup>4</sup> J + W<br>W = 5 × 10<sup>4</sup> J</code><br><br>The work done by the gas in the second process is 5 × 10<sup>4</sup> J."
            }
            
            
        ];

        const subjective = [
                {
                  no: "1",
                  question: "Why does the temperature of an ideal gas remain constant when it undergoes an isothermal process?",
                  answer: "In an isothermal process, the temperature of the ideal gas remains constant. According to the First Law of Thermodynamics, the change in internal energy (ΔU) is zero for an isothermal process. Therefore, any heat added to the system (Q) must be used to do work (W) on the surroundings, so Q = W. Since internal energy is a function of temperature, and the temperature remains constant, the internal energy does not change."
                },
                {
                  no: "2",
                  question: "Why is work done on the system considered positive in the context of the First Law of Thermodynamics?",
                  answer: "In the First Law of Thermodynamics, work done on the system is considered positive because it increases the system's internal energy. The First Law is expressed as ΔU = Q - W, where ΔU is the change in internal energy, Q is the heat added to the system, and W is the work done by the system. By convention, if work is done on the system, W is positive, which increases the system's internal energy."
                },
                {
                  no: "3",
                  question: "Why does the efficiency of a heat engine depend on the temperature difference between the heat source and the heat sink?",
                  answer: "The efficiency of a heat engine is given by η = 1 - (T<sub>C</sub> / T<sub>H</sub>), where T<sub>H</sub> is the temperature of the heat source and T<sub>C</sub> is the temperature of the heat sink. This relationship arises from the First Law of Thermodynamics and the second law of thermodynamics. The greater the temperature difference between the heat source and the heat sink, the more heat can be converted into work, increasing the engine's efficiency. If the temperature difference is small, less work is done per unit of heat energy transferred."
                }
              
              ];
    

  return (
    <React.Fragment>
        <QuestDisplay title = "Physics - Frist Law of Thermodynamics" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </React.Fragment>
  )
}

export default FirstLawOfThermo
