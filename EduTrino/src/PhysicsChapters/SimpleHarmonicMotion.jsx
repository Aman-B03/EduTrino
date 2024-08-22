import React from 'react'
import QuestDisplay from '../components/QuestDisplay';

const SimpleHarmonicMotion = () => {

    const questionArray = [
        {
            question: "Which condition is a must for a body to be performing a simple harmonic motion?",
            options: [
                "non-uniform motion",
                "must follow helical path",
                "acceleration is proportional to amplitude",
                "acceleration is proportional to displacement"
            ],
            correct: "acceleration is proportional to displacement",
            explain: "For a body to be in simple harmonic motion (SHM), it must satisfy the condition that its acceleration is proportional to its displacement from the mean position and is directed towards the mean position.<br><br>Mathematically, this is represented by the equation:<br><br><code>a = -ω² x</code><br><br>where <code>a</code> is the acceleration, <code>ω</code> is the angular frequency, and <code>x</code> is the displacement. This implies that the acceleration is directly proportional to the displacement (<code>a &propto; -x</code>) and is always directed towards the equilibrium position. This relationship ensures that the motion is oscillatory and repetitive, characteristic of SHM."
        },
        {
            question: "The time period of a particle in simple harmonic motion is equal to the time between consecutive appearances of the particle at a particular point in its motion. This point is:",
            options: [
                "the mean position",
                "an extreme position",
                "between the mean position and the positive extreme",
                "between the mean position and the negative extreme"
            ],
            correct: "an extreme position",
            explain: "In simple harmonic motion, the time period is the time it takes for the particle to return to the same point in its path. The particle only reaches the same extreme position after completing one full period, which means the time period can be measured between consecutive appearances at the same extreme position."
        },
        {
            question: "The displacement of a particle in simple harmonic motion in one time period is:",
            options: [
                "A",
                "2A",
                "4A",
                "zero"
            ],
            correct: "zero",
            explain: "In one time period of simple harmonic motion (SHM), the particle completes a full cycle of its motion. Since the particle returns to its starting point at the end of one period, the total displacement over one complete period is zero.<br><br>Mathematically, the displacement of the particle oscillates between +A and -A, so the net displacement after completing one full cycle (one period) is:<br><br><code>Displacement = 0</code>"
        },
        {
            no: "3",
            question: "A simple pendulum 4m long swings with an amplitude of 0.2m. Compute the velocity of the pendulum at its lowest point and its acceleration at the extreme ends.",
            options: [
              "Velocity = 0.314 m/s; Acceleration = 0.49 m/s²",
              "Velocity = 0.414 m/s; Acceleration = 0.59 m/s²",
              "Velocity = 0.514 m/s; Acceleration = 0.69 m/s²",
              "Velocity = 0.614 m/s; Acceleration = 0.79 m/s²"
            ],
            correct: "Velocity = 0.314 m/s; Acceleration = 0.49 m/s²",
            explain: `
              <b>Step 1: Calculate the time period (T)</b>
              <br>
              The time period of a simple pendulum is given by:
              <br>
              T = 2&pi;&radic;(L/g)
              <br>
              where L is the length of the pendulum (4 m) and g is the acceleration due to gravity (9.8 m/s²).
              <br><br>
              Substituting the values:
              <br>
              T = 2&pi;&radic;(4 / 9.8) &approx; 4.03 s
              <br><br>
              <b>Step 2: Calculate the angular velocity (&omega;)</b>
              <br>
              The angular velocity is given by:
              <br>
              &omega; = 2&pi;/T
              <br>
              &omega; = 2&pi;/4.03 s &approx; 1.56 rad/s
              <br><br>
              <b>Step 3: Calculate the velocity at the lowest point (v)</b>
              <br>
              The velocity at the lowest point is given by:
              <br>
              v = &omega; &times; A
              <br>
              v = 1.56 rad/s &times; 0.2 m &approx; 0.314 m/s
              <br><br>
              <b>Step 4: Calculate the acceleration at the extreme ends (a)</b>
              <br>
              The acceleration at the extreme ends is given by:
              <br>
              a = &omega;<sup>2</sup> &times; A
              <br>
              a = (1.56 rad/s)<sup>2</sup> &times; 0.2 m &approx; 0.49 m/s²
            `
          },
          {
            no: "4",
            question: "A pendulum with a time period of 2 seconds on Earth is taken to the moon. If the time period on the surface of the moon is 4.90 seconds, what will be the acceleration due to gravity of the moon?",
            options: [
              "1.63 m/s²",
              "1.50 m/s²",
              "1.75 m/s²",
              "1.90 m/s²"
            ],
            correct: "1.63 m/s²",
            explain: `
              <b>Step 1: Relation between time period and gravity</b>
              <br>
              The time period (T) of a simple pendulum is given by:
              <br>
              T = 2&pi;&radic;(L/g)
              <br><br>
              Here, T is the time period, L is the length of the pendulum, and g is the acceleration due to gravity. 
              <br><br>
              <b>Step 2: Using the time period on Earth</b>
              <br>
              Given: T<sub>Earth</sub> = 2 seconds, g<sub>Earth</sub> = 9.8 m/s²
              <br>
              We can rearrange the formula to find L:
              <br>
              L = (T<sub>Earth</sub><sup>2</sup> &times; g<sub>Earth</sub>) / (4&pi;<sup>2</sup>)
              <br>
              L = (2<sup>2</sup> &times; 9.8) / (4&pi;<sup>2</sup>) &approx; 1 m
              <br><br>
              <b>Step 3: Calculate the gravity on the moon (g<sub>moon</sub>)</b>
              <br>
              Now, using the time period on the moon:
              <br>
              T<sub>moon</sub> = 4.90 seconds
              <br>
              g<sub>moon</sub> = (4&pi;<sup>2</sup> &times; L) / (T<sub>moon</sub><sup>2</sup>)
              <br>
              g<sub>moon</sub> = (4&pi;<sup>2</sup> &times; 1 m) / (4.90<sup>2</sup>) 
              <br>
              g<sub>moon</sub> &approx; 1.63 m/s²
            `
          },
          {
            no: "5",
            question: "A particle executing simple harmonic motion has an angular frequency of 6.28 s<sup>−1</sup> and amplitude 10 cm. Find (a) the time period, (b) the maximum speed, (c) the maximum acceleration, (d) the speed when the displacement is 6 cm from the mean position, (e) the speed at t = 1/6 s assuming that the motion starts from rest at t = 0.",
            options: [
              "(a) 1 s, (b) 0.628 m/s, (c) 4 m/s², (d) 50.2 cm/s, (e) −54.4 cm/s",
              "(a) 1.5 s, (b) 0.8 m/s, (c) 5 m/s², (d) 60 cm/s, (e) −60 cm/s",
              "(a) 2 s, (b) 1.2 m/s, (c) 2.5 m/s², (d) 45 cm/s, (e) −45 cm/s",
              "(a) 0.5 s, (b) 0.9 m/s, (c) 6 m/s², (d) 40 cm/s, (e) −40 cm/s"
            ],
            correct: "(a) 1 s, (b) 0.628 m/s, (c) 4 m/s², (d) 50.2 cm/s, (e) −54.4 cm/s",
            explain: `
              <b>Step 1: Calculate the time period</b>
              <br>
              The time period (T) is given by:
              <br>
              T = 2&pi;/&omega; <br>= 2&pi;/6.28 s<sup>−1</sup> <br>= 1 s.
              <br><br>
              <b>Step 2: Calculate the maximum speed</b>
              <br>
              Maximum speed (v<sub>max</sub>) is given by:
              <br>
              v<sub>max</sub> = A&omega; <br>= (0.1 m) &times; (6.28 s<sup>−1</sup>)<br> = 0.628 m/s.
              <br><br>
              <b>Step 3: Calculate the maximum acceleration</b>
              <br>
              Maximum acceleration (a<sub>max</sub>) is given by:
              <br>
              a<sub>max</sub> = A&omega;<sup>2</sup><br> = (0.1 m) &times; (6.28 s<sup>−1</sup>)<sup>2</sup><br> = 4 m/s².
              <br><br>
              <b>Step 4: Calculate the speed at displacement of 6 cm</b>
              <br>
              Speed (v) when displacement (x) = 6 cm:
              <br>
              v = &omega;&radic;(A<sup>2</sup> − x<sup>2</sup>)<br> = (6.28 s<sup>−1</sup>) &radic;[(10 cm)<sup>2</sup> − (6 cm)<sup>2</sup>] 
              <br>
              v = 50.2 cm/s.
              <br><br>
              <b>Step 5: Calculate the speed at t = 1/6 s</b>
              <br>
              Displacement at time t = 1/6 s:
              <br>
              x = A cos(&omega;t) 
              <br>
              Velocity (v) is given by:
              <br>
              v = −A&omega; sin(&omega;t)
              <br>
              v = (−0.628 m/s) sin(&pi;/3)
              <br>
              v &approx; −54.4 cm/s.
            `
          },
          {
            question: "A pendulum clock keeping correct time is taken to high altitudes:",
            options: [
                "it will keep correct time",
                "its length should be increased to keep correct time",
                "its length should be decreased to keep correct time",
                "it cannot keep correct time even if the length is changed"
            ],
            correct: "its length should be decreased to keep correct time",
            explain: "At high altitudes, the acceleration due to gravity (<i>g</i>) decreases. The time period of a pendulum is given by the formula:<br><br><code>T = 2π√(L/g)</code><br><br>where <i>T</i> is the time period, <i>L</i> is the length of the pendulum, and <i>g</i> is the acceleration due to gravity. To compensate for the decrease in <i>g</i> and maintain the same time period, the length <i>L</i> of the pendulum should be decreased."
        }
        
          
        

    ];

    const subjective = [
        {
            no: "1.",
            question: `The Energy of a system in Simple Harmonic Motion is given by E = 1/2 M ω<sup>2</sup> a<sup>2</sup>. Which of the following two statements is more appropriate?<br><br>
            A) Amplitude of the system increases with an increase in energy<br>
            B) Energy of the system increases with an increase in amplitude`,
            answer: `B) Energy of the system increases with an increase in amplitude.<br><br>
            Explanation: According to the formula E = 1/2 M ω<sup>2</sup> a<sup>2</sup>, the energy of the system is directly proportional to the square of the amplitude (a<sup>2</sup>). Therefore, as the amplitude increases, the energy of the system increases accordingly.`
        },
        {
            no: "2.",
            question: "A pendulum clock gives correct time at the equator. Will it gain time or lose time as it is taken to the poles?",
            answer: "A pendulum clock will gain time as it is taken to the poles.<br><br>This happens because the acceleration due to gravity (g) is greater at the poles than at the equator. The time period of a pendulum is given by:<br>T = 2π √(L/g), where L is the length of the pendulum.<br><br>As g increases, the time period T decreases. Since the clock is regulated by the time period of the pendulum, the clock will run faster (i.e., it will gain time) as g increases.<br><br>For example, if g<sub>equator</sub> = 9.78 m/s<sup>2</sup> and g<sub>pole</sub> = 9.83 m/s<sup>2</sup>, the clock will gain approximately 43 seconds per day when moved from the equator to the poles."
          },
          {
            no: "3.",
            question: "A platoon of soldiers marches on a road in steps according to the sound of a marching band. The band is stopped and the soldiers are ordered to break the steps while crossing a bridge. Why?",
            answer: "The soldiers are ordered to break steps while crossing a bridge to avoid the possibility of resonance. <br><br>Resonance occurs when the frequency of the soldiers' steps matches the natural frequency of the bridge, which can cause the amplitude of oscillations in the bridge to increase dramatically. <br><br>This can lead to structural damage or even the collapse of the bridge. By breaking step, the soldiers ensure that their collective frequency does not match the bridge's natural frequency, thereby preventing resonance."
          },
          
          
          
    ]


    return (
        <React.Fragment>
            <QuestDisplay title="Physics -Simple Harmonic Motion" question={questionArray} subjective={subjective} sub="Physics" />
        </React.Fragment>
    )
}

export default SimpleHarmonicMotion
