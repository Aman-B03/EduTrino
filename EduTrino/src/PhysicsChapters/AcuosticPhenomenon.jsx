import React from 'react'
import QuestDisplay from '../components/QuestDisplay';

const AcuosticPhenomenon = () => {

    const questionArray = [
        {
            question: "A car is approaching a cliff at a speed of 20 m/s. The driver sounds a whistle of frequency 800 Hz. What will be the frequency of the echo heard by the car driver? The velocity of sound in air is 350 m/s.",
            options: [
                "900 Hz",
                "800 Hz",
                "740 Hz",
                "720 Hz"
            ],
            correct: "900 Hz",
            explain: "Given: <br> Speed of the car, v<sub>c</sub> = 20 m/s <br> Frequency of the whistle, f = 800 Hz <br> Speed of sound in air, v = 350 m/s <br><br> When the car is approaching the cliff, the frequency of the sound heard by the cliff is: <br> f<sub>1</sub> = f × (v / (v - v<sub>c</sub>)) <br> = 800 Hz × (350 m/s / (350 m/s - 20 m/s)) <br> = 800 Hz × (350 / 330) <br> = 800 Hz × 1.0606 <br> = 848.48 Hz <br><br> The frequency of the echo heard by the car driver is the same frequency of the sound reflected back, so we use the same calculation considering the car is approaching the reflected sound as well: <br> f<sub>2</sub> = f<sub>1</sub> × (v / (v - v<sub>c</sub>)) <br> = 848.48 Hz × (350 / 330) <br> = 848.48 Hz × 1.0606 <br> = 900 Hz <br><br> Therefore, the frequency of the echo heard by the car driver is 900 Hz."
        },
        {
            question: "An ambulance car normally emits a sound wave of frequency 1500 Hz. A girl hears a 1560 Hz siren from such a car. How is the ambulance car moving? Take the speed of sound in air equal to 343 m/s.",
            options: [
                "At 13.2 m/s away from the girl",
                "At 13.2 m/s towards the girl",
                "At 13.7 m/s away from the girl",
                "At 13.7 m/s towards the girl"
            ],
            correct: "At 13.2 m/s towards the girl",
            explain: "Given: <br> Frequency of the ambulance siren, f<sub>0</sub> = 1500 Hz <br> Observed frequency, f<sub>1</sub> = 1560 Hz <br> Speed of sound in air, v = 343 m/s <br><br> Using the Doppler effect formula for sound when the source is moving towards the observer: <br> f<sub>1</sub> = f<sub>0</sub> × (v / (v - v<sub>s</sub>)) <br> Rearranging to solve for the speed of the source, v<sub>s</sub>: <br> v<sub>s</sub> = v × (1 - (f<sub>0</sub> / f<sub>1</sub>)) <br> = 343 × (1 - (1500 / 1560)) <br> = 343 × (1 - 0.9615) <br> = 343 × 0.0385 <br> = 13.2 m/s <br><br> Since the observed frequency is higher than the emitted frequency, the ambulance is moving towards the girl."
        }, 
        {
            "question": "Two identical airplanes are approaching each other at equal speeds. Each of them emits a sound of frequency equal to 2000 Hz when at rest. What is the flying speed of each airplane if pilots hear a 4000 Hz sound wave emitted by the other airplane? Take the speed of sound in air equal to 343 m/s.",
            "explain": "Given: <br> Frequency of the sound emitted by each airplane, f<sub>0</sub> = 2000 Hz <br> Observed frequency, f<sub>1</sub> = 4000 Hz <br> Speed of sound in air, v = 343 m/s <br><br> Using the Doppler effect formula for sound when both the source and observer are moving towards each other at equal speeds: <br> f<sub>1</sub> = f<sub>0</sub> × (v + v<sub>s</sub>) / (v - v<sub>s</sub>) <br> Given that f<sub>1</sub> is double f<sub>0</sub>, we can write: <br> 2 = (v + v<sub>s</sub>) / (v - v<sub>s</sub>) <br> Cross-multiplying and solving for v<sub>s</sub>, we get: <br> 2(v - v<sub>s</sub>) = v + v<sub>s</sub> <br> 2v - 2v<sub>s</sub> = v + v<sub>s</sub> <br> 3v<sub>s</sub> = v <br> v<sub>s</sub> = v / 3 <br> v<sub>s</sub> = 343 m/s / 3 <br> v<sub>s</sub> = 114.3 m/s. <br><br> Therefore, each airplane is flying at a speed of 114.3 m/s.",
            "options": [
                "57.7 m/s",
                "343 m/s",
                "228.7 m/s",
                "114.3 m/s"
            ],
            "correct": "114.3 m/s"
        },       
        {
            "question": "Which property of a sound wave determines its pitch?",
            "explain": "Pitch is determined by the frequency of a sound wave. Higher frequency results in a higher pitch, while lower frequency results in a lower pitch.",
            "options": [
                "a) Amplitude",
                "b) Frequency",
                "c) Speed",
                "d) Wavelength"
            ],
            "correct": "b) Frequency"
        },
        {
            "question": "What is the range of human hearing, in terms of frequency?",
            "explain": "The typical range of human hearing is from 20 Hz to 20,000 Hz. This range can vary slightly among individuals.",
            "options": [
                "a) 0 Hz to 500 Hz",
                "b) 20 Hz to 20,000 Hz",
                "c) 100 Hz to 10,000 Hz",
                "d) 1 Hz to 100,000 Hz"
            ],
            "correct": "b) 20 Hz to 20,000 Hz"
        },
        {
            "question": "What is the principle behind a musical instrument producing sound?",
            "explain": "The principle behind a musical instrument producing sound is resonance. When a musical instrument vibrates, it creates sound waves that resonate with the natural frequency of the instrument's body, amplifying the sound.",
            "options": [
                "a) Reflection",
                "b) Resonance",
                "c) Diffraction",
                "d) Absorption"
            ],
            "correct": "b) Resonance"
        },
        {
            "question": "How does the temperature of the air affect the speed of sound?",
            "explain": "The speed of sound in air increases as the temperature increases. This is because warmer air is less dense and allows sound waves to travel more quickly. The relationship is due to the increased energy of the air molecules at higher temperatures, which facilitates faster propagation of sound waves.",
            "options": [
                "a) The speed decreases as the temperature increases",
                "b) The speed remains constant regardless of temperature",
                "c) The speed increases as the temperature increases",
                "d) The speed decreases as the temperature decreases"
            ],
            "correct": "c) The speed increases as the temperature increases"
        },                
        
    ];

    const subjective = [
        {
            no: "1",
            question: "Define sound waves as pressure waves.",
            answer: "Sound waves are pressure waves that propagate through a medium by compressing and expanding the particles of the medium alternately, creating regions of high and low pressure."
          },
          {
            no: "2",
            question: "Why is the roaring of a lion different from the sound of a mosquito?",
            answer: "The frequency of the sound of a mosquito is greater than that of the roaring of a lion, so the pitch of the mosquito's sound is higher. This difference in frequency results in the distinct sounds of a lion's roar and a mosquito's buzz."
          },
          {
            no: "3",
            question: "In what condition does Doppler's effect not apply?",
            answer: "The Doppler's effect does not apply when the relative velocity between the source and the observer is greater than the velocity of sound."
          },
          {
            no: "4",
            question: "Why does an empty container produce more sound than a filled one?",
            answer: "An empty container produces more sound because it contains air, which allows for numerous reflections of sound waves, leading to more vibrations. In contrast, a filled container has fewer air molecules, resulting in less sound production."
          },                 

    ];

  return (
    <React.Fragment>
    <QuestDisplay title = "Physics - Acuostic Phenomenon" question = {questionArray} subjective = {subjective} sub = "Physics" />
</React.Fragment>
  )
}

export default AcuosticPhenomenon
