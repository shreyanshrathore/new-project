import React, { useState } from 'react';
import { Modal } from '@mui/material';
import cancel from '../../assets/cancel.png';


const AddJob = ({ open, onClose }) => {
    const closeModal = () => {
        onClose(); // Close the JobModal1
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
                            <span className='text-black text-xs font-semibold font-Outfit ml-64 border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full'>1</span>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Job Application </p>
                        </span>
                        <span className='flex flex-row gap-2'>
                            <span className='text-black text-xs font-semibold font-Outfit  border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full'>2</span>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Job Description </p>
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
                    {/* form */}
                    <form className='mt-9 ml-[6.75rem] grid grid-cols-2 p-2 gap-y-4 '>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Position Name</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2 ">Company Name</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Job Pipeline</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Add Location</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Contact Details</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Add Minimum Salary</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Add Maximum Salary</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Currency</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                        <span>
                            <p className="text-black text-base font-semibold font-Poppins mb-2">Select Frequency</p>
                            <input className="w-80 h-12 bg-gray-100 rounded-lg" ></input>
                        </span>
                    </form>
                    {/* save button */}
                    <button className="w-56 h-12 bg-black rounded-lg mt-[3.19rem] ml-[23rem] ">
                        <p className="text-white text-lg font-medium font-Poppins" >Save & Next</p>
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default AddJob;
