import React, { useState, useEffect } from 'react'
import MathJax from 'react-mathjax2'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Div from './Div';
import motive from '../assets/motive.png'
import axios from 'axios'


const QuestDisplay = (props) => {

    const navigate = useNavigate();

    const [istheory, setIstheory] = useState(false);
    const [questIndex, setQuestIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [btn, setBtn] = useState("Check");
    const [SelectedOption, setSelectedOption] = useState("")
    const [optionStyle, setOptionStyle] = useState({});
    const [prevOptionStyle, setPrevOptionStyle] = useState({});
    const [border, setBorder] = useState('');
    const [isSummary, setIsSummary] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);




    const yesTheory = () => {
        setIstheory(true)

    }

    const noTheory = () => {
        setIstheory(false)

    }
    const resetAll = () => {
        setIsAnswered(false);
        setIsCorrect(false);
        setBtn("Check");
        setSelectedOption("");
        setOptionStyle({});
        setPrevOptionStyle({});
        setBorder('');
    }

    const clickNext = () => {
        setQuestIndex(questIndex + 1);
        resetAll();

    }

    const clickCheck = () => {

        setIsAnswered(true)
        if (questIndex + 1 == props.question.length) {
            setBtn("Submit")
        } else {
            setBtn("Next")
        }

        if (SelectedOption == props.question[questIndex].correct) {
            setIsCorrect(true)
        }
        else {
            setIsCorrect(false)
        }
        let updateStyle = {};
        props.question[questIndex].options.forEach(element => {
            if (element == props.question[questIndex].correct) {
                updateStyle[element] = 'border-2 border-green-600';

            }
            else if (element == SelectedOption) {
                updateStyle[element] = 'border-2 border-red-600';
            }
            else {
                updateStyle[element] = '';
            }

        });
        setOptionStyle(updateStyle);
        if (SelectedOption == props.question[questIndex].correct) {
            setCorrectAnswer(correctAnswer + 1)
        }

    }
    const clickSkip = () => {
        setQuestIndex(questIndex + 1)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    };

    let title = props.title;

    const clickSubmit = (MyScore, mastery) => {
        const scoreData = {
            score: MyScore
        }
        console.log("Score data array  : ", scoreData)
        axios.post('http://localhost:3000/score', scoreData, { headers: { token: localStorage.getItem("token") } }).then((response) => {
            console.log("After posting score : ", response.data)
        });

        let sub = title.split('-')[1].toLowerCase().replace(/[^a-z0-9]/g, '');
        const subjectScore = {
            userId: 1,
            mastery : mastery,
            chapter : sub
        }

        axios.post(`http://localhost:3000/score/post${props.sub}Score`, subjectScore, { headers: { token: localStorage.getItem("token") } }).then((response)=>{
            console.log(response.data)
        })
        // if(props.sub == "Physics"){
        //     axios.post()

        // }else if(props.sub == "Chemistry"){

        // }else if(props.sub == "Maths"){

        // }else if(props.sub == "SE"){

        // }else if(props.sub == "VP"){

        // }else if(props.sub == "CT"){

        // }else if(props.sub == "CN"){

        // }else{
        //     console.log(" NO SUBJECT MATCHED !")
        // }


        setQuestIndex(0)
        resetAll();
        setIsSummary(true)
    }

    function setBorderStyle(item) {
        setBorder(optionStyle[item])
        // console.log(border + "value of border ")
        // console.log(optionStyle[item] + "value of optionStyle[item] ")
    }

    const goBack = () => {
        window.location.reload();
    }

    let percent = Math.floor(correctAnswer * 100 / props.question.length);

    const midCheck = correctAnswer * 100 / props.question.length >= 40 && correctAnswer * 100 / props.question.length <= 90;
    return (
        <div className='w-full min-h-[100vh] bg-slate-100'>
            <h1 className='cardHeading text-center py-3 mb-3 bg-green-800 text-white font-semibold'>{props.title}</h1>
            <div className={`${isSummary && 'hidden'} navigation md:hidden flex`}>



                <span className={`${istheory ? ('bg-white text-blue-400 py-4') : ('bg-blue-400 text-white py-4')} w-[50%] px-8`} onClick={noTheory}>question</span>
                <span className={`${!istheory ? ('bg-white text-blue-400 py-4') : ('bg-blue-400 text-white py-4')} w-[50%] px-8`} onClick={yesTheory}>Theory</span>
            </div>
            <div className="mainContainer flex gap-2">
                <div className="ml-2 px-4 py-5 sidebar md:flex rounded-xl hidden flex-col border h-[80vh] border-slate-400 w-[300px] xl:w-[400px] bg-yellow-50 text-black ">
                    <div className="flex gap-3 mb-8">
                        <NavLink to='/offeredSubjects' className="Practicegoto hover:text-blue-400 cursor-pointer"> &gt;&gt; Practice</NavLink>
                        <NavLink to={`/${props.sub.toLowerCase()}`} className="physicsgoto hover:text-blue-400 cursor-pointer"> &gt;&gt; {props.sub}</NavLink>
                    </div>
                    <span className={`${!istheory && 'border-l-4  border-blue-500 bg-blue-100 text-blue-500'} pl-3 py-2 mb-[2px] questions cursor-pointer text-lg font-semibold`} onClick={noTheory}> Practice Questions</span>
                    <Div />
                    <span className={`${istheory && 'border-l-4  border-blue-500 bg-blue-100 text-blue-500'} theory pl-3 py-2 mb-[2px] cursor-pointer text-lg font-semibold`} onClick={yesTheory}> Subjective </span>
                    <Div />
                </div>

                <div className={`${isSummary && !istheory && 'hidden'} questionField`}>

                    {!istheory ? (
                        <div className="mt-[-10px] pt-5 flex justify-center questionBox p-6 border-l-2 border-gray-300 bg-yellow-50 text-black w-full min-h-[80vh] md:w-[calc(100vw-400px)]">
                            <div className="wrapquestions flex flex-col">
                                {/* <div className="question cardContent">{props.question[questIndex].question}</div> */}
                                <div className="question cardContent" dangerouslySetInnerHTML={{ __html: props.question[questIndex].question }} ></div>
                                <Div />
                                <div className="options flex flex-col mt-7">

                                    {props.question[questIndex].options.map((item, index) => {
                                        // useEffect(() => {
                                        //     setBorderStyle(item);
                                        // },[optionStyle])
                                        if (JSON.stringify(optionStyle) != JSON.stringify(prevOptionStyle)) {
                                            setBorderStyle(item);
                                            setPrevOptionStyle({ ...optionStyle })
                                        }


                                        return (
                                            <React.Fragment key={props.question[questIndex].id}>
                                                {console.log(optionStyle[item])}
                                                <div className={`rounded-xl ${optionStyle[item]} optconent flex gap-5 pl-2`}>
                                                    <input type="radio" onChange={handleOptionChange} value={item} checked={SelectedOption == item} name="option" id={`option-${index}`} className='py-1 custom-radio mt-3 w-[20px]' />
                                                    <label htmlFor={`option-${index}`} className="p-1 opt mt-3" dangerouslySetInnerHTML={{ __html: item }}></label>
                                                </div>
                                                <Div />
                                            </React.Fragment>
                                        )
                                    })}



                                </div>
                                <div className={`explain mt-5 ${!isAnswered && 'hidden'}`}>
                                    {SelectedOption != props.question[questIndex].correct ? (<span className="correctanswer my-4 text-lg text-green-800">Correct answer is <span dangerouslySetInnerHTML={{ __html: props.question[questIndex].correct }}></span></span>)
                                        : (<span className="correctanswer my-4 text-lg text-green-800"> Correct option selected, <span dangerouslySetInnerHTML={{ __html: props.question[questIndex].correct }}></span> </span>)
                                    }
                                    <p className='mb-2 text-green-600 text-xl font-semibold'>Explanation : </p>
                                    <p dangerouslySetInnerHTML={{ __html: props.question[questIndex].explain }}></p>
                                </div>
                                <div className="border-2 py-3 rounded-xl border-gray-200 buttons mt-12 flex gap-5 justify-center">
                                    <button disabled={!SelectedOption == "" || questIndex + 1 == props.question.length} className="skip bg-slate-200 text-black font-semibold text-xl px-5 py-1 rounded-sm disabled:text-slate-600" onClick={clickSkip}> Skip </button>
                                    <button disabled={SelectedOption == ""} className="next bg-blue-600 text-white font-semibold text-xl px-5 py-1 rounded-sm disabled:bg-blue-200" onClick={() => {
                                        if (btn == "Check") {
                                            clickCheck()
                                        } else if (btn == "Next") {
                                            clickNext()
                                        }
                                        else {
                                            clickSubmit(correctAnswer, percent)
                                        }
                                    }}> {btn} </button>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div className="mt-[-10px] pt-5 px-10 theorySection flex gap-6 flex-col items-center border-l-2 border-gray-300 bg-yellow-50 text-black w-full overflow-auto h-[85vh] md:w-[calc(100vw-400px)]">
                            {props.subjective.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col gap-6' >
                                        <div className="quest flex gap-2 font-semibold text-xl text-green-800"><span>{item.no}</span> <div dangerouslySetInnerHTML={{ __html: item.question }}></div></div>
                                        <div className='text-lg' dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                                        <Div />
                                    </div>
                                )
                            })}
                        </div>
                    )
                    }
                </div>
                <div className={`${!isSummary && 'hidden'} ${istheory && 'hidden'} mt-[-10px] pt-5 flex flex-col  p-6 border-l-2 border-gray-300 bg-yellow-50 text-black w-full min-h-[80vh] md:w-[calc(100vw-400px)]`}>
                    <div className="flex gap-3 mb-8">
                        <NavLink to='/offeredSubjects' className="Practicegoto hover:text-blue-400 cursor-pointer"> &gt;&gt; Practice</NavLink>
                        <NavLink to={`/${props.sub.toLowerCase()}`} className="physicsgoto hover:text-blue-400 cursor-pointer"> &gt;&gt; {props.sub}</NavLink>
                    </div>
                    <Div />
                    <p className='cardContent'> Chapter Mastery : {percent}%</p>
                    <Div />
                    <div className="flex summaryContent justify-center items-center flex-col gap-5 bg-green-950 w-full min-h-[50vh] text-white mt-20 rounded-lg p-5">

                        <span className={` gap-3 ${percent < 40 ? 'flex' : 'hidden'}`}><img className='w-[70px]' src={motive} alt="picture" /><p className="mt-3 motive text-white cardHeading font-semibold">Don't Let Your Spirit Down! </p></span>
                        <span className={` gap-3 ${midCheck ? 'flex' : 'hidden'}`}><img className='w-[70px]' src={motive} alt="picture" /><p className="mt-3 motive text-white cardHeading font-semibold">Good, But You Have got More </p></span>
                        <span className={` gap-3 ${percent > 90 ? 'flex' : 'hidden'}`}><img className='w-[70px]' src={motive} alt="picture" /><p className="mt-3 motive text-white cardHeading font-semibold">Excellent, Way to Go </p></span>
                        <div className="points cardHeading"> Correct : {correctAnswer}/{props.question.length}</div>
                        <div className='cardContent'> Points earned : {correctAnswer} </div>
                        <button className="bg-green-300 text-green-950 px-3 py-1 rounded-xl text-xl font-semibold" onClick={goBack}> Return </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuestDisplay
