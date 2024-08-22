import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const WavesInPipeAndString = () => {

    const questionArray = [
        {
            question: "What kind of waves vibrate our eardrums so we are able to listen?",
            options: [
                "Radio waves",
                "Sound waves",
                "Light waves",
                "Microwaves"
            ],
            correct: "Sound waves",
            explain: "Sound waves are mechanical waves that travel through a medium (such as air) and cause vibrations in the eardrums, which we perceive as sound."
        },
        {
            question: "Amplitude reflects the amount of _______ in a wave.",
            options: [
                "Energy",
                "Speed",
                "Rarefaction",
                "Compression"
            ],
            correct: "Energy",
            explain: "Amplitude of a wave is directly related to the amount of energy it carries. Higher amplitude means more energy."
        },
        {
            question: "A string of mass 2.50 kg is under a tension of 200 N. The length of the stretched string is 20.0 m. If a transverse jerk is struck at one end of the string, how long does the disturbance take to reach the other end?",
            options: [
                "0.50 s",
                "0.25 s",
                "1.00 s",
                "2.00 s"
            ],
            correct: "0.50 s",
            explain: "First, calculate the mass per unit length of the string: <br> µ = 2.50 kg / 20.0 m = 0.125 kg/m. <br> The velocity (v) of the transverse wave is given by: <br> v = √(T/µ) <br> = √(200 N / 0.125 kg/m) <br> = √1600 <br> = 40 m/s. <br> The time (t) taken for the disturbance to travel the length of the string is: <br> t = length / velocity <br> = 20.0 m / 40 m/s <br> = 0.50 s."
        },
        {
            question: "A steel wire has a length of 12.0 m and a mass of 2.10 kg. What should be the tension in the wire so that the speed of a transverse wave on the wire equals the speed of sound in dry air at 20 °C (343 m/s)?",
            options: [
                "2.06 × 10^4 N",
                "1.85 × 10^4 N",
                "1.76 × 10^4 N",
                "2.30 × 10^4 N"
            ],
            correct: "2.06 × 10^4 N",
            explain: "First, calculate the mass per unit length (µ) of the wire: <br> µ = m / l <br> = 2.10 kg / 12.0 m <br> = 0.175 kg/m. <br> The tension (T) in the wire can be found using the formula for wave velocity: <br> v = √(T / µ) <br> Rearranging for T: <br> T = v² × µ <br> = (343 m/s)² × 0.175 kg/m <br> = 117649 × 0.175 <br> = 20588.575 N <br> ≈ 2.06 × 10^4 N."
        },
        {
            question: "A bat emits ultrasonic sound of frequency 1000 kHz in air. If the sound meets a water surface, what are the wavelengths of (a) the reflected sound in air and (b) the transmitted sound in water?",
            options: [
                "(a) 3.4 × 10<sup>-4</sup> m, (b) 1.49 × 10<sup>-3</sup> m",
                "(a) 2.0 × 10<sup>-4</sup> m, (b) 1.20 × 10<sup>-3</sup> m",
                "(a) 4.5 × 10<sup>-4</sup> m, (b) 1.60 × 10<sup>-3</sup> m",
                "(a) 3.4 × 10<sup>-4</sup> m, (b) 1.80 × 10<sup>-3</sup> m"
            ],
            correct: "(a) 3.4 × 10<sup>-4</sup> m, (b) 1.49 × 10<sup>-3</sup> m",
            explain: "Given: <br> Frequency of the ultrasonic sound, v = 1000 kHz = 10<sup>6</sup> Hz <br> Speed of sound in air, v<sub>air</sub> = 340 m/s <br> Speed of sound in water, v<sub>water</sub> = 1486 m/s <br><br> (a) Wavelength of the reflected sound in air: <br> λ<sub>air</sub> = v<sub>air</sub> / v = 340 m/s / 10<sup>6</sup> Hz = 3.4 × 10<sup>-4</sup> m <br><br> (b) Wavelength of the transmitted sound in water: <br> λ<sub>water</sub> = v<sub>water</sub> / v = 1486 m/s / 10<sup>6</sup> Hz = 1.49 × 10<sup>-3</sup> m"
        }, 
        {
            question: "A wire stretched between two rigid supports vibrates in its fundamental mode with a frequency of 45 Hz. What is the speed of the transverse wave in the string, and what is the tension in the string?",
            options: [
                "78.75 m/s, 248.06 N",
                "45.00 m/s, 150.00 N",
                "90.00 m/s, 300.00 N",
                "60.00 m/s, 200.00 N"
            ],
            correct: "78.75 m/s, 248.06 N",
            explain: "Given: <br> Mass of the wire, m = 3.5 × 10<sup>-3</sup> kg <br> Linear mass density, µ = m / l = 4.0 × 10<sup>-2</sup> kg/m <br> Frequency of vibration, v = 45 Hz <br> Length of the wire, l = 0.875 m <br><br> The wavelength of the stationary wave, λ, is related to the length of the wire by λ = 2l = 1.75 m <br> The speed of the transverse wave, v = λv = 1.75 m × 45 Hz <br> = 78.75 m/s <br><br> The tension produced in the string is given by the relation: <br> T = v²µ <br> = (78.75 m/s)² × 4.0 × 10<sup>-2</sup> kg/m <br> = 248.06 N"
        },          
                
    ];

    const subjective = [
        {
            no: "1.",
            question: "What do you mean by stationary waves?",
            answer: "The wave formed by the combination of two waves moving in opposite directions, each having the same amplitude and frequency, is called a stationary wave."
          },
          {
            no: "2.",
            question: "What is resonance?",
            answer: "Resonance describes the phenomenon of increased amplitude that occurs when the frequency of an applied periodic force is equal or close to a natural frequency of the system on which it acts."
          },


    ];

  return (
    <React.Fragment>
        <QuestDisplay title = "Physics - Waves in Pipes and Strings" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </React.Fragment>
  )
}

export default WavesInPipeAndString
