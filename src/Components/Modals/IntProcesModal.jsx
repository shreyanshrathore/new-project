import React, { useState } from 'react';
import { Modal } from '@mui/material';
import cancel from '../../assets/cancel.png';
import GreenTick from '../../assets/Vector.png';
import arrow from '../../assets/downArrow.png'

const IntProcesModal = ({ open, onClose }) => {
    const closeModal = () => {
        onClose(); // Close the JobModal1
    };
    const [rounds, setRounds] = useState([
        { id: 1, name: 'Round 1', description: 'Skill Assessment' },
        { id: 2, name: 'Round 2', description: 'Technical Interview' },
        { id: 3, name: 'Round 3', description: 'AI Based Video' },
        { id: 4, name: 'Final Round', description: 'Offline - Online Interview' },
    ]);


    const handleCancelRound = (id) => {
        // Remove the round with the specified id
        setRounds((prevRounds) => prevRounds.filter((round) => round.id !== id));
    };

    const handleAddRound = () => {
        // Add a new round with default values
        const newRound = {
            id: rounds.length + 1,
            name: `Round ${rounds.length + 1}`,
            description: 'Default Description',
        };
        setRounds((prevRounds) => [...prevRounds, newRound]);
    };

    return (
        <div>
            <Modal open={open} className='flex items-center justify-center'>
                <div className="w-[59rem]  bg-white rounded-[1.875rem] shadow-md relative">
                    {/* heading */}
                    <div>
                        <div className="text-black text-[2rem] font-600 font-Poppins mt-[2.68rem] flex justify-center">Create a Job</div>
                        <img src={cancel} className="w-10 h-10 absolute -mt-12 mb-14 ml-[54rem]" onClick={closeModal} alt="cancel" />
                    </div>
                    {/* bullets */}
                    <div className='flex flex-row gap-6 mt-6'>
                        <span className='flex flex-row gap-2'>
                            <div className="w-5 h-5 bg-green-600 rounded-full flex justify-center ml-64">
                                <img src={GreenTick} className='w-3 h-2 mt-[0.35rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Job Application </p>
                        </span>
                        <span className='flex flex-row gap-2 ml-2'>
                            <div className="w-5 h-5 bg-green-600 rounded-full flex justify-center ">
                                <img src={GreenTick} className='w-3 h-2 mt-[0.35rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Job Description </p>
                        </span>
                        <span className='flex flex-row gap-2 ml-2'>
                            <span className='text-black text-xs font-semibold font-Outfit  border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full'>3</span>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Interview Process </p>
                        </span>
                    </div>
                    {/* grey div1 */}
                    <div className="w-[49rem] h-[6rem] flex justify-center ml-[6rem] mt-[1.79rem] bg-slate-50 rounded-[1.875rem]" >
                        <p className="w-[41rem] h-[4.5rem] mt-[1.02rem] text-center text-zinc-500 text-base font-medium font-Poppins">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
                    </div>

                    {/* interview Rounds list */}
                    <div className='grid gap-y-1 justify-center mt-[2.12rem]'>
                        {/* rounds  */}
                        {rounds.map((round) => (
                            <div key={round.id} className='flex gap-4 relative'>
                                <div className="w-36 h-12 bg-white rounded-lg border border-black">
                                    <p className="text-neutral-400 text-base ml-[0.69rem] mt-[0.65rem] font-500 font-Poppins">{round.name}</p>
                                </div>
                                <div className="w-64 h-12 bg-white rounded-lg border border-indigo-600 flex" >
                                    <p className="text-indigo-600 text-base  ml-[0.75rem] mt-[0.65rem] font-500 font-['Poppins']">{round.description}</p>
                                    <img src={arrow} className='w-3 h-2 absolute mt-[1.25rem] ml-[14rem]'></img>
                                    <img
                                        src={cancel}
                                        className='w-7 h-7 absolute mt-[0.56rem] ml-[15rem]'
                                        onClick={() => handleCancelRound(round.id)}
                                        alt="cancel"
                                    ></img>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* add button */}
                    <button className="w-28 h-10 ml-[16.55rem] mt-[0.84rem] bg-black rounded-lg" onClick={handleAddRound}>
                        <p className="text-white text-xs font-medium font-Inter">Add Round</p>
                    </button>

                    {/* Last Part */}
                    <div className='grid grid-cols-2  mt-[1rem] ml-[6.75rem] '>
                        <div>
                            <div className="text-black text-base font-semibold font-['Poppins'] mb-[0.63rem]">Kindly Check the Skills</div>
                            <div className="w-80 h-12 bg-gray-100 rounded-lg">
                                <div className="text-neutral-400 text-base font-medium font-['Poppins'] ml-[0.69rem] pt-[0.75rem]">SEO & SEM</div>
                            </div>
                        </div>
                        <div>
                            <div className="text-black text-base font-semibold font-['Poppins'] mb-[0.63rem]">Any Platfrom or Qualification</div>
                            <div className="w-80 h-12 bg-gray-100 rounded-lg">
                                <div className="text-neutral-400 text-base font-medium font-['Poppins'] ml-[0.69rem] pt-[0.75rem]">Yes</div>
                            </div>
                        </div>
                        
                        <div>
                            <span className='flex flex-row justify-start mt-[1.12rem]'>
                                <p className="text-black text-base font-semibold font-Poppins mt-[0.3rem]">Finalize Questioner</p>
                                <button className='w-28 h-7 bg-indigo-600 rounded  ml-[1rem] '>
                                    <p className='text-white text-xs font-normal font-Poppins'>Edit with AI</p>
                                </button>
                            </span>
                            <div className="w-[21rem] h-[9rem]  bg-gray-100 rounded-lg" >
                                <p className=" mt-[1rem] ml-[0.69rem] pt-[1rem] text-neutral-400 text-[0.68rem] font-medium font-['Poppins']">selected Intern’s day-to-day responsibilities include. </p>
                                <div contentEditable="true" className="text-black text-base mt-[1.63rem] ml-[0.70rem] font-500 font-Poppins focus:outline-none">1.<br />2.<br />3.</div>
                            </div>
                        </div>
                        
                        <div>
                            <span className='flex flex-row justify-start mt-[1.12rem]'>
                                <p className="text-black text-base font-semibold font-Poppins mt-[0.3rem]">Share Availability</p>
                                <button className='w-28 h-7 bg-indigo-600 rounded  ml-[1rem] '>
                                    <p className='text-white text-xs font-normal font-Poppins'>Edit with AI</p>
                                </button>
                            </span>
                            <div className="w-[21rem] h-[9rem]  bg-gray-100 rounded-lg" >
                                <p className=" mt-[1rem] ml-[0.69rem] pt-[1rem] text-neutral-400 text-[0.68rem] font-medium font-['Poppins']">selected Intern’s day-to-day responsibilities include. </p>
                                <div contentEditable="true" className="text-black text-base mt-[1.63rem] ml-[0.70rem] font-500 font-Poppins focus:outline-none">1.<br />2.<br />3.</div>
                            </div>
                        </div>
                    </div>
                    {/* save button */}
                    <button className="w-56 h-12 bg-black rounded-lg mt-[3.31rem] ml-[23rem] mb-[1.88rem] ">
                        <p className="text-white text-lg font-medium font-Poppins" >Submit</p>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default IntProcesModal
