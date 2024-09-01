import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Thermodynamics = () => {

    const questArray = [
        {
            "question": "Which of the following is the correct Gibbs equation?",
            "explain": "The Gibbs free energy equation is used to determine the spontaneity of a reaction. The correct equation is given by:<br><br><b>ΔG = ΔH – TΔS</b><br><br>where ΔG is the change in Gibbs free energy, ΔH is the change in enthalpy, T is the temperature in Kelvin, and ΔS is the change in entropy. This equation tells us that a reaction is spontaneous if ΔG is negative.",
            "options": [
              "ΔG = ΔH + TΔS",
              "ΔG = ΔH – TΔS",
              "ΔG = ΔH – 2TΔS",
              "ΔG = ΔH – 3TΔS"
            ],
            "correct": "ΔG = ΔH – TΔS"
          },
          {
            "question": "What is the criterion of the feasibility of a reaction at any temperature?",
            "explain": "The feasibility of a reaction is determined by the sign of the Gibbs free energy change (ΔG). For a reaction to be feasible at any temperature, ΔG must be negative. This indicates that the reaction is spontaneous and can occur without the input of additional energy. If ΔG is positive, the reaction is non-spontaneous, and if ΔG is zero, the system is at equilibrium.",
            "options": [
              "ΔG of the reaction must be positive",
              "ΔG of the reaction must be negative",
              "ΔG of the reaction must be equal to zero",
              "Does not depend on ΔG of the reaction"
            ],
            "correct": "ΔG of the reaction must be negative"
          },
          {
            "question": "In an adiabatic process, the work done is 50 kJ. What is its internal energy?",
            "explain": "For an adiabatic process, the first law of thermodynamics is given by:<br><br><b>ΔU = Q - W</b><br><br>In an adiabatic process, the heat transfer <b>Q = 0</b>, so the change in internal energy is:<br><br><b>ΔU = -W</b><br><br>Given:<br><br>Work done (W) = 50 kJ<br><br>Substitute the values:<br><br><b>ΔU = -50 kJ</b><br><br>Thus, the change in internal energy is -50 kJ.",
            "options": [
              "50 KJ",
              "25 KJ",
              "-50 KJ",
              "-25 KJ"
            ],
            "correct": "-50 KJ"
          },
          {
            "question": "For an ideal gas, C<sub>V</sub> and C<sub>P</sub> are related as:",
            "explain": "For an ideal gas, the relation between the heat capacities at constant volume (C<sub>V</sub>) and constant pressure (C<sub>P</sub>) is given by:<br><br>First, we use the thermodynamic identity:<br><br><b>dU = C<sub>V</sub> dT</b> (at constant volume)<br><br>and<br><br><b>dH = C<sub>P</sub> dT</b> (at constant pressure)<br><br>where U is the internal energy and H is the enthalpy. The enthalpy H is related to the internal energy U by:<br><br><b>H = U + PV</b><br><br>For an ideal gas, PV = nRT, where n is the number of moles and R is the universal gas constant. Thus:<br><br><b>dH = dU + PdV + VdP</b><br><br>At constant pressure, dP = 0, and for an ideal gas, d(PV) = VdP + PdV = nRdT. Therefore:<br><br><b>dH = dU + nRdT</b><br><br>Substituting the expressions for dU and dH:<br><br><b>C<sub>P</sub> dT = C<sub>V</sub> dT + nRdT</b><br><br>Thus:<br><br><b>C<sub>P</sub> - C<sub>V</sub> = nR</b><br><br>For one mole of gas, this simplifies to:<br><br><b>C<sub>P</sub> - C<sub>V</sub> = R</b><br><br>Thus, the correct relation is <b>C<sub>P</sub> - C<sub>V</sub> = R</b>.",
            "options": [
              "C<sub>V</sub> – C<sub>P</sub> = R",
              "C<sub>V</sub> + C<sub>P</sub> = R",
              "C<sub>P</sub> – C<sub>V</sub> = RT",
              "C<sub>P</sub> – C<sub>V</sub> = R"
            ],
            "correct": "C<sub>P</sub> – C<sub>V</sub> = R"
          },
          {
            "question": "Considering entropy (S) and thermodynamic parameters, the criteria for the spontaneity of any process is:",
            "explain": "The spontaneity of a process can be determined using the change in entropy of the system and its surroundings. The criterion for spontaneity is that the total entropy change (ΔS_total) must be positive. This total entropy change is given by:<br><br><b>ΔS_total = ΔS_system + ΔS_surroundings</b><br><br>For a process to be spontaneous, the total entropy change must be greater than zero:<br><br><b>ΔS_total > 0</b><br><br>Therefore, the correct criterion for the spontaneity of any process is that the sum of the entropy change of the system and the surroundings must be positive.",
            "options": [
              "△S system + △S surroundings > 0",
              "△S system – △S surroundings < 0",
              "△S system > 0",
              "△S surroundings > 0"
            ],
            "correct": "△S system + △S surroundings > 0"
          },
          {
            "question": "Calculate the standard enthalpy of formation of CH<sub>3</sub>OH from the following data:<br><br>1. CH<sub>3</sub>OH (l) + 2 O<sub>2</sub> (g) → CO<sub>2</sub> (g) + 2 H<sub>2</sub>O (l) (ΔH = −726 kJ mol<sup>−1</sup>)<br>2. C (graphite) + O<sub>2</sub> (g) → CO<sub>2</sub> (g) (ΔH = −393 kJ mol<sup>−1</sup>)<br>3. H<sub>2</sub> (g) + 2 O<sub>2</sub> (g) → H<sub>2</sub>O (l) (ΔH = −286 kJ mol<sup>−1</sup>)",
            "explain": "To find the standard enthalpy of formation of CH<sub>3</sub>OH, use Hess's law. The enthalpy of formation of CH<sub>3</sub>OH is the enthalpy change for the reaction where CH<sub>3</sub>OH is formed from its elements in their standard states.<br><br>1. Reverse the given reaction to find the enthalpy of formation:<br><i>Note: While reversing the reaction, sign of enthaply also reverses !! </i><br>CO<sub>2</sub> (g) + 2 H<sub>2</sub>O (l) → CH<sub>3</sub>OH (l) + 2 O<sub>2</sub> (g) (ΔH = +726 kJ mol<sup>−1</sup>)<br><br>2. Use the provided enthalpy changes:<br> - C (graphite) + O<sub>2</sub> (g) → CO<sub>2</sub> (g) (ΔH = −393 kJ mol<sup>−1</sup>)<br> - 2 H<sub>2</sub> (g) + 4 O<sub>2</sub> (g) → 2 H<sub>2</sub>O (l) (ΔH = −572 kJ mol<sup>−1</sup>, which is twice the given ΔH for one mole)<br><br>Add these equations:<br>C (graphite) + 2 H<sub>2</sub> (g) + ½ O<sub>2</sub> (g) → CH<sub>3</sub>OH (l)<br><br>Thus, the enthalpy of formation of CH<sub>3</sub>OH is:<br>ΔH<sub>formation</sub> = ΔH<sub>reaction1</sub> - ΔH<sub>reaction2</sub> - ΔH<sub>reaction3</sub><br>ΔH<sub>formation</sub> = 726 - 393 - 572 kJ mol<sup>−1</sup><br>ΔH<sub>formation</sub> = −239 kJ mol<sup>−1</sup>",
            "options": [
              "−239 kJ mol<sup>−1</sup>",
              "−572 kJ mol<sup>−1</sup>",
              "−726 kJ mol<sup>−1</sup>",
              "−393 kJ mol<sup>−1</sup>"
            ],
            "correct": "−239 kJ mol<sup>−1</sup>"
          },
          {
            "question": "For the reaction Ag<sub>2</sub>O(s) → 2Ag(s) + ½ O<sub>2</sub>(g) with ΔH = 30.56 kJ mol<sup>-1</sup> and ΔS = 6.66 J K<sup>-1</sup> mol<sup>-1</sup> (at 1 atm), calculate the temperature at which ΔG is equal to zero. Also, predict the direction of the reaction at this temperature.",
            "explain": "For a reaction at equilibrium, the Gibbs free energy change (ΔG) is zero. The Gibbs free energy equation is:<br><br>ΔG = ΔH − TΔS<br><br>At equilibrium, ΔG = 0, so:<br>0 = ΔH − TΔS<br>T = ΔH / ΔS<br><br>Substitute the given values:<br>ΔH = 30.56 kJ mol<sup>-1</sup> = 30560 J mol<sup>-1</sup><br>ΔS = 6.66 J K<sup>-1</sup> mol<sup>-1</sup><br>Therefore,<br>T = 30560 J mol<sup>-1</sup> / 6.66 J K<sup>-1</sup> mol<sup>-1</sup><br>T = 4589 K<br><br>At 4589 K, ΔG = 0 indicates that the reaction is at equilibrium. Below this temperature, ΔG will be positive, and the reaction will not be spontaneous in the forward direction. Above this temperature, ΔG will be negative, and the reaction will be spontaneous in the forward direction.",
            "options": [
              "T = 4589 K; The reaction is in equilibrium at this temperature.",
              "T = 30560 K; The reaction is in equilibrium at this temperature.",
              "T = 6660 K; The reaction is in equilibrium at this temperature.",
              "T = 4589 K; The reaction is spontaneous at this temperature."
            ],
            "correct": "T = 4589 K; The reaction is in equilibrium at this temperature."
          },

          
    ];

    const subjective = [
        {
            "no": "1",
            "question": "Why is it impossible to achieve 100% efficiency in a heat engine according to the Second Law of Thermodynamics?",
            "answer": "According to the Second Law of Thermodynamics, some energy is always lost to the surroundings as heat in any real heat engine. This is because no process can be 100% efficient due to the inevitable increase in entropy. Even in a theoretically perfect engine, a fraction of energy is always dissipated, preventing 100% efficiency."
          },
          {
            "no": "2",
            "question": "Explain why the enthalpy of formation for an element in its standard state is zero.",
            "answer": "The enthalpy of formation of an element in its standard state is zero by definition because it is used as a reference point. This baseline is chosen so that the enthalpy changes for reactions involving that element can be measured relative to this standard state."
          },
          {
            "no": "3",
            "question": "How does the concept of Gibbs free energy explain the spontaneity of a chemical reaction?",
            "answer": "Gibbs free energy (ΔG) combines enthalpy (ΔH) and entropy (ΔS) into a single value to predict the spontaneity of a reaction. A reaction is spontaneous if ΔG is negative. This is because the Gibbs free energy change accounts for both the energy available for work and the disorder of the system."
          },
          {
            "no": "4",
            "question": "Explain how Hess's Law can be used to determine the enthalpy change of a reaction that is difficult to measure directly.",
            "answer": "Hess's Law states that the total enthalpy change for a reaction is the same, regardless of whether it occurs in one step or multiple steps. By breaking down a difficult reaction into simpler, measurable reactions whose enthalpy changes are known, one can use Hess's Law to calculate the overall enthalpy change for the reaction of interest."
          }
    ];

  return (
    <div>
       <QuestDisplay sub="Chemistry" title="Chemistry - Thermodynamics" subjective={subjective} question={questArray} />
    </div>
  )
}

export default Thermodynamics
