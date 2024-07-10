import React from 'react'
import Button from './Button'

const SubjectCard = (props) => {
    return (
        <div className='p-8 h-[60vh] w-auto border-2 border-slate-900 rounded-xl getShadow flex gap-3 flex-col items-center mx-auto mt-14'>

            <div className="image h-[70%] w-full"><img className='object-contain w-full h-full' src={props.image} alt="Physics Image" /></div>
            <p className='text-3xl font-semibold'>{props.subject}</p>


            <Button title='Go to' />
        </div>
    )
}

export default SubjectCard
