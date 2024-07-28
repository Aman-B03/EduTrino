import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Practice from './components/Practice'
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
      path: "/practice",
      element: <><Practice /></>
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
      path: "/syllabus",
      element: <Syllabus />
    }
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
