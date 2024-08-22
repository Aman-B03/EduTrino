import React from 'react'
import QuestDisplay from '../components/QuestDisplay'

const Physics = () => {

  const questionArray = [
    {
      no: "1",
      question: "Which one is a property of constituent masses in a rigid body?",
      options: ["same speed", "same mass", "same angular acceleration", "same point of dynamics"],
      correct: "same angular acceleration",
      explain: "In a rigid body, all constituent masses move with the same angular velocity in equal time intervals without deformation."
    },
    {
      no: "2",
      question: "Let <i>A</i> be a unit vector along the axis of rotation of a purely rotating body and <i>B</i> be a unit vector along the velocity of a particle <i>P</i> of the body away from the axis. The value of <i>A</i> ⋅ <i>B</i> is",
      options: ["1", "-1", "0", "None of these"],
      correct: "0",
      explain: "The velocity vector of a particle in a purely rotating body is always perpendicular to the axis of rotation. Hence, the dot product of the unit vectors is zero."
    },
    {
      no: "3",
      question: "A circular disc <i>A</i> of radius <i>r</i> is made from an iron plate of thickness <i>t</i> and another circular disc <i>B</i> of radius 4<i>r</i> is made from an iron plate of thickness <i>t</i>/4. The relation between the moments of inertia <i>I<sub>A</sub></i> and <i>I<sub>B</sub></i> is",
      options: ["<i>I<sub>A</sub></i> &lt; <i>I<sub>B</sub></i>", "<i>I<sub>A</sub></i> &gt; <i>I<sub>B</sub></i>", "<i>I<sub>A</sub></i> = <i>I<sub>B</sub></i>", "Insufficient data to answer"],
      correct: "<i>I<sub>A</sub></i> &gt; <i>I<sub>B</sub></i>",
      explain: "The moment of inertia is proportional to the mass and the square of the radius. Disc <i>B</i>, having a larger radius, will have a larger moment of inertia despite the difference in thickness."
    },
    {
      no: "4",
      question: "Let <i>I<sub>1</sub></i> and <i>I<sub>2</sub></i> be the moments of inertia of two bodies of identical geometrical shape, the first made of aluminium and the second of iron.",
      options: ["<i>I<sub>1</sub></i> &lt; <i>I<sub>2</sub></i>", "<i>I<sub>1</sub></i> = <i>I<sub>2</sub></i>", "<i>I<sub>1</sub></i> &gt; <i>I<sub>2</sub></i>", "Relation between <i>I<sub>1</sub></i> and <i>I<sub>2</sub></i> depends on the actual shapes of the bodies"],
      correct: "<i>I<sub>1</sub></i> &lt; <i>I<sub>2</sub></i>",
      explain: "The moment of inertia depends on both the mass distribution and the material density. Since iron is denser than aluminum, <i>I<sub>2</sub></i> will be greater than <i>I<sub>1</sub></i>."
    },
    {
      no: "5",
      question: "A person sitting firmly over a rotating stool has his arms stretched. If he folds his arms, his angular momentum about the axis of rotation",
      options: ["increases", "decreases", "remains unchanged", "doubles"],
      correct: "remains unchanged",
      explain: "Angular momentum remains conserved in the absence of external torque. Folding the arms decreases the moment of inertia, but increases angular velocity, keeping angular momentum unchanged."
    },
    {
      no: "6",
      question: "A wheel of mass 10kg has a moment of inertia 160kg-m<sup>2</sup> about its own axis. The radius of gyration is",
      options: ["10 m", "4 m", "5 m", "6 m"],
      correct: "4 m",
      explain: "The radius of gyration (<i>k</i>) can be found using the formula <i>I = m k<sup>2</sup></i>. Rearranging for <i>k</i>, we get <i>k = √(I/m) = √(160/10) = 4 m</i>."
    },
    {
      no: "7",
      question: "The moment of inertia of a body does not depend on",
      options: ["Mass", "Distribution of mass", "Angular velocity", "Axis of rotation"],
      correct: "Angular velocity",
      explain: "The moment of inertia is a measure of an object's resistance to changes in its rotation rate. It depends on the mass of the object, the distribution of that mass, and the axis about which it is rotating. Angular velocity does not affect the moment of inertia."
    },
    {
      no: "8",
      question: "A wheel is rotating at 900 rpm about its axis. When the power is cut off, it comes to rest in one minute. The angular retardation (assumed to be uniform) in radian/sec<sup>2</sup> is",
      options: ["π/2", "π/4", "π/6", "π/8"],
      correct: "π/2",
      explain: "The initial angular velocity, ω<sub>0</sub>, is 900 rpm.<br> Converting this to radian/sec: <br> ω<sub>0</sub> = 900 × (2π/60) <br> = 30π rad/s. <br>The final angular velocity, ω, is 0 rad/s. <br> The time taken, t, is 60 seconds.<br> Using the formula for uniform angular retardation:<br> α = (ω - ω<sub>0</sub>)/t,<br> we get <br>α = (0 - 30π)/60 <br> = -π/2 rad/s<sup>2</sup>. <br>The negative sign indicates retardation."
    },
    {
      no: "9",
      question: "A wheel is making revolutions about its axis with uniform angular acceleration. Starting from rest, it reaches 100 rev/sec in 4 seconds. Find the angular acceleration. Find the angle rotated during these four seconds.",
      options: ["400π rad", "200π rad", "300π rad", "500π rad"],
      correct: "400π rad",
      explain: "Given:<br>t = 4 sec<br>ω = 100 rev/sec   [1 rev = 360 deg = 2π radians] <br> = 100 × 2π rad/sec <br>= 200π rad/sec<br><br>Using the equation for angular acceleration:<br>α = ω/t<br> = (200π)/4 <br>= 50π rad/sec<sup>2</sup><br><br>The angle rotated, θ, during these four seconds is given by:<br>θ = (1/2) × α × t<sup>2</sup> <br>= (1/2) × 50π × (4)<sup>2</sup><br>θ = 400π rad"
    },
    {
      no: "10",
      question: "A ballet dancer spins with 2.4 rev/s with her arms outstretched when the moment of inertia about the axis of rotation is I. With her arms folded, the moment of inertia about the same axis becomes 0.6I. Calculate the new rate of spin.",
      options: ["2.4 rev/s", "4 rev/s", "6 rev/s", "8 rev/s"],
      correct: "4 rev/s",
      explain: "Given:<br>Initial spin rate (f<sub>1</sub>) = 2.4 rev/s<br>Initial moment of inertia (I<sub>1</sub>) = I<br>Final moment of inertia (I<sub>2</sub>) = 0.6I<br><br>Using the conservation of angular momentum:<br>I<sub>1</sub>ω<sub>1</sub> = I<sub>2</sub>ω<sub>2</sub><br>I<sub>1</sub>2πf<sub>1</sub> = I<sub>2</sub>2πf<sub>2</sub><br>I × 2.4 = 0.6I × f<sub>2</sub><br>f<sub>2</sub> = (I × 2.4) / 0.6I<br>f<sub>2</sub> = 4 rev/s"
    },
    {
      no: "11",
      question: "A constant torque of 500 Nm turns a wheel, which has a moment of inertia 20 kgm<sup>2</sup> about its center. Find the angular velocity gained in 2 seconds and the kinetic energy gained.",
      options: ["10 rad/s, 1000 J", "20 rad/s, 4000 J", "50 rad/s, 25000 J", "100 rad/s, 50000 J"],
      correct: "50 rad/s, 25000 J",
      explain: "Given:<br>Torque (τ) = 500 Nm<br>Moment of inertia (I) = 20 kgm<sup>2</sup><br>Time (t) = 2 s<br><br>First, calculate the angular acceleration (α) using the relation:<br>τ = Iα<br>500 = 20 × α<br>α = 25 rad/s<sup>2</sup><br><br>Now, calculate the angular velocity (ω) gained using:<br>ω = α × t<br>ω = 25 × 2<br>ω = 50 rad/s<br><br>The kinetic energy (K.E.) gained can be calculated using:<br>K.E. = 0.5 × I × ω<sup>2</sup><br>K.E. = 0.5 × 20 × 50<sup>2</sup><br>K.E. = 25000 J"
    },
    {

      question: "A uniform rod of length L = 2 m and mass M = 5 kg is hinged at one end and is initially held horizontally. It is then released from rest, allowing it to rotate freely about the hinge.",
      options: ["(a) MoI = 6.67 kgm<sup>2</sup>; (b) &omega; = 3.83 rad/s", "(a) MoI = 3.87 kgm<sup>2</sup>; (b) &omega; = 3.33 rad/s", "(a) MoI = 7.57 kgm<sup>2</sup>; (b) &omega; = 4.54 rad/s", "(a) MoI = 4.34 kgm<sup>2</sup>; (b) &omega; = 5.5 rad/s"],
      correct: "(a) MoI = 6.67 kgm<sup>2</sup>; (b) &omega; = 3.83 rad/s",
      explain: `
        <b>(a) Moment of Inertia (MoI) of the rod about the hinge:</b>
        <br>
        The moment of inertia of a uniform rod about an axis through one end and perpendicular to its length is given by:
        <br>
        I = (1/3)ML<sup>2</sup>
        <br>
        Substituting the given values:
        <br>
        I = (1/3) × 5 kg × (2 m)<sup>2</sup>
        <br>
        I = (1/3) × 5 × 4 = 20/3 kgm<sup>2</sup>
        <br>
        I = 6.67 kgm<sup>2</sup>
        <br><br>
        <b>(b) Angular velocity (&omega;) when the rod has kinetic energy of 49 J:</b>
        <br>
        The rotational kinetic energy is given by:
        <br>
        K.E. = (1/2)I&omega;<sup>2</sup>
        <br>
        49 J = (1/2) × 6.67 kgm<sup>2</sup> × &omega;<sup>2</sup>
        <br>
        &omega;<sup>2</sup> = 49 / (3.335) rad<sup>2</sup>/s<sup>2</sup>
        <br>
        &omega; = √(14.7) rad/s
        <br>
        &omega; &approx; 3.83 rad/s
      `
    }
    
        
  ];

  const subjective = [
    {
      no : "1",
      question : "Explain why a tightrope walker uses a long pole for balance.",
      answer : "The long pole increases the moment of inertia of the tightrope walker about the axis of rotation (i.e., the rope). A larger moment of inertia resists changes in rotational motion, making it easier for the walker to maintain balance by reducing the tendency to tip over quickly. The pole helps to distribute the mass over a larger area, making fine adjustments to balance more effective."
    },
    {
      no : "2",
      question : "Why does a thin, long rod rotating about an axis through its end have a higher moment of inertia than a rod of the same mass and length rotating about an axis through its center?",
      answer : "The moment of inertia depends on the square of the distance of the mass elements from the axis of rotation. When the rod rotates about an axis through its end, all the mass elements are, on average, farther from the axis compared to when the rod rotates about its center. This increased distance results in a higher moment of inertia when rotating about the end compared to the center."

    },
    {
      no: "3",
      question: "Why does a figure skater spin faster when they pull their arms close to their body?",
      answer: "When the figure skater pulls their arms closer to their body, they reduce their moment of inertia. Since angular momentum is conserved (no external torque is acting on them), a decrease in moment of inertia results in an increase in angular velocity, causing the skater to spin faster."
  },
  {
      no: "4",
      question: "Why does applying a torque at a point farther from the axis of rotation produce a greater rotational effect than applying the same force closer to the axis?",
      answer: "Torque is defined as the product of the force applied and the distance from the axis of rotation (lever arm). When the force is applied farther from the axis, the lever arm is longer, and thus the torque produced is greater, resulting in a stronger rotational effect."
  },
  {
      no: "5",
      question: "Why does a hollow cylinder have a larger moment of inertia compared to a solid cylinder of the same mass and radius about the same axis?",
      answer: "In a hollow cylinder, all the mass is concentrated farther from the axis of rotation, while in a solid cylinder, the mass is distributed more uniformly closer to the axis. Since the moment of inertia depends on the square of the distance of the mass from the axis, the hollow cylinder has a larger moment of inertia compared to the solid cylinder."
  },
  {
      no: "6",
      question: "Why is it difficult to stop a rapidly spinning heavy wheel?",
      answer: "A rapidly spinning heavy wheel has a large angular momentum due to its high angular velocity and significant moment of inertia. According to the principle of conservation of angular momentum, a large torque would be required to change its state of rotation, making it difficult to stop the wheel abruptly."
  }
  ]
  
  
  
  return (
    <React.Fragment>
        <QuestDisplay title = "Physics - Rotational Dynamics" question = {questionArray} subjective = {subjective} sub = "Physics" />
    </React.Fragment>
  )
}

export default Physics
