import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const WaveMotion = () => {

    const questionArray = [
        {
            question: "Which of the following waves can be transmitted through the media of solids, liquids, and gases?",
            options: [
                "Electromagnetic waves",
                "Transverse waves",
                "Longitudinal waves",
                "Mechanical waves"
            ],
            correct: "Longitudinal waves",
            explain: "Longitudinal waves can travel through solids, liquids, and gases. These waves involve particle motion parallel to the direction of wave propagation, such as sound waves. Transverse waves require a medium that supports shear stress and cannot propagate through liquids and gases. Electromagnetic waves do not require a medium and can travel through a vacuum. Mechanical waves require a medium, but not all types can travel through all states of matter."
        },
        {
            question: "Name the type of wave in which the medium particles vibrate in a direction perpendicular to the direction of wave motion.",
            options: [
                "Longitudinal waves",
                "Transverse waves",
                "Electromagnetic waves",
                "Propagated waves"
            ],
            correct: "Transverse waves",
            explain: "In transverse waves, the particles of the medium vibrate perpendicular to the direction of wave propagation. Examples include waves on a string and surface water waves. Longitudinal waves involve particle vibrations parallel to the direction of wave propagation, such as sound waves. Electromagnetic waves do not require a medium and can travel through a vacuum. 'Propagated waves' is not a specific type of wave."
        },
        {
            question: "Which parameter does not change when sound travels from air to water?",
            options: [
                "Temperature",
                "Velocity",
                "Frequency",
                "Wavelength"
            ],
            correct: "Frequency",
            explain: "When sound travels from air to water, the frequency of the sound remains constant. However, the velocity of sound increases and the wavelength changes because the speed of sound is different in different media. Temperature affects the speed of sound, but in this context, it's not the parameter in question. Frequency is determined by the source of the sound and is unaffected by the medium through which the sound travels."
        },
        {
            question: "In Doppler’s effect, the apparent frequency does not depend upon _____",
            options: [
                "Speed of the source",
                "Distance between the source and observer",
                "Speed of the observer",
                "Frequency of the source"
            ],
            correct: "Distance between the source and observer",
            explain: "In the Doppler effect, the apparent frequency of a sound depends on the speed of the source, the speed of the observer, and the frequency of the source. However, it does not depend on the distance between the source and observer. The apparent frequency changes due to relative motion but not because of the distance."
        },
        {
            question: "Calculate the frequency of a sinusoidal wave if the time required for a particular point is 0.170 sec to move from maximum displacement to zero displacement.",
            options: [
                "0.72 Hz",
                "0.28 Hz",
                "2.47 Hz",
                "1.47 Hz"
            ],
            correct: "1.47 Hz",
            explain: "The time required for a point to move from maximum displacement to zero displacement is one-quarter of the wave's period (T). Therefore, T/4 = 0.170 s, which implies T = 0.68 s.<br><br>Frequency (f) is the reciprocal of the period (T):<br>f = 1 / T = 1 / 0.68 s ≈ 1.47 Hz."
        },
        {
            question: "A stone dropped from the top of a tower of height 300 m high splashes into the water of a pond near the base of the tower. When is the splash heard at the top given that the speed of sound in air is 340 m/s and g = 9.8 m/s²?",
            options: [
                "7.82 s",
                "8.7 s",
                "6.5 s",
                "9.6 s"
            ],
            correct: "8.7 s",
            explain: "First, calculate the time (t₁) taken by the stone to strike the water using the second equation of motion:<br><br>s = (1/2) g t₁²<br>300 = (1/2) × 9.8 × t₁²<br>t₁² = 300 / 4.9 ≈ 61.22<br>t₁ ≈ √61.22 ≈ 7.82 s<br><br>Next, calculate the time (t₂) taken by the sound to travel back up the tower:<br>t₂ = s / speed of sound = 300 / 340 ≈ 0.88 s<br><br>Therefore, the total time after which the splash is heard at the top is:<br>Total time = t₁ + t₂ = 7.82 s + 0.88 s = 8.7 s."
        },
        {
            question: "A hospital uses an ultrasonic scanner to locate tumours in a tissue. What is the wavelength of sound in the tissue if the speed of sound is 1.7 km/s and the operating frequency of the scanner is 4.2 MHz?",
            options: [
                "0.04 mm",
                "0.42 mm",
                "0.41 mm",
                "0.15 mm"
            ],
            correct: "0.41 mm",
            explain: "To find the wavelength (λ) of sound in the tissue, use the formula:<br>λ = v / f<br>where v is the speed of sound and f is the frequency.<br><br>Given:<br>Speed of sound, v = 1.7 km/s = 1.7 × 10³ m/s<br>Frequency, f = 4.2 MHz = 4.2 × 10⁶ Hz<br><br>So,<br>λ = (1.7 × 10³ m/s) / (4.2 × 10⁶ Hz) ≈ 4.1 × 10⁻⁴ m<br><br>Convert this to millimeters:<br>λ = 4.1 × 10⁻⁴ m × 10³ mm/m = 0.41 mm."
        }
                                        
        
        

    ];

    const subjective = [
        {
            no: "1",
            question: "Why can light travel in a vacuum but not sound?",
            answer: "Light is an electromagnetic wave that does not require a medium to propagate. It can travel through the vacuum of space. Sound, however, is a mechanical wave that needs a medium (solid, liquid, or gas) to travel through because it relies on the vibration of particles to transmit the wave energy. In the vacuum of space, there are no particles to vibrate, so sound cannot propagate."
          },
          

    ];

  return (
<React.Fragment>
        <QuestDisplay title = "Physics - Wave Motion" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </React.Fragment>
  )
}

export default WaveMotion
