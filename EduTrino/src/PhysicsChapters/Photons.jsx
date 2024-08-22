import React from 'react'
import QuestDisplay from '../components/QuestDisplay';

const Photons = () => {

    const questionArray = [
        {
            "question": "Which of the following factors primarily determines the work function of a metal?",
            "explain": "The work function of a metal is the minimum energy required to remove an electron from the surface of the metal. It depends on the nature of the metal and its electronic structure.",
            "options": [
              "The metal's density",
              "The metal's temperature",
              "The metal's electronic structure",
              "The wavelength of incident light"
            ],
            "correct": "The metal's electronic structure"
          },
          {
            "question": "In the photoelectric effect, increasing the intensity of the incident light while keeping the frequency constant will:",
            "explain": "In the photoelectric effect, increasing the intensity of the incident light increases the number of photons hitting the metal surface, thereby increasing the number of emitted electrons but not their kinetic energy.",
            "options": [
              "Increase the kinetic energy of emitted electrons",
              "Increase the number of emitted electrons",
              "Decrease the work function of the metal",
              "Increase the threshold frequency"
            ],
            "correct": "Increase the number of emitted electrons"
          },
          {
            "question": "Einstein's photoelectric equation is given by Ek = hv - φ. What does the term hv represent?",
            "explain": "In Einstein's photoelectric equation, hv represents the energy of the incident photon, where h is Planck's constant and v is the frequency of the incident light.",
            "options": [
              "The energy of the emitted electron",
              "The work function of the metal",
              "The energy of the incident photon",
              "The threshold frequency of the metal"
            ],
            "correct": "The energy of the incident photon"
          },
          {
            "question": "Millikan's experiment for verifying Einstein's photoelectric equation involved measuring the stopping potential. What does the stopping potential measure?",
            "explain": "The stopping potential is the potential difference needed to stop the most energetic photoelectrons from reaching the anode. It provides a measure of the maximum kinetic energy of the emitted electrons.",
            "options": [
              "The work function of the metal",
              "The threshold frequency of the light",
              "The kinetic energy of the most energetic electrons",
              "The wavelength of the incident light"
            ],
            "correct": "The kinetic energy of the most energetic electrons"
          },
          {
            "question": "The work function of potassium is 2.30 eV. UV light of wavelength 3000 Å and intensity 2 W/m² is incident on the potassium surface. Determine the maximum kinetic energy of the photoelectrons.",
            "explain": "To determine the maximum kinetic energy of the photoelectrons, first, calculate the energy of the incident photons using the wavelength of the UV light. The energy (E) of a photon is given by the formula: <br>E = hc / λ <br>where <br>h = 6.626 × 10<sup>-34</sup> J·s (Planck's constant) <br>c = 3 × 10<sup>8</sup> m/s (speed of light) <br>λ = 3000 × 10<sup>-10</sup> m (wavelength) <br>Substitute these values to find the energy in Joules, then convert this energy to electron volts (eV) by dividing by 1.6 × 10<sup>-19</sup> J/eV. <br>Subtract the work function (φ<sub>0</sub>) of potassium from this photon energy to get the maximum kinetic energy of the photoelectrons: <br>K<sub>max</sub> = E - φ<sub>0</sub>. <br>Thus, K<sub>max</sub> = 4.14 eV - 2.30 eV = 1.84 eV.",
            "options": [
              "1.84 eV",
              "0.84 eV",
              "2.14 eV",
              "3.14 eV"
            ],
            "correct": "1.84 eV"
          },
          {
            "question": "Radiation of wavelength 3000 Å falls on a photoelectric surface for which the work function is 1.6 eV. What is the stopping potential for the emitted electron?",
            "explain": "To find the stopping potential, use Einstein's photoelectric equation. The maximum kinetic energy (K.E.<sub>max</sub>) of the emitted electrons is given by: <br>K.E.<sub>max</sub> = hν - Φ <br>where <br>ν (frequency) = c / λ <br>h = 6.63 × 10<sup>-34</sup> Js (Planck's constant) <br>c = 3 × 10<sup>8</sup> m/s (speed of light) <br>λ = 3000 × 10<sup>-10</sup> m (wavelength) <br>Φ = 1.6 eV = 1.6 × 1.6 × 10<sup>-19</sup> J (work function) <br>First, convert the work function into Joules and calculate the photon energy using E = hc / λ. Then, use the photoelectric equation to find the stopping potential (V<sub>s</sub>): <br>eV<sub>s</sub> = hc / λ - Φ <br>Substitute the values: <br>(1.6 × 10<sup>-19</sup>) × V<sub>s</sub> = (6.63 × 10<sup>-34</sup> × 3 × 10<sup>8</sup>) / (3000 × 10<sup>-10</sup>) - 2.56 × 10<sup>-19</sup> <br>V<sub>s</sub> = 2.54 V",
            "options": [
              "1.54 V",
              "2.00 V",
              "2.54 V",
              "3.00 V"
            ],
            "correct": "2.54 V"
          },

    ];

    const subjective = [
        {
            no: "1",
            question: "Why does the photoelectric effect provide evidence for the particle nature of light?",
            answer: `
              The photoelectric effect provides evidence for the particle nature of light because it demonstrates that light consists of discrete packets of energy called photons. According to this effect, when light of a certain frequency hits a metal surface, it ejects electrons from the surface. If the frequency of the light is below a certain threshold, no electrons are ejected regardless of the intensity of the light. This supports the idea that energy is transferred in quantized packets (photons) rather than continuously, which aligns with the particle theory of light.
            `
          },
          {
            no: "2",
            question: "Explain why the stopping potential in the photoelectric effect is independent of the intensity of the incident light.",
            answer: `
              The stopping potential in the photoelectric effect is independent of the intensity of the incident light because it is determined solely by the energy of the individual photons, which is related to the frequency of the light. The stopping potential is required to stop the most energetic photoelectrons, which are ejected when photons with sufficient energy strike the metal. The intensity of light affects the number of photons (and hence the number of ejected electrons), but not their energy or the stopping potential needed to halt the most energetic electrons.
            `
          },
          {
            no: "3",
            question: "Why is it necessary for light to have a minimum frequency to cause the photoelectric effect?",
            answer: `
              It is necessary for light to have a minimum frequency to cause the photoelectric effect because the energy of the photons must be sufficient to overcome the work function of the metal. The work function is the minimum energy required to eject an electron from the metal surface. If the frequency of the incident light is below this threshold, the energy of the photons is insufficient to overcome the work function, and no electrons will be ejected. This threshold frequency is a direct result of the quantized nature of photon energy.
            `
          },
          {
            no: "4",
            question: "How does the photoelectric effect support the concept of quantized energy levels?",
            answer: `
              The photoelectric effect supports the concept of quantized energy levels by showing that electrons are ejected from a metal surface only when the incident light has photons with energy equal to or greater than the work function of the metal. This demonstrates that the energy of photons is quantized, as the electron ejection occurs in discrete steps depending on whether the photon energy meets the threshold. This quantization of energy supports the idea that energy levels in atoms or materials are also discrete.
            `
          },
          {
            no: "5",
            question: "Why does increasing the frequency of incident light increase the kinetic energy of emitted electrons but not their number?",
            answer: `
              Increasing the frequency of the incident light increases the kinetic energy of the emitted electrons because higher frequency photons have greater energy. According to the photoelectric equation, the energy of the incident photons is divided into two parts: the work function of the metal and the kinetic energy of the emitted electrons. Therefore, as the frequency increases, the excess energy beyond the work function is converted into greater kinetic energy for the electrons. However, the number of emitted electrons depends on the intensity of the light, not its frequency, so increasing the frequency alone does not affect the number of electrons emitted.
            `
          },

    ];

    return (
        <React.Fragment>
            <QuestDisplay title="Physics - Photons" question={questionArray} subjective={subjective} sub="Physics" />
        </React.Fragment>
    )
}

export default Photons
