import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Review = (props) => {
  const navigate = useNavigate();
  const [reviewSubjects, setReviewSubjects] = useState([]);
  // const [strongSubjects, setStrongSubjects] = useState({});
  // const [weakSubjects, setWeakSubjects] = useState({});
     let weakChapters = [];
     let weakChaptersMastery = [];
     let strongChapters = [];
     let strongChaptersMastery = [];

  let jugad = [];

  useEffect(()=>{
     axios.get(`http://localhost:3000/getReview/${props.subject.toLowerCase()}`, {headers : {token : localStorage.getItem("token")}}).then((response)=>{
      if(response.data.error){
        alert(response.data.error);
        navigate('/offeredSubjects')
      }else{
        let randArray = Object.entries(response.data);
        jugad =  randArray.slice(1,-3)
        setReviewSubjects(jugad);
      }
     })
    

  },[])
 
 reviewSubjects.map((item, index)=>{
  
  if(item[1]>= 80){
    strongChapters.push(item[0])
    strongChaptersMastery.push(item[1])

  }else if(item[1]<80){

    weakChapters.push(item[0])
    weakChaptersMastery.push(item[1])
  }
      
 })
 console.log("Strong Chapters : ", strongChapters)
 console.log("Weak Chapters : ", weakChapters)



  return (
    <>
    <Navbar/>

    <div className="mainContainer">
        <h1 className='cardHeading font-bold text-center mt-5' >Review Your Chapters of {props.subject}</h1>
        <div className="reviewSubjects flex lg:flex-row flex-col  mx-auto sm:w-auto w-full items-center gap-8 justify-center pt-14">
            <div className="strongChapters sm:w-[500px] min-h-[70vh] w-[90%] flex-col border-[3px] border-blue-500 rounded-xl">
            <h2 className="cardContent font-semibold text-center mt-5 underline decoration-[#5ED9E1] decoration-[4px] underline-offset-8"> Impressive Performance </h2>
            <div className="heading cardContent font-semibold flex justify-between px-5 w-full mt-6"><span>Chapter</span><span>Mastery</span></div>
            <div className='h-1 rounded-lg w-[95%] ml-4 bg-white'></div>
            {
              strongChapters.map((item, index)=>{
                return(
                  <div className="text-xl mt-4 flex justify-between px-5 w-full"> <div className='w-[75%] break-words'>{item}</div> <div className='w-[15%]'> {strongChaptersMastery[index]}%</div></div>
                )
              })
            }

            </div>
            <div className="weakChapters sm:w-[500px] min-h-[70vh] w-[90%] flex-col gap-7 border-[3px] border-blue-500 rounded-xl">
                <h2 className="cardContent font-semibold text-center mt-5 underline decoration-[#5ED9E1] decoration-[4px] underline-offset-8"> Improvement Needed </h2>
                <div className="heading cardContent font-semibold flex justify-between px-5 w-full mt-6"><span>Chapter</span><span>Mastery</span></div>
            <div className='h-1 rounded-lg w-[95%] ml-4 bg-white'></div>
            {
              weakChapters.map((item, index)=>{
                return(
                  <div className="text-xl mt-4 flex justify-between px-5 w-full"> <div className='w-[75%] break-words'>{item}</div> <span> {weakChaptersMastery[index]}%</span></div>
                )
              })
            }
            

            </div>
        </div>
    </div>
    </>
  )
}

export default Review
