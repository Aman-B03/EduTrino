import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Electrons = () => {
    const questionArray = [
        {
            "question": "If the wavelength of electromagnetic radiation is doubled, what will happen to the energy of photons?",
            "explain": "The energy of a photon is inversely proportional to its wavelength, as given by the equation E = hc/λ, where E is the energy, h is Planck's constant, c is the speed of light, and λ is the wavelength. If the wavelength is doubled, the energy of the photon will be halved.",
            "options": [
              "Remains the same",
              "Doubled",
              "Halved",
              "Infinite"
            ],
            "correct": "Halved"
          },
        {
            "question": "In Millikan's experiment, an oil drop of mass 4.9 × 10<sup>-14</sup> kg is balanced by applying a potential difference of 9.8 kV between the two plates which are 12.8 mm apart. Calculate the number of elementary charges on the drop. (Take g = 10 m/s²).",
            "explain": "Given:<br>Mass of the oil drop (m) = 4.9 × 10<sup>-14</sup> kg<br>Potential difference (V) = 9.8 kV = 9.8 × 10<sup>3</sup> V<br>Distance between the plates (d) = 12.8 mm = 12.8 × 10<sup>-3</sup> m<br>Gravitational acceleration (g) = 10 m/s²<br>Elementary charge (e) = 1.6 × 10<sup>-19</sup> C<br><br>The electric field (E) between the plates is given by:<br>E = V / d<br>E = (9.8 × 10<sup>3</sup>) / (12.8 × 10<sup>-3</sup>) = 7.656 × 10<sup>5</sup> V/m<br><br>The charge (q) on the drop is given by:<br>q = m × g / E<br>q = (4.9 × 10<sup>-14</sup> × 10) / (7.656 × 10<sup>5</sup>)<br>q = 6.4 × 10<sup>-19</sup> C<br><br>Since q = n × e, the number of elementary charges (n) is:<br>n = q / e<br>n = (6.4 × 10<sup>-19</sup>) / (1.6 × 10<sup>-19</sup>)<br>n = 4",
            "options": [
              "n = 2",
              "n = 4",
              "n = 6",
              "n = 8"
            ],
            "correct": "n = 4"
          },
          {
            "question": "In a Millikan's oil drop experiment, an oil drop of mass 0.64 × 10<sup>-14</sup> kg carrying a charge 1.6 × 10<sup>-19</sup> C remains stationary between two plates separated by a distance of 5 mm. What voltage must be applied between the plates? (Take g = 9.8 m/s²).",
            "explain": "Given:<br>Mass of the oil drop (m) = 0.64 × 10<sup>-14</sup> kg<br>Charge on the oil drop (q) = 1.6 × 10<sup>-19</sup> C<br>Distance between the plates (d) = 5 mm = 5 × 10<sup>-3</sup> m<br>Gravitational acceleration (g) = 9.8 m/s²<br><br>Since the oil drop is stationary, the force due to the electric field equals the weight of the oil drop:<br>Eq = mg<br>The electric field (E) is given by:<br>E = V/d<br>Thus, V/d × q = mg<br><br>V = (mgd) / q<br>V = (0.64 × 10<sup>-14</sup> × 9.8 × 5 × 10<sup>-3</sup>) / (1.6 × 10<sup>-19</sup>)<br>V = 200 × 9.8 = 1960 V",
            "options": [
              "1960 V",
              "980 V",
              "3920 V",
              "2880 V"
            ],
            "correct": "1960 V"
          },
          {
            "question": "An electron moving with a velocity of 5 × 10<sup>4</sup> m/s enters into a uniform electric field and acquires a uniform acceleration of 10<sup>4</sup> m/s² in the direction of its initial motion. Calculate the time in which the electron would acquire a velocity double of its initial velocity.",
            "explain": "Given:<br>Initial velocity of the electron (u) = 5 × 10<sup>4</sup> m/s<br>Acceleration (a) = 10<sup>4</sup> m/s²<br>Final velocity (v) = 2u = 2 × 5 × 10<sup>4</sup> m/s = 10 × 10<sup>4</sup> m/s<br><br>We know the equation of motion:<br>v = u + at<br>Substituting the given values:<br>10 × 10<sup>4</sup> = 5 × 10<sup>4</sup> + 10<sup>4</sup> × t<br><br>10 × 10<sup>4</sup> - 5 × 10<sup>4</sup> = 10<sup>4</sup> × t<br><br>t = (5 × 10<sup>4</sup>) / 10<sup>4</sup><br>t = 5 seconds<br><br>Thus, the time required for the electron to acquire double its initial velocity is 5 seconds.",
            "options": [
              "5 seconds",
              "10 seconds",
              "2.5 seconds",
              "7.5 seconds"
            ],
            "correct": "5 seconds"
          },
          {
            "question": "In Thomson’s experiment, an electron is accelerated from rest in an electric field through a potential difference of 100 V. It then enters normally into a magnetic field of induction 10<sup>-3</sup> Wb/m<sup>2</sup>. Find the radius of curvature of the path.",
            "explain": "Given:<br>Potential Difference (V) = 100 V<br>Magnetic Induction (B) = 10<sup>-3</sup> Wb/m<sup>2</sup><br>Charge to Mass Ratio (e/m) = 1.76 × 10<sup>11</sup> C/kg<br><br>To Find: Radius of curvature of the path (r)<br><br>Solution:<br>First, let's find the speed of the electron using the energy relation:<br>Kinetic Energy = eV<br><br>Since the electron is accelerated from rest, we can use the equation:<br>mv<sup>2</sup>/2 = eV<br><br>Solving for v:<br>v = √(2eV/m)<br><br>Substituting the values:<br>v = √(2 × 1.76 × 10<sup>11</sup> × 100)<br>v = √(3.52 × 10<sup>13</sup>)<br>v ≈ 5.93 × 10<sup>6</sup> m/s<br><br>Now, using the formula for the radius of curvature:<br>r = mv / (eB)<br><br>Substituting the known values:<br>r = (m × 5.93 × 10<sup>6</sup>) / (1.76 × 10<sup>11</sup> × 10<sup>-3</sup>)<br><br>r ≈ 3.37 × 10<sup>-2</sup> m<br>r ≈ 3.37 cm<br><br>Thus, the radius of curvature of the path is approximately 3.37 cm.",
            "options": [
              "1.5 cm",
              "2.2 cm",
              "3.37 cm",
              "4.5 cm"
            ],
            "correct": "3.37 cm"
          },
          {
            "question": "For a cathode ray discharge tube, which of the following conditions is appropriate?",
            "explain": "In a cathode ray discharge tube, high voltage is required to accelerate the electrons, and low pressure is needed to allow the electrons to travel without significant collisions with gas molecules. This combination allows the electrons to gain sufficient energy and produce visible light when they strike the tube's fluorescent material.",
            "options": [
              "High voltage, low pressure",
              "Low voltage and low pressure",
              "Low voltage, high pressure",
              "High voltage and high pressure"
            ],
            "correct": "High voltage, low pressure"
          },
        
    ];

    const subjective = [

    ];

    return (
        <React.Fragment>
            <QuestDisplay title="Physics - Electrons" question={questionArray} subjective={subjective} sub="Physics" />
        </React.Fragment>
    )
}

export default Electrons
