import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const AlternatingCurrent = () => {

    const questionArray = [
        {
            "question": "What is the frequency of the AC mains in Nepal?",
            "explain": "The standard frequency of AC mains in Nepal is 50 Hz.",
            "options": [
              "60 Hz",
              "50 Hz",
              "40 Hz",
              "30 Hz"
            ],
            "correct": "50 Hz"
          },
          {
            "question": "Which of the following circuits exhibits maximum power dissipation?",
            "explain": "In a pure resistive circuit, the power dissipation is maximum because the power is given by P = I²R, where R is the resistance. In pure inductive and capacitive circuits, the power dissipation is zero because the power factor is zero.",
            "options": [
              "Pure Inductive Circuit",
              "Pure Capacitive Circuit",
              "Pure Resistive Circuit",
              "None of the above"
            ],
            "correct": "Pure Resistive Circuit"
          },
          {
            "question": "Which of the following is usually taken to make the core of a transformer?",
            "explain": "The core of a transformer is usually made of soft iron because it has high magnetic permeability and low hysteresis loss, which enhances the efficiency of the transformer.",
            "options": [
              "Aluminum",
              "Copper",
              "Soft iron",
              "Hard iron"
            ],
            "correct": "Soft iron"
          },
          {
            "question": "Alternating voltage in an AC circuit is represented by V = 100√2 sin(100πt) volts. Find the root mean square value and the frequency.",
            "explain": "Given: V = 100√2 sin(100πt)<br><br>1. **Root Mean Square (rms) Value**<br>For an alternating voltage V = Vo sin(ωt), where Vo is the peak voltage:<br>Vrms = Vo / √2<br>Here, Vo = 100√2 V<br>So, Vrms = (100√2) / √2 = 100 V<br><br>2. **Frequency**<br>The angular frequency ω is given by ω = 100π rad/s.<br>We know that ω = 2πf, where f is the frequency.<br>So, 2πf = 100π<br>Therefore, f = 100π / 2π = 50 Hz",
            "options": [
              "Vrms = 70.7 V, Frequency = 50 Hz",
              "Vrms = 100 V, Frequency = 50 Hz",
              "Vrms = 70.7 V, Frequency = 100 Hz",
              "Vrms = 100 V, Frequency = 100 Hz"
            ],
            "correct": "Vrms = 100 V, Frequency = 50 Hz"
          },
          {
            "question": "A series L-C-R circuit is made by taking R = 100 Ω, L = π^2 H, C = π/100 μF. This series combination is connected across an AC source of 220 V, 50 Hz. Calculate (i) the impedance of the circuit and (ii) the peak value of the current flowing in the circuit.",
            "explain": "Given:<br>R = 100 Ω<br>L = π^2 H<br>C = π/100 μF<br>Vrms = 220 V<br>f = 50 Hz<br><br>(i) **Impedance of the circuit**<br>First, calculate the inductive reactance (XL) and capacitive reactance (XC):<br>XL = 2πfL = 2π × 50 × π^2 = 200 Ω<br>XC = 1 / (2πfC) = 1 / [2π × 50 × (π / 100) × 10^(-6)] = 100 Ω<br><br>Impedance Z is given by:<br>Z = √(R^2 + (XL - XC)^2)<br>Z = √(100^2 + (200 - 100)^2)<br>Z = √(10000 + 10000)<br>Z = √20000 = 100√2 Ω<br><br>(ii) **Peak value of the current**<br>First, calculate the peak voltage Vpeak:<br>Vpeak = √2 × Vrms = √2 × 220 V = 220√2 V<br><br>Peak value of current Ipeak is given by:<br>Ipeak = Vpeak / Z = (220√2) / (100√2) = 2.2 A",
            "options": [
              "Impedance = 100√2 Ω, Peak current = 2.2 A",
              "Impedance = 100 Ω, Peak current = 2.2 A",
              "Impedance = 100√2 Ω, Peak current = 1.1 A",
              "Impedance = 100 Ω, Peak current = 1.1 A"
            ],
            "correct": "Impedance = 100√2 Ω, Peak current = 2.2 A"
          },
          {
            "question": "Find the potential difference across the resistance, capacitance, and inductance in a series LCR circuit where L = 2.0 H, C = 1 µF, and R = 1000 Ω. The applied emf has the form of V = 100√2 sin(1000t).",
            "explain": "Given:<br>L = 2.0 H<br>C = 1 µF = 10^-6 F<br>R = 1000 Ω<br>V = 100√2 sin(1000t)<br><br>From the given voltage equation, the angular frequency ω = 1000 rad/s and peak voltage V0 = 100√2 V.<br><br>The impedance Z of the series LCR circuit is:<br>Z = √(R^2 + (XL - XC)^2)<br>where XL = ωL and XC = 1 / (ωC).<br><br>Substitute the given values:<br>XL = 1000 × 2 = 2000 Ω<br>XC = 1 / (1000 × 10^-6) = 1000 Ω<br><br>Thus:<br>Z = √(1000^2 + (2000 - 1000)^2)<br>Z = √(1000000 + 1000000)<br>Z = √2000000 = 1000√2 Ω<br><br>The rms current (Irms) is:<br>Irms = V0 / (√2 × Z) = (100√2) / (√2 × 1000√2) = 0.0707 A<br><br>Now, calculate the potential differences:<br><br>Potential difference across the inductor (VL):<br>VL = Irms × XL = Irms × ωL<br>VL = 0.0707 × 2000 = 141.4 V<br><br>Potential difference across the capacitor (VC):<br>VC = Irms × XC = Irms / (ωC)<br>VC = 0.0707 / (1000 × 10^-6) = 70.7 V<br><br>Potential difference across the resistor (VR):<br>VR = Irms × R<br>VR = 0.0707 × 1000 = 70.7 V",
            "options": [
              "Inductor: 141.4 V, Capacitor: 70.7 V, Resistor: 70.7 V",
              "Inductor: 70.7 V, Capacitor: 141.4 V, Resistor: 70.7 V",
              "Inductor: 70.7 V, Capacitor: 70.7 V, Resistor: 141.4 V",
              "Inductor: 70.7 V, Capacitor: 141.4 V, Resistor: 141.4 V"
            ],
            "correct": "Inductor: 141.4 V, Capacitor: 70.7 V, Resistor: 70.7 V"
          }



    ];

    const subjective = [
        {
            no: "1",
            question: "What is the RMS value of an AC?",
            answer: `
              The RMS value of an AC is the square root of the mean of the squares of the instantaneous values taken over a complete cycle.
            `
          },
          {
            no: "2",
            question: "What is the mean value of an AC?",
            answer: `
              The mean value of AC is the mean or average of the instantaneous values of AC taken over half a cycle.
            `
          },
          {
            no: "3",
            question: "What is the role of a resistor in the LCR circuit?",
            answer: `
              The resistor in an LCR circuit limits the flow of current flowing through it, provides damping, and dissipates electrical energy.
            `
          },
          {
            no: "4",
            question: "In a series LCR circuit, obtain an expression for the resonant frequency.",
            answer: `
              The phenomenon of resonance occurs at a particular frequency called the resonant frequency. At this frequency, the amplitude of the oscillations becomes very large.<br><br>
              If the inductive reactance (X<sub>L</sub>) becomes equal to the capacitive reactance (X<sub>C</sub>) at frequency f<sub>0</sub>, then the impedance of the LCR circuit will be minimum, and hence, the current will be maximum.<br><br>
              The condition for electrical resonance is:<br>
              X<sub>L</sub> = X<sub>C</sub><br><br>
              Inductive reactance is given by X<sub>L</sub> = ω<sub>0</sub>L and capacitive reactance is given by X<sub>C</sub> = 1 / (ω<sub>0</sub>C), where ω<sub>0</sub> is the angular frequency.<br><br>
              Therefore:<br>
              ω<sub>0</sub>L = 1 / (ω<sub>0</sub>C)<br><br>
              Rearranging this equation gives:<br>
              ω<sub>0</sub><sup>2</sup> = 1 / (LC)<br><br>
              Solving for ω<sub>0</sub>, we get:<br>
              ω<sub>0</sub> = 1 / √(LC)<br><br>
              The angular frequency ω<sub>0</sub> is related to the resonant frequency f<sub>0</sub> by the equation:<br>
              ω<sub>0</sub> = 2πf<sub>0</sub><br><br>
              Therefore:<br>
              2πf<sub>0</sub> = 1 / √(LC)<br><br>
              Solving for f<sub>0</sub>, we get:<br>
              f<sub>0</sub> = 1 / (2π√(LC))<br><br>
              This is the formula for the resonant frequency in a series LCR circuit.
            `
          }

    ];

  return (
    <React.Fragment>
        <QuestDisplay title = "Physics - Alternating Current" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </React.Fragment>
  )
}

export default AlternatingCurrent
