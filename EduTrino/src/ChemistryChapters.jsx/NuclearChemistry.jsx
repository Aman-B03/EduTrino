import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const NuclearChemistry = () => {

    const questArray = [
        {
            "question": "Which of the following is a common unit used to measure radioactivity?",
            "explain": "Radioactivity is commonly measured in becquerels (Bq), which represents one disintegration per second.",
            "options": [
              "Coulomb",
              "Becquerel",
              "Joule",
              "Hertz"
            ],
            "correct": "Becquerel"
          },
          {
            "question": "What is the primary difference between natural and artificial radioactivity?",
            "explain": "Natural radioactivity occurs spontaneously in nature, while artificial radioactivity is induced by human activities, such as in nuclear reactors or particle accelerators.",
            "options": [
              "Natural radioactivity occurs only in living organisms.",
              "Artificial radioactivity cannot be controlled.",
              "Natural radioactivity occurs spontaneously, while artificial radioactivity is induced.",
              "Artificial radioactivity is safer than natural radioactivity."
            ],
            "correct": "Natural radioactivity occurs spontaneously, while artificial radioactivity is induced."
          },
          {
            "question": "Which of the following statements is true about nuclear fission?",
            "explain": "Nuclear fission is the process where a heavy nucleus splits into two lighter nuclei, releasing a significant amount of energy.",
            "options": [
              "Fission occurs when light nuclei combine to form a heavier nucleus.",
              "Fission releases less energy than fusion.",
              "Fission occurs in the sun's core.",
              "Fission involves the splitting of a heavy nucleus."
            ],
            "correct": "Fission involves the splitting of a heavy nucleus."
          },
          {
            "question": "Which isotope is commonly used in radiocarbon dating?",
            "explain": "Carbon-14 is a radioactive isotope of carbon used in radiocarbon dating to determine the age of archaeological and geological samples.",
            "options": [
              "Carbon-12",
              "Carbon-13",
              "Carbon-14",
              "Carbon-15"
            ],
            "correct": "Carbon-14"
          },
          {
            "question": "Which of the following is a major harmful effect of nuclear radiation on living organisms?",
            "explain": "Nuclear radiation can cause mutations in DNA, leading to cancer and other genetic disorders.",
            "options": [
              "Increased IQ levels",
              "Enhanced immune system",
              "DNA mutations leading to cancer",
              "Improved cardiovascular health"
            ],
            "correct": "DNA mutations leading to cancer"
          },
          {
            "question": "Which reaction powers the energy output of the sun?",
            "explain": "The sun's energy is produced by nuclear fusion, where hydrogen nuclei combine to form helium, releasing vast amounts of energy.",
            "options": [
              "Nuclear fission of uranium",
              "Nuclear fusion of hydrogen",
              "Chemical combustion of hydrogen",
              "Radioactive decay of carbon"
            ],
            "correct": "Nuclear fusion of hydrogen"
          },
          {
            "question": "What is the role of control rods in a nuclear reactor?",
            "explain": "Control rods in a nuclear reactor absorb neutrons, thereby regulating the fission reaction and maintaining a stable energy output.",
            "options": [
              "Increase the rate of fission",
              "Absorb excess neutrons to control the fission reaction",
              "Cool down the reactor core",
              "Produce electricity directly"
            ],
            "correct": "Absorb excess neutrons to control the fission reaction"
          },
          {
            "question": "Which of the following is a medical use of radioactivity?",
            "explain": "Radioactive isotopes like iodine-131 are used in medical imaging and treatments, particularly for thyroid disorders.",
            "options": [
              "Treatment of diabetes",
              "Cancer diagnosis and treatment",
              "Curing bacterial infections",
              "Treating viral infections"
            ],
            "correct": "Cancer diagnosis and treatment"
          },
          {
            "question": "Which nuclear reaction is primarily used in nuclear power plants to generate electricity?",
            "explain": "Nuclear power plants primarily use nuclear fission reactions, where uranium-235 nuclei are split to produce energy.",
            "options": [
              "Nuclear fusion of deuterium",
              "Nuclear fission of uranium-235",
              "Combustion of coal",
              "Fusion of hydrogen isotopes"
            ],
            "correct": "Nuclear fission of uranium-235"
          },
          {
            "question": "Why is radiocarbon dating not suitable for dating objects older than about 50,000 years?",
            "explain": "Radiocarbon dating is limited by the half-life of carbon-14, which is about 5,730 years. After around 50,000 years, too little carbon-14 remains to be measured accurately.",
            "options": [
              "Carbon-14 decays too quickly beyond this period.",
              "Carbon-12 overtakes the signal after this period.",
              "Too little carbon-14 remains for accurate measurement.",
              "Other isotopes interfere after this period."
            ],
            "correct": "Too little carbon-14 remains for accurate measurement."
          }
    ];

    const subjective = [
        {
            "no": "1",
            "question": "Can carbon dating be used in humans?",
            "answer": "Yes, carbon-14 dating can be used on human remains to help forensic scientists determine the age and year of death by measuring carbon-14 levels in tissues."
          },
          {
            "no": "2",
            "question": "Is carbon-14 toxic to humans?",
            "answer": "No, carbon-14 is not toxic to humans. Even in large amounts, the radiation from carbon-14 does not penetrate beyond the outer layer of skin, posing no significant risk."
          },
          {
            "no": "3",
            "question": "What is the basic principle of the carbon dating method?",
            "answer": "Carbon dating relies on the radioactive decay of carbon-14 (C-14), an unstable isotope formed when cosmic rays convert nitrogen-14 (N-14) into carbon-14 in the atmosphere:<br><br>N<sub>7</sub><sup>14</sup> + n → C<sub>6</sub><sup>14</sup> + H<sub>1</sub><sup>1</sup><br><br>Living organisms absorb C-14, and after death, its level decreases with a half-life of about 5730 years. The remaining C-14 in a sample can be measured to estimate the age of the sample."
          },
          {
            "no": "4",
            "question": "List the radioactive isotopes used for medical purposes.",
            "answer": "Several radioactive isotopes are commonly used in medicine for diagnosis and treatment, including:<br><br>- **Technetium-99m (Tc-99m):** Used in various imaging procedures, including bone scans and cardiac imaging.<br>- **Iodine-131 (I-131):** Used in the treatment of thyroid disorders, including hyperthyroidism and thyroid cancer.<br>- **Cobalt-60 (Co-60):** Used in radiation therapy to treat cancer.<br>- **Fluorine-18 (F-18):** Used in positron emission tomography (PET) scans to detect metabolic activity in tissues."
          }
    ];

  return (
    <div>
      <QuestDisplay sub="Chemistry" title="Chemistry -Nuclear Chemistry and Applications of Radioactivity" subjective={subjective} question={questArray} />
    </div>
  )
}

export default NuclearChemistry
