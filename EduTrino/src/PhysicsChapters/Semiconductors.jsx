import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Semiconductors = () => {

    const questionArray = [
        {
            "question": "The energy band gap is maximum in which of the following?",
            "explain": "The energy band gap refers to the difference in energy between the valence band and the conduction band. In insulators, this band gap is the largest, making it difficult for electrons to move from the valence band to the conduction band. Thus, insulators have the maximum energy band gap compared to metals, superconductors, and semiconductors.",
            "options": [
              "a) Metals",
              "b) Superconductors",
              "c) Insulators",
              "d) Semiconductors"
            ],
            "correct": "c) Insulators"
          },
          {
            "question": "What happens to the forbidden energy gap of a semiconductor with the fall of temperature?",
            "explain": "As the temperature of a semiconductor decreases, the forbidden energy gap (band gap) typically increases. This is because the thermal energy available to excite electrons from the valence band to the conduction band decreases, leading to a wider energy gap. Hence, the band gap generally becomes larger with a decrease in temperature.",
            "options": [
              "a) Decreases",
              "b) Increases",
              "c) Unchanged",
              "d) Sometimes decreases and sometimes increases"
            ],
            "correct": "b) Increases"
          },
          {
            "question": "In a p-type semiconductor, the current conduction is due to",
            "explain": "In a p-type semiconductor, the majority charge carriers are holes, which are essentially the absence of electrons in the valence band. These holes facilitate the flow of electric current through the material as they move through the lattice.",
            "options": [
              "a) Holes",
              "b) Atoms",
              "c) Electrons",
              "d) Protons"
            ],
            "correct": "a) Holes"
          },
          {
            "question": "Which of the following is a universal gate?",
            "explain": "A universal gate is one that can be used to implement any Boolean function without needing any other type of gate. The NAND gate is considered a universal gate because any Boolean function can be implemented using only NAND gates.",
            "options": [
              "a) NOT",
              "b) AND",
              "c) OR",
              "d) NAND"
            ],
            "correct": "d) NAND"
          },
          {
            "question": "In a Zener diode, which characteristic allows it to maintain a constant voltage across it?",
            "explain": "A Zener diode operates in the reverse breakdown region, where it maintains a constant voltage (Zener voltage) regardless of the current flowing through it. This makes it useful as a voltage regulator.",
            "options": [
              "a) Forward biasing",
              "b) Reverse biasing",
              "c) High current capability",
              "d) Low resistance"
            ],
            "correct": "b) Reverse biasing"
          },
          {
            "question": "Which of the following statements is true about the reverse-biased condition of a diode?",
            "explain": "In reverse bias, a diode does not conduct current under normal conditions, and the resistance is very high. However, if the reverse voltage exceeds a certain level, it can lead to breakdown and conduction.",
            "options": [
              "a) Diode conducts current easily",
              "b) Diode has low resistance",
              "c) Diode blocks current flow",
              "d) Diode becomes forward biased"
            ],
            "correct": "c) Diode blocks current flow"
          },
          {
            "question": "In a full-wave rectifier, how many diodes are typically used in a bridge rectifier configuration?",
            "explain": "A bridge rectifier configuration requires four diodes arranged in a bridge circuit. This setup allows the rectification of both halves of the AC waveform, providing a full-wave rectified output.",
            "options": [
              "a) One",
              "b) Two",
              "c) Three",
              "d) Four"
            ],
            "correct": "d) Four"
          },


    ];

    const subjective = [
        {
            no: "1",
            question: "Why do semiconductors have conductivity between conductors and insulators?",
            answer: `
              Semiconductors have variable conductivity because their charge carrier concentration can be altered by doping or temperature changes. They lie between conductors and insulators in terms of conductivity due to this tunable nature.
            `
          },
          {
            no: "2",
            question: "What is the effect of doping on semiconductors?",
            answer: `
              Doping increases the number of charge carriers in semiconductors. N-type doping adds electrons, while p-type doping creates holes, enhancing conductivity.
            `
          },
          {
            no: "3",
            question: "Why does semiconductor resistance decrease with temperature?",
            answer: `
              As temperature increases, more electrons are excited to the conduction band, increasing the number of charge carriers and thus reducing resistance.
            `
          },
          {
            no: "4",
            question: "How does a Zener diode regulate voltage?",
            answer: `
              A Zener diode maintains a constant voltage by conducting in reverse once the applied voltage reaches its breakdown value, thus stabilizing the output voltage.
            `
          },
          {
            no: "5",
            question: "Differentiate between half-wave and full-wave rectifiers.",
            answer: `
              Half-wave rectifiers use one diode and produce a pulsating DC, while full-wave rectifiers use two or four diodes to produce smoother DC with lower ripple.
            `
          },
          {
            no: "6",
            question: "What is the role of a resistor in an LCR circuit?",
            answer: `
              The resistor limits current, provides damping, and dissipates energy in the LCR circuit.
            `
          },
          {
            no: "7",
            question: "How does a pn-junction affect a diode's behavior?",
            answer: `
              A pn-junction creates a depletion region that controls current flow, allowing the diode to conduct in forward bias and block in reverse bias.
            `
          },
          {
            no: "8",
            question: "Why does forward biasing a diode result in low resistance?",
            answer: `
              Forward biasing reduces the depletion region width, allowing charge carriers to flow more easily and thus reducing resistance.
            `
          }

    ];

    return (
        <React.Fragment>
            <QuestDisplay title="Physics - Semiconductor Devices" question={questionArray} subjective={subjective} sub="Physics" />
        </React.Fragment>
    )
}

export default Semiconductors
