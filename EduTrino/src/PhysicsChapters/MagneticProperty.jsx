import React from 'react'
import QuestDisplay from '../components/QuestDisplay'


const MagneticProperty = () => {

  const questionArray = [
    {
      "question": "Identify the expression for magnetic induction from the following.",
      "explain": "The correct expression for magnetic induction is:<br><br>B = μ<sub>0</sub>(H + I)<br><br>where B is the magnetic induction, H is the magnetic field strength, I is the magnetization, and μ<sub>0</sub> is the permeability of free space.",
      "options": [
        "B = μ<sub>0</sub>(H+I)",
        "B = μ<sub>0</sub>(H×I)",
        "B = μ<sub>0</sub>(H-I)",
        "B = μ<sub>0</sub>(HI)"
      ],
      "correct": "B = μ<sub>0</sub>(H+I)"
    },
    {
      "question": "The relative permeability of a medium is 500. What is its magnetic susceptibility?",
      "explain": "Given:<br><br>Relative permeability (μ<sub>r</sub>) = 500<br><br>The equation relating relative permeability and magnetic susceptibility is:<br><br>μ<sub>r</sub> = 1 + χ<sub>m</sub><br><br>Where χ<sub>m</sub> is the magnetic susceptibility.<br><br>Therefore:<br><br>χ<sub>m</sub> = μ<sub>r</sub> - 1<br><br>χ<sub>m</sub> = 500 - 1<br><br>χ<sub>m</sub> = 499<br><br>Thus, the magnetic susceptibility is 499.",
      "options": [
        "500",
        "501",
        "49.9",
        "499"
      ],
      "correct": "499"
    },
    {
      "question": "The magnetic susceptibility of a paramagnetic material at -80°C is 0.0085. What is its value at -180°C?",
      "explain": "According to Curie's Law, magnetic susceptibility (χ<sub>m</sub>) is inversely proportional to temperature (T).<br><br>Given:<br><br>χ<sub>m1</sub> = 0.0085<br><br>T<sub>1</sub> = -80°C = 193 K<br><br>T<sub>2</sub> = -180°C = 93 K<br><br>The relation is:<br><br>χ<sub>m2</sub> / χ<sub>m1</sub> = T<sub>1</sub> / T<sub>2</sub><br><br>χ<sub>m2</sub> / 0.0085 = 193 / 93<br><br>χ<sub>m2</sub> = (193 × 0.0085) / 93<br><br>χ<sub>m2</sub> ≈ 0.017<br><br>Therefore, the value of magnetic susceptibility at -180°C is approximately 0.017.",
      "options": [
        "0.015",
        "0.016",
        "0.017",
        "0.018"
      ],
      "correct": "0.017"
    },
    {
      "question": "A material has a permeability of 0.1 H/m when the magnetic intensity is 70 A/m. What will be the magnetic induction inside the material?",
      "explain": "Given:<br><br>Permeability (μ<sub>o</sub>) = 0.1 H/m<br><br>Magnetic intensity (H) = 70 A/m<br><br>To find the magnetic induction (B), we use the formula:<br><br>B = μ<sub>o</sub> × H<br><br>Substituting the given values:<br><br>B = 0.1 × 70<br><br>B = 7 T<br><br>Therefore, the magnetic induction inside the material is 7 T.",
      "options": [
        "7 T",
        "0.7 T",
        "70 T",
        "0.07 T"
      ],
      "correct": "7 T"
    },
    {
      "question": "Find the correct combination regarding relative permeability and magnetic susceptibility of a paramagnetic substance.",
      "explain": "For a paramagnetic substance, the relative permeability (μ<sub>r</sub>) is greater than 1, and the magnetic susceptibility (χ) is positive. This is because paramagnetic materials have a tendency to enhance the external magnetic field, which results in a positive susceptibility and a relative permeability greater than 1.",
      "options": [
          "μ<sub>r</sub> > 1, χ < 0",
          "μ<sub>r</sub> < 1, χ > 0",
          "μ<sub>r</sub> < 1, χ < 0",
          "μ<sub>r</sub> > 1, χ > 0"
      ],
      "correct": "μ<sub>r</sub> > 1, χ > 0"
  },
  {
    "question": "The capacity of a material to hold on or resist magnetization is known as ______.",
    "options": [
        "Anti Magnetism",
        "Retentivity",
        "Coercivity",
        "None of the options"
    ],
    "correct": "Retentivity",
    "explain": "Retentivity is the property of a material that describes its ability to retain a certain amount of residual magnetization even after the external magnetic field is removed."
},


  ];

  const subjective = [
    {
      no: "1",
      question: "Define ferromagnetic substances. List three properties.",
      answer: `
        **Ferromagnetic substances** are materials that exhibit strong magnetic properties due to the alignment of their magnetic moments in the same direction.
        <br><br>
        Properties:
        <br>
        1. They have a large and positive magnetic susceptibility.
        <br>
        2. They retain their magnetization even after the external magnetic field is removed (hysteresis).
        <br>
        3. They exhibit strong attraction towards magnets and can be permanently magnetized.
      `
    },
    {
      no: "2",
      question: "Define paramagnetic substances. List three properties.",
      answer: `
        **Paramagnetic substances** are materials that are weakly attracted by an external magnetic field and do not retain the magnetization when the external field is removed.
        <br><br>
        Properties:
        <br>
        1. They have a small and positive magnetic susceptibility.
        <br>
        2. They do not exhibit hysteresis, meaning they do not retain magnetization after the removal of the external magnetic field.
        <br>
        3. The magnetic alignment of atoms occurs only in the presence of an external magnetic field.
      `
    },
    {
      no: "3",
      question: "Define diamagnetic substances. List three properties.",
      answer: `
        **Diamagnetic substances** are materials that are weakly repelled by a magnetic field and cannot be permanently magnetized.
        <br><br>
        Properties:
        <br>
        1. They have a small and negative magnetic susceptibility.
        <br>
        2. They do not retain magnetization and are repelled by both poles of a magnet.
        <br>
        3. The magnetic moments of atoms in diamagnetic substances are aligned opposite to the direction of the external magnetic field.
      `
    },
    

  ];

  return (
    <React.Fragment>
      <QuestDisplay title="Physics - Magnetic Properties of Materials" question={questionArray} subjective={subjective} sub="Physics" />
    </React.Fragment>
  )
}

export default MagneticProperty
