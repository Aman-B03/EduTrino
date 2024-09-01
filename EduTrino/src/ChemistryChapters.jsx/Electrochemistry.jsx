import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Electrochemistry = () => {

    const questArray = [
        {
            "question": "An electrochemical cell generally consists of a cathode and an anode. Which of the following statements is correct with respect to the cathode?",
            "explain": "In an electrochemical cell, the cathode is where reduction occurs, which means it gains electrons. Electrons move into the cathode, making it the site of the reduction half-reaction. Unlike the anode, which is denoted by a negative sign in a galvanic cell, the cathode is usually denoted by a positive sign. It is not made of insulating material but rather a conductor to facilitate electron flow.",
            "options": [
                "Oxidation occurs at the cathode",
                "Electrons move into the cathode",
                "Usually denoted by a negative sign",
                "Is usually made up of insulating material"
            ],
            "correct": "Electrons move into the cathode"
        },
        {
            "question": "The conductivity of electrolytic conductors is due to __________",
            "explain": "The conductivity of electrolytic conductors, such as solutions of electrolytes, is primarily due to the movement of ions. Unlike metallic conductors where free mobile electrons are responsible for conductivity, electrolytic conductors rely on the movement of ions in a solution or molten state.",
            "options": [
                "Flow of free mobile electrons",
                "Movement of ions",
                "Either movement of electrons or ions",
                "Cannot be said"
            ],
            "correct": "Movement of ions"
        },

    ];

    const subjective = [
        {
            "no": "1",
            "question": "Why is the standard hydrogen electrode used as the reference electrode in electrochemical measurements?",
            "answer": "The standard hydrogen electrode (SHE) is used as the reference electrode because it has a defined and reproducible potential of 0 volts under standard conditions. This makes it a stable and universal reference for measuring and comparing the electrode potentials of other electrodes."
        },
        {
            "no": "2",
            "question": "How can the electrochemical series be utilized to predict the spontaneity of a redox reaction?",
            "answer": "The electrochemical series lists the standard electrode potentials of various electrodes. By comparing the standard electrode potentials of the oxidizing and reducing agents in a redox reaction, one can determine if the reaction will be spontaneous. A positive cell potential (E°cell) indicates a spontaneous reaction."
        },
        {
            "no": "3",
            "question": "Can you store copper sulfate solutions in a zinc pot?",
            "answer": "No, copper sulfate solutions cannot be stored in a zinc pot. This is because zinc is more reactive than copper. In a reaction where zinc comes into contact with copper sulfate, zinc will displace copper from the solution, resulting in the formation of zinc sulfate and copper metal. The reaction is:<br><br>Zn + CuSO<sub>4</sub> → ZnSO<sub>4</sub> + Cu<br><br>Therefore, zinc pots are unsuitable for storing copper sulfate solutions."
        },
        {
            "no": "4",
            "question": "How does the concentration of ions affect the cell potential in a voltaic cell?",
            "answer": "The concentration of ions affects the cell potential according to the Nernst equation. Changes in ion concentration alter the electrode potentials and hence the overall cell potential. As concentrations of reactants or products change, the cell potential shifts to reflect the new equilibrium state."
        },
        {
            "no": "5",
            "question": "Describe the role of the calomel electrode in electrochemical measurements.",
            "answer": "The calomel electrode is a type of reference electrode that consists of mercury in contact with mercurous chloride (calomel) and a potassium chloride solution. It provides a stable and reproducible reference potential, making it useful for accurate electrochemical measurements, especially in acidic or neutral solutions."
        }
    ];

    return (
        <div>
            <QuestDisplay sub="Chemistry" title="Chemistry - Electrochemistry" subjective={subjective} question={questArray} />
        </div>
    )
}

export default Electrochemistry
