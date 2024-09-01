import React from 'react'
import Review from '../components/Review'

const ChemistryReview = () => {

    const chapters = [
        "Haloalkanes",
        "Alcohols",
        "Phenols",
        "Aliphatic aldehydes and ketones",
        "Studies of Heavy Metals",
        "Volumetric Analysis",
        "Ionic Equilibrium",
        "Chemical Kinetics",
        "Thermodynamics",
        "Electrochemistry",
        "Chemistry in the service of mankind",
        "Nuclear Chemistry and Applications of Radioactivity"
    ];

  return (
    <div>
       <Review subject = "Chemistry" chapters = {chapters}/>
    </div>
  )
}

export default ChemistryReview
