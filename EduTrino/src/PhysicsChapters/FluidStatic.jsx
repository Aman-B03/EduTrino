import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const FluidStatic = () => {

    const questionArray = [
        {
            question: "Which principle explains the buoyant force of a fluid?",
            options: [
                "Archimedes' principle",
                "Pascal’s principle",
                "Bernoulli’s Principle",
                "Newton’s second law of motion"
            ],
            correct: "Archimedes' principle",
            explain: "Archimedes' principle states that a body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the body. This principle explains why objects float or sink depending on their density relative to the fluid."
        },
        {
            question: "What causes the turbulence in fluid flow?",
            options: [
                "Kinetic energy",
                "Pressure",
                "Force",
                "Potential energy"
            ],
            correct: "Kinetic energy",
            explain: "Turbulence in fluid flow is caused by the chaotic and irregular movement of fluid particles, which is often driven by high kinetic energy. When the fluid's velocity increases, the kinetic energy increases, leading to instability and turbulence in the flow."
        },               
        {
            question: "A beaker of circular cross section of radius 4 cm is filled with mercury up to a height of 10 cm. Find the force exerted by the mercury on the bottom of the beaker. The atmospheric pressure = 10<sup>5</sup> N/m<sup>2</sup>. Density of mercury = 13600 kg/m<sup>3</sup>. Take <i>g</i> = 10 m/s<sup>2</sup>.",
            options: [
                "571 N",
                "580 N",
                "590 N",
                "600 N"
            ],
            correct: "571 N",
            explain: "The pressure at the surface = atmospheric pressure<br> = 10<sup>5</sup> N/m<sup>2</sup>.<br><br>The pressure at the bottom = Pressure at surface + pressure due to weight of mercury <br> = 10<sup>5</sup> N/m<sup>2</sup><br> + hρg<br> = 10<sup>5</sup> N/m<sup>2</sup><br> + (0.1 m) × (13600 kg/m<sup>3</sup>) × (10 m/s<sup>2</sup>)<br> = 10<sup>5</sup> N/m<sup>2</sup><br> + 13600 N/m<sup>2</sup><br> = 1.136 × 10<sup>5</sup> N/m<sup>2</sup>.<br><br>The force exerted by the mercury on the bottom = Pressure x Area<br> = (1.136 × 10<sup>5</sup> N/m<sup>2</sup>) × (3.14 × 0.04 m × 0.04 m)<br> = 571 N"
        },
        {
            question: "The body will sink down if the force of buoyancy is __________ the weight of the liquid displaced.",
            options: [
                "equal to",
                "less than",
                "more than",
                "not sufficient data"
            ],
            correct: "less than",
            explain: "A body will sink if the force of buoyancy is less than the weight of the liquid displaced. This means that the object is denser than the fluid, and the upward buoyant force is not enough to counteract the downward force of gravity."
        },
        {
            question: "A capillary tube of 0.3 m diameter is placed vertically inside a liquid of density 800 kg/m<sup>3</sup>. Surface tension is 5 × 10<sup>−4</sup> N/m and the angle of contact is 30°. Calculate the height to which the liquid rises in the capillary tube.",
            options: [
                "7.2 × 10<sup>−3</sup> m",
                "7.36 × 10<sup>−7</sup> m",
                "7.42 × 10<sup>−8</sup> m",
                "7.28 × 10<sup>−5</sup> m"
            ],
            correct: "7.36 × 10<sup>−7</sup> m",
            explain: "To find the height to which the liquid rises in the capillary tube, use the capillary rise formula:<br><br><code>h = (2T cos θ) / (ρ g r)</code><br><br>Where:<br><br>- <i>T</i> is the surface tension of the liquid = 5 × 10<sup>−4</sup> N/m<br>- <i>θ</i> is the angle of contact = 30°<br>- <i>ρ</i> is the density of the liquid = 800 kg/m<sup>3</sup><br>- <i>g</i> is the acceleration due to gravity = 9.8 m/s<sup>2</sup><br>- <i>r</i> is the radius of the capillary tube = diameter / 2 = 0.3 m / 2 = 0.15 m<br><br>Substitute these values into the formula:<br><br><code>h = (2 × 5 × 10<sup>−4</sup> × cos 30°) / (800 × 9.8 × 0.15)</code><br><br>Calculate <i>cos 30°</i> ≈ 0.866:<br><br><code>h = (2 × 5 × 10<sup>−4</sup> × 0.866) / (800 × 9.8 × 0.15)<br> = (8.66 × 10<sup>−4</sup>) / (1176)<br> = 7.36 × 10<sup>−7</sup> m</code><br><br>So, the height to which the liquid rises in the capillary tube is approximately 7.2 × 10<sup>−3</sup> m."
        },
        {
            question: "A rectangular plate of dimensions 6 cm by 4 cm and thickness 2 mm is placed with its largest face flat on the surface of water. Calculate the downward force on the plate due to surface tension assuming zero angle of contact. What is the downward force if the plate is placed vertically so that its longest side just touches the water?",
            options: [
                "1.4 × 10<sup>−2</sup> N when flat and 8.68 × 10<sup>−3</sup> N when vertical",
                "1.4 × 10<sup>−3</sup> N when flat and 8.68 × 10<sup>−2</sup> N when vertical",
                "1.4 × 10<sup>−1</sup> N when flat and 8.68 × 10<sup>−3</sup> N when vertical",
                "8.68 × 10<sup>−3</sup> N when flat and 1.4 × 10<sup>−2</sup> N when vertical"
            ],
            correct: "1.4 × 10<sup>−2</sup> N when flat and 8.68 × 10<sup>−3</sup> N when vertical",
            explain: "To find the downward force due to surface tension, use the formula:<br><br><code>F = T × (2 × (length + breadth))</code><br><br>Where:<br><br>- <i>T</i> is the surface tension of water = 7 × 10<sup>−2</sup> N/m<br>- <i>length</i> = 6 cm = 6 × 10<sup>−2</sup> m<br>- <i>breadth</i> = 4 cm = 4 × 10<sup>−2</sup> m<br><br>For the plate placed flat:<br><br><code>F<sub>flat</sub> = T × 2 × (length + breadth)<br> = 7 × 10<sup>−2</sup> × 2 × (6 × 10<sup>−2</sup> + 4 × 10<sup>−2</sup>)<br> = 7 × 10<sup>−2</sup> × 2 × 10 × 10<sup>−2</sup><br> = 1.4 × 10<sup>−2</sup> N</code><br><br>For the plate placed vertically with its longest side touching the water:<br><br><code>F<sub>vertical</sub> = T × 2 × (length + thickness)<br> = 7 × 10<sup>−2</sup> × 2 × (6 × 10<sup>−2</sup> + 2 × 10<sup>−3</sup>)<br> = 7 × 10<sup>−2</sup> × 2 × (6.2 × 10<sup>−2</sup>)<br> = 8.68 × 10<sup>−3</sup> N</code><br><br>Thus, the downward force is 1.4 × 10<sup>−2</sup> N when the plate is flat and 8.68 × 10<sup>−3</sup> N when vertical."
        },
        {
            question: "Calculate the magnitude and direction of the terminal velocity of a 1 mm radius air bubble rising in oil with a viscosity of 0.20 Ns/m², specific gravity of 0.9, and density of air 1.29 kg/m³.",
            options: [
                "0.0099 m/s, upward direction",
                "0.99 m/s, upward direction",
                "0.0099 m/s, downward direction",
                "0.99 m/s, downward direction"
            ],
            correct: "0.0099 m/s, upward direction",
            explain: "To find the terminal velocity of the air bubble, use Stoke's law for small spherical objects moving through a viscous fluid:<br><br><code>v = (2/9) × (r² × (ρ<sub>air</sub> - ρ<sub>oil</sub>) × g) / η</code><br><br>Where:<br><br>- <i>r</i> is the radius of the bubble = 1 mm = 1 × 10<sup>−3</sup> m<br>- <i>ρ<sub>air</sub></i> is the density of air = 1.29 kg/m³<br>- <i>ρ<sub>oil</sub></i> is the density of the oil = Specific gravity × density of water = 0.9 × 1000 kg/m³ = 900 kg/m³<br>- <i>g</i> is the acceleration due to gravity = 9.8 m/s² (approx. 10 m/s² for simplicity)<br>- <i>η</i> is the viscosity of the oil = 0.20 Ns/m²<br><br>Substitute these values into the formula:<br><br><code>v = (2/9) × ( (1 × 10<sup>−3</sup>)² × (1.29 - 900) × 10) / 0.20</code><br><br><code>v = (2/9) × (1 × 10<sup>−6</sup> × (1.29 - 900) × 10) / 0.20<br>  = (2/9) × (1 × 10<sup>−6</sup> × (-898.71) × 10) / 0.20<br>  = (2/9) × (-8.9871 × 10<sup>−4</sup>) / 0.20<br>  = -0.0099 m/s</code><br><br>The negative sign indicates the direction is upward (opposite to the direction of gravity). Thus, the magnitude of the terminal velocity is 0.0099 m/s, and the direction is upward."
        }
        
        
        
        
        
    ];

    const subjective = [
        {
            no: "1",
            question: "In still air, a helium-filled balloon rises to a certain height and then stops rising. Why?",
            answer: "A helium-filled balloon rises because the density of helium is less than that of the surrounding air, creating a buoyant force. <br>As the balloon ascends, the air pressure decreases, causing the balloon to expand and become less dense. <br>However, it will eventually reach an altitude where the density of the air is equal to the density of the helium in the balloon. At this point, the buoyant force is equal to the weight of the balloon, and it stops rising."
          },
          {
            no: "2",
            question: "Why is a soap solution a better cleansing agent than ordinary water?",
            answer: "A soap solution is a better cleansing agent than ordinary water because it significantly lowers the surface tension of water. <br>  Water has a high surface tension, which makes it form droplets and prevents it from spreading out to wet surfaces effectively. <br> Soap molecules reduce the surface tension, allowing water to spread more easily and penetrate into the pores and crevices of materials. <br> This action helps in breaking up and emulsifying dirt and grease, making them easier to wash away."
          },
          {
            no: "3",
            question: "Antiseptics used in cuts and wounds of human flesh have low surface tension. Why?",
            answer: "Antiseptics have low surface tension because this property allows them to spread easily and penetrate deeper into wounds, enhancing their effectiveness. Lower surface tension helps the antiseptic to wet the surface better and reach areas that might otherwise be difficult to clean."
          },
          {
            no: "4",
            question: "Why are the light roofs blown up during a cyclone or hurricane?",
            answer: "During a cyclone or hurricane, the strong winds create a low-pressure area on the roof's upper side while the pressure inside the building remains higher. This pressure difference results in a force that pushes the roof upwards as the winds tries to move toward lower pressure region from high pressure region blowing the roof upwards."
          }
          
          
          
    ]


  return (
    <React.Fragment>
        <QuestDisplay title = "Physics - Fluid Static" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </React.Fragment>
  )
}

export default FluidStatic
