import React from 'react'
import Review from '../components/Review';

const PhysicsReview = () => {

  const chapters=[
    "Rotational Dynamics",
    "Simple Harmonic Motion",
    "Fluid Static",
    "First Law Of Thermodynamics",
    "Wave Motion",
    "Waves in Pipes and Strings",
    "Acuostic Phenomenon",
    "Wave Nature of Light",
    "Electrical Circuits",
    "Magnetic Properties of Materials",
    "Magnetic Field",
    "Alternating Current",
    "Electrons",
    "Photons",
    "Semiconductor Devices",
    "Quantization of Energy"
  ];

  return (
    <div>
      <Review subject = "Physics" chapters = {chapters}/>
    </div>
  )
}

export default PhysicsReview
