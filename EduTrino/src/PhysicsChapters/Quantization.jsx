import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Quantization = () => {

    const questionArray = [
        {
            "question": "In X-ray emission tubes, X-ray is emitted by the acceleration of ________________",
            "explain": "In X-ray emission tubes, X-rays are produced when high-energy electrons are accelerated and then strike a metal target. The sudden deceleration of these electrons leads to the emission of X-rays.",
            "options": [
              "a) Atoms",
              "b) Protons",
              "c) Electrons",
              "d) Neutrons"
            ],
            "correct": "c) Electrons"
          },
          {
            "question": "Which of the following diseases can be detected by X-Ray?",
            "explain": "X-rays are useful for imaging the internal structures of the body, particularly the lungs and chest area. Pneumonia, which affects the lungs, can be detected through X-ray imaging.",
            "options": [
              "a) Bladder infection",
              "b) Pneumonia",
              "c) Diarrhea",
              "d) Fever"
            ],
            "correct": "b) Pneumonia"
          },

    ];

    const subjective = [
        {
            "no" : " ",
            "question " : "<strong> YET TO COME </strong> ",
            "answer" : "<strong> UNDER CONSTRUCION, WE WILL JOIN IN NO TIME</strong>"
        }
    ];

    return (
        <React.Fragment>
            <QuestDisplay title="Physics - Quantization of Energy" question={questionArray} subjective={subjective} sub="Physics" />
        </React.Fragment>
    )
}

export default Quantization
