import React, { useContext } from 'react'
import Navbar from './Navbar'
import pp from "../assets/pp.png"
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Signup from './SignUp';
import { userState } from '../context/context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
  const [subjects, setsubjects] = useState(["Physics", "Chemistry", "Maths", "SE", "CN", "CT", "VP"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const value = useContext(userState);
  useEffect(() => {
    axios.get('http://localhost:3000/signUp/findUser', { headers: { token: localStorage.getItem("token") } }).then((response) => {
      console.log(response.data)
      setName(response.data.name);
      setEmail(response.data.email);
    })
  }, [value.isLogged])




  const logOut = () => {
    if (confirm("Are You sure to log Out 😒😒")) {
      localStorage.removeItem("token")
      value.setIsLogged(false)
      navigate('/')
    }
  }


  if (value.isLogged) {

    return (

      <div>

        <Navbar />
        <div className="upperContent flex flex-col gap-0" data-aos="fade-up">
          <div className="personalInfo bg-[#44aba6] flex 650:flex-row 650:gap-0 gap-8 flex-col w-[93vw] mx-auto rounded-lg my-8 py-5 justify-between px-6">
            <div className='grouping flex gap-8 650:ml-[10vw] ml-0'> <div className="image w-20"><img src={pp} alt="your profile" className='w-full' /></div>
              <div className="detail flex flex-col gap-2">
                <span className="name text-2xl">{name}</span>
                <span className="email text-lg">{email}</span>
              </div></div>
            <div className="score flex flex-col gap-4 md:mr-[10vw] 650:ml-0 ml-[10vw]">
              <div className="dattebayo">
                <span className='text-2xl'>Score </span>
                <span className='bg-[#f3f8fb] border-2 border-white text-xl text-black h-10 px-3 rounded-lg'> 00 </span>
              </div>
              <button onClick={logOut} className="logOut bg-blue-500 text-white px-2 h-10 w-40 font-semibold border-2 border-black rounded-xl">LogOut</button>
            </div>
          </div>
          <div className="button relative w-[93vw]">
            <NavLink to="/dashboard/leaderboard"><span className="font-semibold leaderboard absolute right-3 bg-[#34878f] border-2 border-black px-2 py-1 mt-[-15px] rounded-lg cursor-pointer">LeaderBoard</span></NavLink>
          </div>
        </div>
        <h1 className='mt-10 lg:mt-0 cardHeading text-center font-semibold underline decoration-[#5ED9E1] decoration-[6px] underline-offset-8'>Review Your Subjects</h1>
        <div className="lowerContent flex gap-5 flex-wrap w-[93vw] mx-auto mt-16" data-aos="fade-up">
          {subjects.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <NavLink to={`/${item.toLowerCase()}Review`}><div className='lg:w-[20vw] md:w-[25vw] w-[40vw] h-[15vh] border-[4px] getShadow border-[#8c8a8a] rounded-lg cardHeading text-center' > {item} </div></NavLink>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    )
  }
  else {
    return (
      <Signup />
    )
  }
}

export default Dashboard
