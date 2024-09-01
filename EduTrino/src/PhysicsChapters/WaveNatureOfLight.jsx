import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const WaveNatureOfLight = () => {

    const questionArray = [
        {
            "question": "When a light wave enters into a medium of different optical density,",
            "explain": "When a light wave passes from one medium to another with a different optical density, its speed and wavelength change, but its frequency remains constant. The change in speed is due to the difference in the optical properties of the media, and the wavelength adjusts accordingly to maintain the constant frequency.",
            "options": [
                "A. Its speed and frequency change.",
                "B. Its speed and wavelength change.",
                "C. Its frequency and wavelength change.",
                "D. Its speed, frequency, and wavelength change."
            ],
            "correct": "B. Its speed and wavelength change."
        },
        {
            "question": "When a beam of light (wavelength = 590 nm), originally traveling in air, enters a piece of glass (index of refraction 1.50), its frequency",
            "explain": "When light enters a medium with a higher index of refraction, such as glass, its speed decreases and its wavelength shortens. However, the frequency of the light remains unchanged because frequency is determined by the source of the light and is independent of the medium.",
            "options": [
                "A. Increases by a factor of 1.50.",
                "B. Is reduced to 2/3 its original value.",
                "C. Is unaffected.",
                "D. None of the given answers"
            ],
            "correct": "C. Is unaffected."
        },
        {
            "question": "When a beam of light (wavelength = 590 nm), originally traveling in air, enters a piece of glass (index of refraction 1.50), its wavelength",
            "explain": "When light enters a medium with a higher index of refraction, its speed decreases. The wavelength of light is directly proportional to the speed, so as the speed decreases, the wavelength also decreases. The wavelength in the glass is given by: <br> λ = λ₀ / n <br> where λ₀ is the original wavelength (590 nm) and n is the index of refraction (1.50). <br> Therefore, λ = 590 nm / 1.50 = 393.33 nm, which is 2/3 of its original value.",
            "options": [
                "Increases by a factor of 1.50.",
                "Is reduced to 2/3 its original value.",
                "Is unaffected.",
                "None of the given answers"
            ],
            "correct": "Is reduced to 2/3 its original value."
        },
        {
            "question": "At the first maxima on either side of the central bright spot in a double-slit experiment, light from each opening arrives",
            "explain": "In a double-slit experiment, the first maxima on either side of the central bright spot occurs when the light from the two slits interferes constructively. For constructive interference to occur, the light waves must arrive in phase or with a phase difference that is an integer multiple of 2π (which corresponds to 0° or 360°). Therefore, at the first maxima, the light from each slit arrives in phase.",
            "options": [
                "In phase.",
                "90° out of phase.",
                "180° out of phase.",
                "None of the given answers"
            ],
            "correct": "In phase."
        },
        {
            "question": "Two lights of wavelengths 560 nm and 420 nm are used in Young's double slit experiment. Find the least distance from the central fringe where the bright fringe of the two wavelengths coincides. Given D = 1 m and d = 3 mm.",
            "explain": "Given:<br> λ₁ = 560 nm = 560 × 10<sup>-9</sup> m,<br> λ₂ = 420 nm = 420 × 10<sup>-9</sup> m,<br> D = 1 m,<br> d = 3 mm = 3 × 10<sup>-3</sup> m.<br><br>For a given position <i>y</i>, the order of the fringe <i>n</i> and the wavelength <i>λ</i> are inversely proportional.<br>Let the <i>n</i>th order bright fringe of λ₁ coincide with the (<i>n</i> + 1)th order bright fringe of λ₂.<br><br>The equation for the <i>n</i>th bright fringe is given by:<br><i>y</i><sub>n</sub> = (n × λ₁ × D) / d.<br><br>For the two wavelengths to coincide at <i>y</i>, we have:<br>n × λ₁ = (n + 1) × λ₂.<br><br>Substituting the values:<br>n × 560 × 10<sup>-9</sup> m = (n + 1) × 420 × 10<sup>-9</sup> m.<br><br>Solving for <i>n</i>:<br>560<i>n</i> = 420<i>n</i> + 420.<br>140<i>n</i> = 420.<br><i>n</i> = 3.<br><br>The least distance from the central fringe where the bright fringes of the two wavelengths coincide is:<br><i>y</i><sub>n</sub> = 3 × [(560 × 10<sup>-9</sup> m × 1 m) / (3 × 10<sup>-3</sup> m)] = 0.560 m.",
            "options": [
                "0.28 m",
                "0.42 m",
                "0.56 m",
                "0.84 m"
            ],
            "correct": "0.56 m"
        },
        {
            "question": "Light of wavelength 500 nm passes through a slit of 0.2 mm wide. The diffraction pattern is observed on a screen 60 cm away. Determine the:<br><br>(i) angular spread of the central maximum<br>(ii) the distance between the central maximum and the second minimum.",
            "explain": "Given:<br> λ = 500 nm = 500 × 10<sup>-9</sup> m,<br> d = 0.2 mm = 0.2 × 10<sup>-3</sup> m,<br> D = 60 cm = 60 × 10<sup>-2</sup> m.<br><br>(i) The angular spread of the central maximum is up to the first minimum. The position of the first minimum is given by:<br> d sin θ = λ<br> For small angles, sin θ ≈ θ, so:<br> θ = λ / d<br> Substituting the values:<br> θ = (500 × 10<sup>-9</sup> m) / (0.2 × 10<sup>-3</sup> m) = 2.5 × 10<sup>-3</sup> radians.<br><br>(ii) To find the distance y₁ from the central maximum to the first minimum:<br> y₁ = D × tan θ<br> As θ is small, tan θ ≈ sin θ:<br> y₁ = D × sin θ<br> Substituting the values:<br> y₁ = (60 × 10<sup>-2</sup> m) × (2.5 × 10<sup>-3</sup>) = 1.5 × 10<sup>-4</sup> m = 1.5 mm.<br><br> To find the distance y₂ from the central maximum to the second minimum (where n = 2):<br> y₂ = D × (2 × sin θ)<br> Substituting the values:<br> y₂ = (60 × 10<sup>-2</sup> m) × (2 × 2.5 × 10<sup>-3</sup>) = 3 × 10<sup>-3</sup> m = 3 mm.<br><br>The distance between the central maximum and the second minimum is:<br> y₂ - y₁ = 3 mm - 1.5 mm = 1.5 mm.",
            "options": [
                "1.0 mm",
                "1.5 mm",
                "2.0 mm",
                "2.5 mm"
            ],
            "correct": "1.5 mm"
        },

    ];

    const subjective = [
        {
            no: "1",
            question: "Radio waves are diffracted by large objects such as buildings, whereas light is not noticeably diffracted. Why is this?",
            answer: "Radio waves have a much longer wavelength compared to light waves. The larger wavelength allows radio waves to bend around obstacles like buildings, whereas the shorter wavelength of light does not allow for noticeable diffraction around such large objects."
          },

    ];

  return (
    <React.Fragment>
    <QuestDisplay title = "Physics - Wave Nature of Light" question = {questionArray} subjective = {subjective} sub = "Physics" />
</React.Fragment>
  )
}

export default WaveNatureOfLight
