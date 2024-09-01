import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const ElectricalCircuits = () => {

    const questionArray = [
        {
            "question": "If a 1 A current flows through a circuit, what is the number of electrons flowing through this circuit?",
            "explain": "Given:<br> Current (I) = 1 A<br> The charge of one electron (e) = 1.6 × 10<sup>-19</sup> C<br> The current is the rate of flow of charge. The number of electrons (n) can be calculated using the formula:<br> I = n × e<br> Rearranging for n:<br> n = I / e<br> Substituting the values:<br> n = 1 A / (1.6 × 10<sup>-19</sup> C)<br> = 6.25 × 10<sup>18</sup> electrons.",
            "options": [
                "0.625 × 10<sup>19</sup>",
                "1.6 × 10<sup>19</sup>",
                "1.6 × 10<sup>-19</sup>",
                "0.625 × 10<sup>-19</sup>"
            ],
            "correct": "0.625 × 10<sup>19</sup>"
        },
        {
            "question": "The resistance of a conductor of diameter d and length l is R Ω. If the diameter of the conductor is halved and its length is doubled, the resistance will be",
            "explain": "The resistance R of a conductor is given by R = ρ (l / A), where ρ is the resistivity, l is the length, and A is the cross-sectional area. For a cylindrical conductor, A = π(d/2)^2. If the diameter is halved, the new diameter is d/2, and the new area A' = π((d/2)/2)^2 = π(d^2/16) = A/4. If the length is doubled, the new length is 2l. Therefore, the new resistance R' = ρ (2l / (A/4)) = 8ρ (l / A) = 8R.",
            "options": [
                "R Ω",
                "2R Ω",
                "4R Ω",
                "8R Ω"
            ],
            "correct": "8R Ω"
        },
        {
            "question": "A capacitor carries a charge of 0.1 C at 5 V. Its capacitance is",
            "explain": "The capacitance C of a capacitor is given by the formula C = Q / V, where Q is the charge and V is the voltage. Substituting the given values, C = 0.1 C / 5 V = 0.02 F.",
            "options": [
                "0.02 F",
                "0.5 F",
                "0.05 F",
                "0.2 F"
            ],
            "correct": "0.02 F"
        },
        {
            "question": "Magnetic flux has the unit of",
            "explain": "Magnetic flux (Φ) is measured in Weber (Wb). One Weber is the amount of magnetic flux that, when linked through a circuit, induces an electromotive force (EMF) of one volt as the flux changes at the rate of one Weber per second.",
            "options": [
                "Newton",
                "Ampere turn",
                "Weber",
                "Tesla"
            ],
            "correct": "Weber"
        },
        {
            "question": "Power dissipation in an ideal inductor is",
            "explain": "An ideal inductor does not dissipate power as heat; it only stores and releases energy in its magnetic field. The power dissipated in an ideal inductor is zero.",
            "options": [
                "Maximum",
                "Minimum",
                "Zero",
                "A finite value"
            ],
            "correct": "Zero"
        },
        {
            "question": "A Wheatstone bridge has four resistances: 200Ω, 20Ω, 400Ω, and 40Ω. If the bridge is connected to a 1.5 V battery, calculate the currents through individual resistors.<br><br>First arm resistance P = 200Ω<br>Second arm resistance Q = 20Ω<br>Third arm resistance R = 400Ω<br>Fourth arm resistance S = 40Ω<br>The potential difference is V<sub>AC</sub> = 1.5V since points A and C are connected to the battery.",
            "explain": "The ratios of the arms are:<br>P/Q = 200/20 = 10<br>R/S = 400/40 = 10<br>Since P/Q = R/S, the bridge is balanced, and the current through the galvanometer is zero. The currents through the resistors can be calculated as follows:<br><br>For resistors P and Q:<br>Current in P = Current in Q = V<sub>AB</sub> / (P + Q)<br>= 1.5V / (200Ω + 20Ω)<br>= 1.5V / 220Ω<br>= 0.0681A<br><br>For resistors R and S:<br>Current in R = Current in S = V<sub>AB</sub> / (R + S)<br>= 1.5V / (400Ω + 40Ω)<br>= 1.5V / 440Ω<br>= 0.0340A",
            "options": [
                "0.0681A through P and Q; 0.0340A through R and S",
                "0.0340A through P and Q; 0.0681A through R and S",
                "0.0681A through P and 0.0340A through Q",
                "0.0340A through P and 0.0681A through Q"
            ],
            "correct": "0.0681A through P and Q; 0.0340A through R and S"
        },
        {
            "question": "A potentiometer wire of length 100 cm has a resistance of 30Ω. It is connected in series with a resistance of 20Ω and an accumulator of emf 8V having negligible internal resistance. A source of 1.2V is balanced against a length L of the potentiometer wire. What is the value of L?",
            "explain": "The current passing through the potentiometer wire:<br>I = 8 / (30 + 20)<br>I = 8 / 50<br>I = 0.16A<br><br>The potential difference across the potentiometer wire:<br>V = current × resistance<br>V = 0.16 × 30<br>V = 4.8V<br><br>Length of the wire = 100 cm<br>k = V / l<br>k = 4.8 / 100<br>k = 0.048 V/cm<br><br>The emf 1.2V is balanced against the length L of the wire:<br>1.2 = kL<br>L = 1.2 / k<br>L = 1.2 / 0.048<br>L = 25 cm<br><br>Therefore, the length L is 25 cm.",
            "options": [
                "20",
                "25",
                "30",
                "35"
            ],
            "correct": "25"
        },
        {
            "question": "A potentiometer wire of length 20 m has a resistance of 50Ω. It is connected in series with a resistance box and a 5V storage cell. If the potential gradient along the wire is 0.5 mV/cm, what is the resistance unplugged in the box?",
            "explain": "Potential gradient along the potentiometer wire = potential difference along wire / length of wire<br>0.5 × 10<sup>-3</sup> = I × (50 / 1000)<br>I = 0.5 × 10<sup>-3</sup> × (1000 / 50)<br>I = 1 / 100<br><br>So, 5 / (50 + R) = 1 / 100<br>(R + 50) = 500<br>R = 450Ω<br><br>Therefore, the resistance unplugged in the box is 450Ω.",
            "options": [
                "450 ohms",
                "400 ohms",
                "405 ohms",
                "500 ohms"
            ],
            "correct": "450 ohms"
        },
        {
            "question": "In a metre bridge, the null point is found to be at a distance of 33.33 cm from the left end A. The resistance connected in the right gap is 12Ω. What is the unknown resistance in the left gap?",
            "explain": "In the balanced condition of a Wheatstone bridge:<br><br>R/S = 33.33/66.66 = 1/2<br><br>Given that S = 12Ω,<br><br>R/12 = 1/2<br><br>R = 6Ω<br><br>Therefore, the unknown resistance in the left gap is 6Ω.",
            "options": [
                "24Ω",
                "18Ω",
                "36Ω",
                "6Ω"
            ],
            "correct": "6Ω"
        }
    ];

    const subjective = [
        {
            no: "1",
            question: "Why is the resistance of a conductor directly proportional to its length?",
            answer: "As the length of the conductor increases, the number of collisions between electrons and atoms also increases, which leads to higher resistance."
          },
          {
            no: "2",
            question: "Why is a voltmeter connected in parallel with the circuit element?",
            answer: "A voltmeter is connected in parallel to measure the potential difference across the circuit element without significantly altering the current flowing through the element."
          },
          {
            no: "3",
            question: "Why does the current remain the same in a series circuit?",
            answer: "In a series circuit, there is only one path for current to flow, so the same current passes through each component without any division."
          },
          {
            no: "4",
            question: "Why is the power dissipation in an inductor zero?",
            answer: "The power dissipation in an inductor is zero because in the first half cycle, the inductor withdraws power and then returns it back in the next half cycle, resulting in no net power loss."
          },
          {
            no: "5",
            question: "Why does the power dissipated in a resistor increase with an increase in current?",
            answer: "Power dissipated in a resistor is given by \( P = I^2 R \). As the current increases, the power dissipation increases proportionally to the square of the current."
          }

    ];

  return (
    <React.Fragment>
    <QuestDisplay title = "Physics - Electrical Circuits" question = {questionArray} subjective = {subjective} sub = "Physics" />
</React.Fragment>
  )
}

export default ElectricalCircuits
