import React, { useState } from 'react';
import { Modal } from '@mui/material';
import cancel from '../../assets/cancel.png';
import GreenTick from '../../assets/Vector.png'


const JobDesModal = ({ open, close }) => {
    const closeModal = () => {
        close(); // Close the JobModal1
    };
    return (
        <div>
            <Modal open={open} className='flex items-center justify-center'>
                <div className="w-[59rem] h-[60rem] bg-white rounded-[1.875rem] shadow-md relative">
                    {/* heading */}
                    <div>
                        <div className="text-black text-[2rem] font-600 font-Poppins mt-[2.88rem] flex justify-center">Create a Job</div>
                        <img src={cancel} className="w-10 h-10 absolute -mt-12 mb-14 ml-[54rem]" onClick={closeModal} alt="cancel" />
                    </div>
                    {/* bullets */}
                    <div className='flex flex-row gap-6 mt-8'>
                        <span className='flex flex-row gap-2'>
                            <div className="w-5 h-5 bg-green-600 rounded-full flex justify-center ml-64">
                                <img src={GreenTick} className='w-3 h-2 mt-[0.35rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Job Application </p>
                        </span>
                        <span className='flex flex-row gap-2 ml-2'>
                            <span className='text-black text-xs font-semibold font-Outfit  border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full mr-[8rem]'>2</span>
                        </span>
                        <span className='flex flex-row gap-2'>
                            <span className='text-black text-xs font-semibold font-Outfit  border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full'>3</span>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Interview Process </p>
                        </span>
                    </div>
                    {/* grey div1 */}
                    <div className="w-[49rem] h-[6rem] flex justify-center ml-[6rem] mt-[2.63rem] bg-slate-50 rounded-[1.875rem]" >
                        <p className="w-[41rem] h-[4.5rem] mt-[1.02rem] text-center text-zinc-500 text-base font-medium font-Poppins">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
                    </div>
                    {/* from fields */}
                    <div className='grid justify-center mt-[2.56rem]'>

                        {/* ...1st part */}
                        <span className='flex flex-row justify-start'>
                            <p className="text-black text-base font-semibold font-Poppins mt-[0.3rem]">Skill Required</p>
                            <button className='w-28 h-7 bg-indigo-600 rounded  ml-[1rem] mb-[1rem]'>
                                <p className='text-white text-xs font-normal font-Poppins'>Suggest with AI</p>
                            </button>
                        </span>
                        <div className="w-[45.68rem] h-12 bg-gray-100 rounded-lg" />

                        {/* ...2nd part */}
                        <span className='flex flex-row justify-start mt-[1.44rem]'>
                            <p className="text-black text-base font-semibold font-Poppins mt-[0.3rem]">Intern's Responsibilities</p>
                            <button className='w-28 h-7 bg-indigo-600 rounded  ml-[1rem] mb-[1rem]'>
                                <p className='text-white text-xs font-normal font-Poppins'>Edit with AI</p>
                            </button>
                        </span>
                        {/* textfeild  */}
                        <div className="w-[45.68rem] h-[10.68rem]  bg-gray-100 rounded-lg" >
                            <p className=" mt-[1rem] ml-[0.69rem]  text-neutral-400 text-base font-medium font-['Poppins']">selected Intern’s day-to-day responsibilities include. </p>
                            <div contentEditable="true"  className="text-black text-base mt-[1.63rem] ml-[0.70rem] font-500 font-Poppins focus:outline-none">1.<br/>2.<br/>3.</div>
                        </div>
                    </div>
                    {/* save button */}
                    <button className="w-56 h-12 bg-black rounded-lg mt-[12.44rem] ml-[23rem] ">
                        <p className="text-white text-lg font-medium font-Poppins" >Save & Next</p>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default JobDesModal