import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignUp from './components/SignUp'
import Login from './components/Login'
import OfferedSubjects from './components/OfferedSubjects'
import Physics from './components/Physics'
import Chemistry from './components/Chemistry'
import Maths from './components/Maths'
import SE from './components/SE'
import VP from './components/VP'
import CN from './components/CN'
import CT from './components/CT'
import Leaderboard from './components/Leaderboard'
import QuestionPaper from './components/QuestionPaper'
import { userState } from './context/context'
import axios from 'axios'
import Syllabus from './components/Syllabus'
import RotationalDynamics from './PhysicsChapters/RotationalDynamics'
import ShowSummary from './components/ShowSummary'
import SimpleHarmonicMotion from './PhysicsChapters/SimpleHarmonicMotion'
import FluidStatic from './PhysicsChapters/FluidStatic'
import FirstLawOfThermo from './PhysicsChapters/FirstLawOfThermo'
import WaveMotion from './PhysicsChapters/WaveMotion'
import WavesInPipeAndString from './PhysicsChapters/WavesInPipeAndString'
import AcuosticPhenomenon from './PhysicsChapters/AcuosticPhenomenon'
import WaveNatureOfLight from './PhysicsChapters/WaveNatureOfLight'
import ElectricalCircuits from './PhysicsChapters/ElectricalCircuits'
import MagneticProperty from './PhysicsChapters/MagneticProperty'
import MagneticField from './PhysicsChapters/MagneticField'
import AlternatingCurrent from './PhysicsChapters/AlternatingCurrent'
import Electrons from './PhysicsChapters/Electrons'
import Photons from './PhysicsChapters/Photons'
import Semiconductors from './PhysicsChapters/Semiconductors'
import Quantization from './PhysicsChapters/Quantization'
import Haloalkanes from './ChemistryChapters.jsx/Haloalkanes'
import Alcohols from './ChemistryChapters.jsx/Alcohols'
import Phenols from './ChemistryChapters.jsx/Phenols'
import AldehydesAndKetones from './ChemistryChapters.jsx/AldehydesAndKetones'
import PhysicsReview from './ReviewAll/PhysicsReview'
import HeavyMetals from './ChemistryChapters.jsx/HeavyMetals'
import VolumetricAnalysis from './ChemistryChapters.jsx/VolumetricAnalysis'
import IonicEquilibrium from './ChemistryChapters.jsx/IonicEquilibrium'
import ChemicalKinetics from './ChemistryChapters.jsx/ChemicalKinetics'
import Thermodynamics from './ChemistryChapters.jsx/Thermodynamics'
import Electrochemistry from './ChemistryChapters.jsx/Electrochemistry'
import ChemistryMankind from './ChemistryChapters.jsx/ChemistryMankind'
import NuclearChemistry from './ChemistryChapters.jsx/NuclearChemistry'
import ChemistryReview from './ReviewAll/ChemistryReview'
import PermutationCombination from './MathsChapters/PermutationCombination'
import BinomialTheorm from './MathsChapters/BinomialTheorm'
import IntroductionCN from './CNchapters/IntroductionCN'
import NetworkType from './CNchapters/NetworkType'
import NetworkingDevices from './CNchapters/NetworkingDevices'
import DevicesAndTransmission from './CNchapters/DevicesAndTransmission'
import NetworkArchitecture from './CNchapters/NetworkArchitecture'
import ReferenceModel from './CNchapters/ReferenceModel'
import WorkgroupComputing from './CNchapters/WorkgroupComputing'
import NetworkSecurity from './CNchapters/NetworkSecurity'
import CNReview from './ReviewAll/CNReview'
import IntroductionCT from './CTchapters/IntroductionCT'
import ECommerce from './CTchapters/ECommerce'
import EGovernance from './CTchapters/EGovernance'
import CloudIOT from './CTchapters/CloudIOT'
import AI from './CTchapters/AI'
import Multimedia from './CTchapters/Multimedia'
import BigData from './CTchapters/BigData'
import CTReview from './ReviewAll/CTReview'

function App() {


  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    
    {
      path: "/dashboard",
      element: <><Dashboard /></>
    },
    {
      path: "/signUp",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <><Login /></>
    },
    {
      path: "/offeredSubjects",
      element: <OfferedSubjects />
    },
    {
      path: "/physics",
      element: <Physics />
    },
    {
      path: "/chemistry",
      element: <Chemistry />
    },
    {
      path: "/maths",
      element: <Maths />
    },
    {
      path: "/cn",
      element: <CN />
    },
    {
      path: "/se",
      element: <SE />
    },
    {
      path: "/vp",
      element: <VP />
    },
    {
      path: "/ct",
      element: <CT />
    },
    {
      path: "/dashboard/leaderboard",
      element: <Leaderboard />
    }
    ,
    {
      path: "/offeredSubjects/questionPaper",
      element: <QuestionPaper />
    }, 
    {
      path : "/showSummary",
      element : <ShowSummary/>
    },
    {
      path: "/syllabus",
      element: <Syllabus />
    },
    {
      path : "/rotational-dynamics",
      element : <RotationalDynamics/>
    },
    {
      path : "/simple-harmonic-motion",
      element : <SimpleHarmonicMotion/>
    },
   
    {
      path  : "/fluid-static",
      element : <FluidStatic/>
    },
    {
      path  : "/first-law-of-thermodynamics",
      element : <FirstLawOfThermo/>
    },
    {
      path  : "/wave-motion",
      element : <WaveMotion/>
    },
    {
      path  : "/waves-in-pipes-and-strings",
      element : <WavesInPipeAndString/>
    },
    {
      path  : "/acuostic-phenomenon",
      element : <AcuosticPhenomenon/>
    },
    {
      path  : "/wave-nature-of-light",
      element : <WaveNatureOfLight/>
    },
    {
      path  : "/electrical-circuits",
      element : <ElectricalCircuits/>
    },
    {
      path  : "/magnetic-properties-of-materials",
      element : <MagneticProperty/>
    },
    {
      path  : "/magnetic-field",
      element : <MagneticField/>
    },
    {
      path  : "/alternating-current",
      element : <AlternatingCurrent/>
    },
    {
      path  : "/electrons",
      element : <Electrons/>
    },
    {
      path  : "/photons",
      element : <Photons/>
    },
    {
      path  : "/semiconductor-devices",
      element : <Semiconductors/>
    },
    {
      path  : "/quantization-of-energy",
      element : <Quantization/>
    },
    {
      path  : "/haloalkanes",
      element : <Haloalkanes/>
    },
    {
      path  : "/alcohols",
      element : <Alcohols/>
    },
    {
      path  : "/phenols",
      element : <Phenols/>
    },
    {
      path  : "/aliphatic-aldehydes-and-ketones",
      element : <AldehydesAndKetones/>
    },
    {
      path  : "/studies-of-heavy-metals",
      element : <HeavyMetals/>
    },
    {
      path  : "/volumetric-analysis",
      element : <VolumetricAnalysis/>
    },
    {
      path  : "/ionic-equilibrium",
      element : <IonicEquilibrium/>
    },
    {
      path  : "/chemical-kinetics",
      element : <ChemicalKinetics/>
    },
    {
      path  : "/thermodynamics",
      element : <Thermodynamics/>
    },
    {
      path  : "/electrochemistry",
      element : <Electrochemistry/>
    },
    {
      path  : "/chemistry-in-the-service-of-mankind",
      element : <ChemistryMankind/>
    },
    {
      path  : "/nuclear-chemistry-and-applications-of-radioactivity",
      element : <NuclearChemistry/>
    },
    {
      path  : "/permutation-and-combination",
      element : <PermutationCombination/>
    },
    {
      path  : "/binomial-theorem",
      element : <BinomialTheorm/>
    },
    {
      path  : "/introduction-to-computer-network",
      element : <IntroductionCN/>
    },
    {
      path  : "/network-types-and-topologies",
      element : <NetworkType/>
    },
    {
      path  : "/networking",
      element : <NetworkingDevices/>
    },
    {
      path  : "/devices-and-transmission-media",
      element : <DevicesAndTransmission/>
    },
    {
      path  : "/network-architecture",
      element : <NetworkArchitecture/>
    },
    {
      path  : "/reference-model-and-ip-addressing",
      element : <ReferenceModel/>
    },
    {
      path  : "/workgroup-computing",
      element : <WorkgroupComputing/>
    },
    {
      path  : "/network-security",
      element : <NetworkSecurity/>
    },
    {
      path  : "/introduction-to-contemporary-technology",
      element : <IntroductionCT/>
    },
    {
      path  : "/e-commerce",
      element : <ECommerce/>
    },
    {
      path  : "/e-governance",
      element : <EGovernance/>
    },
    {
      path  : "/cloud-computing-and-iot",
      element : <CloudIOT/>
    },
    {
      path  : "/artificial-intelligence",
      element : <AI/>
    },
    {
      path  : "/multimedia",
      element : <Multimedia/>
    },
    {
      path  : "/big-data",
      element : <BigData/>
    },
    {
      path  : "/dashboard/physicsReview",
      element : <PhysicsReview/>
    },
    {
      path  : "/dashboard/chemistryReview",
      element : <ChemistryReview/>
    },
    {
      path  : "/dashboard/cnReview",
      element : <CNReview/>
    },
    {
      path  : "/dashboard/ctReview",
      element : <CTReview/>
    },
  ])
  const [isLogged, setIsLogged] = useState();
    useEffect(()=>{
      axios.get('http://localhost:3000/signUp/findUser', {headers:{token : localStorage.getItem("token")}}).then((response)=>{
        if(!response.error){
          console.log("is logged is true")
           setIsLogged(true)
        }else{
          console.log("islogged is false")
          setIsLogged(false)
        }
      })
    },[])
  
  return (
    <div>
      <userState.Provider value = {{isLogged, setIsLogged}}>
        <RouterProvider router={router} />
      </userState.Provider>
    </div>
  )
}

export default App
