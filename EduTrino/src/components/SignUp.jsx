import React from 'react'
import Navbar from './Navbar'
import signUp from "../assets/signUp.png"
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios';

const SignUp = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:3000/signUp', data).then(()=>{
            console.log("It worked tebayo !")
        })
        
    }
    const [checked, setchecked] = useState(false)

    const handleChecked = (e)=>{
        setchecked(e.target.checked)
    }

    return (
        <div>
            <Navbar />
            <div className="mainDabba flex 1400:flex-row flex-col gap-36 " data-aos='fade-up'>
                <div className='1400:w-[30%] md:w-1/2 w-[80%] h-[80vh] border-2 border-white mt-5 md:ml-20 mx-auto '>
                    <h1 className="text-center text-3xl font-semibold my-5">Create an Account</h1>
                    
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {isSubmitting && <div>Loading....</div>}
                            <div className='flex flex-col gap-5 md:pl-20 pl-4'>
                            <div className="email">
                                <input
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[gmail]+\.[com]{2,}$/,
                                            message: "Invalid email address",
                                        },
                                        minLength: { value: 3, message: 'More than 3' }
                                    })}
                                    type="text"
                                    placeholder='Gmail...'
                                    className='border border-slate-800 rounded-xl px-4 py-1 w-[90%]'
                                />
                                {errors.email && <div className='warning text-red-600'>{errors.email.message}</div>}
                            </div>
                            <div className="password text-black">
                                <input
                                    {...register("password", { required: true, minLength: { value: 5, message: 'More than 5' } })}
                                    type={checked? "text": "password"}
                                    placeholder='Password...'
                                    className='border border-slate-800 rounded-xl px-4 py-1 w-[90%]'
                                />
                                {errors.password && <div className='warning text-red-600'>{errors.password.message}</div>}
                            </div>
                            <p>Show <input type="checkbox" onChange={handleChecked}/></p>
                            <div className="name">
                                Name <input
                                    {...register("name", { required: true })}
                                    placeholder='Name..'
                                    type="text"
                                    className='border text-black border-slate-800 rounded-xl px-4 py-1 w-2/3'
                                />
                                {errors.name && <div className='warning text-red-600'>{errors.name.message}</div>}
                            </div>
                            <div className="class">
                                Class <select
                                    {...register("class", { required: true })}
                                    className='px-3 py-1 w-[25%] text-black border border-slate-800 rounded-md'
                                >
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                {errors.class && <div className='warning text-red-600'>{errors.class.message}</div>}
                            </div>
                            <button  type='submit' disabled={isSubmitting} className="continue bg-black text-white mt-5  border w-[40%] px-3 py-2 rounded-xl getShadow">Continue</button>
                            </div>
                        </form>
                        <div className="otherAssests flex flex-col gap-6 items-center mt-14">
                        <p>Already Have an Account ?</p>
                        <NavLink to='/login' className='text-blue-500 font-semibold text-lg'>Sign in</NavLink>
                    </div>
                    </div>
                <div className="image bg-white">
                    <img src={signUp} alt="Sign Up" />
                </div>
                    
                </div>
            </div>
        
    )
}

export default SignUp
