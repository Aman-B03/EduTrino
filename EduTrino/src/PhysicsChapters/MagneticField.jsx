import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const MagneticField = () => {

    const questionArray = [

        {
            "question": "What is the SI unit of the magnetic field?",
            "explain": "The SI unit for the magnetic field is the Tesla. It measures the strength of the magnetic field.",
            "options": [
              "a) Candela",
              "b) Tesla",
              "c) Weber",
              "d) Ampere"
            ],
            "correct": "b) Tesla"
          },
          {
            "question": "When a stationary charge is placed in a magnetic field, what will be the force exerted by it?",
            "explain": "A stationary charge in a magnetic field experiences no force because the force on a charged particle in a magnetic field is given by the Lorentz force law, which depends on the velocity of the charge. If the charge is stationary, the velocity is zero, and hence the force is zero.",
            "options": [
              "a) Zero",
              "b) Maximum",
              "c) Minimum",
              "d) None of these"
            ],
            "correct": "a) Zero"
          },
          {
            "question": "The magnetic field outside a solenoid will be _____",
            "explain": "The magnetic field outside an ideal solenoid is effectively zero because the field lines are concentrated inside the solenoid, creating a strong, uniform field within and negligible field outside. This ideal condition assumes an infinitely long solenoid with no field leakage.",
            "options": [
              "a) Double the value of the field inside",
              "b) Infinity",
              "c) Triple the value of the field inside",
              "d) Zero"
            ],
            "correct": "d) Zero"
          },
          {
            "question": "Consider a 100 turn coil of radius 10 cm carrying a current of 1 A. Find the magnitude of the magnetic field.",
            "explain": "Given:<br>Radius, R = 10 cm = 0.1 m<br>Number of turns, N = 100<br>Current, I = 1 A<br>Using the formula for the magnetic field at the center of a coil, B = (μ₀NI) / (2R), where μ₀ (the permeability of free space) = 4π × 10<sup>-7</sup> H/m:<br>B = (4π × 10<sup>-7</sup> × 100 × 1) / (2 × 0.1)<br>B = (4π × 10<sup>-5</sup>) / 0.2<br>B = 2π × 10<sup>-4</sup><br>B = 6.28 × 10<sup>-4</sup> T",
            "options": [
              "6.28 × 10<sup>-4</sup> T",
              "1.256 × 10<sup>-3</sup> T",
              "2.0 × 10<sup>-4</sup> T",
              "3.14 × 10<sup>-4</sup> T"
            ],
            "correct": "6.28 × 10<sup>-4</sup> T"
          },
          {
          "question": "Calculate the magnetic field at point P located on the axis at a distance of 10 cm from the center of a circular wire of radius 5 cm carrying a current of 5 A.",
          "explain": "Given:<br>Radius of the circular wire, a = 5 cm = 0.05 m<br>Current, I = 5 A<br>Distance from the center to point P, x = 10 cm = 0.1 m<br>Number of turns, N = 1 (assumed)<br>The formula for the magnetic field on the axis of a circular loop is:<br>B = (μ₀ N I a<sup>2</sup>) / [2 (a<sup>2</sup> + x<sup>2</sup>)<sup>3/2</sup>]<br>where μ₀ (the permeability of free space) = 4π × 10<sup>-7</sup> H/m<br>Substituting the values:<br>B = (4π × 10<sup>-7</sup> × 1 × 5 × (0.05)<sup>2</sup>) / [2 × ((0.05)<sup>2</sup> + (0.1)<sup>2</sup>)<sup>3/2</sup>]<br>B = (4π × 10<sup>-7</sup> × 5 × 0.0025) / [2 × (0.0025 + 0.01)<sup>3/2</sup>]<br>B = (2π × 10<sup>-6</sup>) / [2 × 0.00035]<br>B ≈ 5.72 × 10<sup>-7</sup> T",
          "options": [
            "5.72 × 10<sup>-7</sup> T",
            "7.2 × 10<sup>-7</sup> T",
            "4.5 × 10<sup>-7</sup> T",
            "6.0 × 10<sup>-7</sup> T"
          ],
          "correct": "5.72 × 10<sup>-7</sup> T"
        },
        {
            "question": "Find the magnetic field at a distance of 20 cm from a long, straight wire carrying a current of 10 A.",
            "explain": "Given:<br>Current, I = 10 A<br>Distance, r = 20 cm = 0.2 m<br>Magnetic field B = ?<br>We use the formula for the magnetic field around a long, straight wire:<br>B = (μ₀ I) / (2π r)<br>where μ₀ (the permeability of free space) = 4π × 10<sup>-7</sup> H/m<br>Substitute the given values:<br>B = (4π × 10<sup>-7</sup> × 10) / (2π × 0.2)<br>B = (4 × 10<sup>-7</sup> × 10) / (2 × 0.2)<br>B = (4 × 10<sup>-6</sup>) / 0.4<br>B = 10<sup>-5</sup> T",
            "options": [
              "1 × 10<sup>-5</sup> T",
              "2 × 10<sup>-5</sup> T",
              "3 × 10<sup>-5</sup> T",
              "4 × 10<sup>-5</sup> T"
            ],
            "correct": "1 × 10<sup>-5</sup> T"
          },
          



    ];

    const subjective = [

    ];

  return (
    <React.Fragment>
    <QuestDisplay title = "Physics - Magnetic field" question = {questionArray} subjective = {subjective} sub = "Physics" />
</React.Fragment>
  )
}

export default MagneticField
